import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { findBusinessById } from "../../services/businessService";
import { createAppointment } from "../../services/appointmentService";
import { getHolidays } from "../../services/invertextoService";
import { useAuth } from "../../hooks/authContext";
import { sendEmail } from "../../services/authService";

import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
import { DateTime } from "../../components/DateTime";
import { Time } from "../../components/Time";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

const initialState = {
  professional: null,
  service: null,
  date: null,
  time: { hour: "00", minute: "00" },
};

export default function BusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      ...initialState,
    },
  });
  const [data, setData] = useState();
  const [dayHours, setDayHours] = useState([]);
  const [disabledHour, setDisabledHour] = useState(true);
  const [disabledMinute, setDisabledMinute] = useState(true);
  const [minutes, setMinutes] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [holidays, setHolidays] = useState([]);

  async function fetchBusiness() {
    const res = await findBusinessById(id);
    setData(res);
  }

  async function fetchHolidays() {
    const res = await getHolidays(year);
    setHolidays(res);
  }

  function disableDates({ date, view }) {
    if (view === "month") {
      return (
        data.hours
          .filter((hour) => !hour.is_open)
          .some((hour) => hour.day_of_week === date.getDay()) ||
        holidays
          .filter(
            (holiday) =>
              holiday.type === "feriado" ||
              holiday.name.toLowerCase() == "carnaval" ||
              holiday.name.toLowerCase() == "quarta-feira de cinzas"
          )
          .some((holiday) => dayjs(holiday.date).isSame(dayjs(date)))
      );
    }

    return false;
  }

  function putHolidayNameOnDate({ date, view }) {
    if (view === "month") {
      const holiday = holidays.find((holiday) =>
        dayjs(holiday.date).isSame(dayjs(date))
      );
      if (holiday)
        return <div title={holiday.name} className="holidayName"></div>;
    }
    return null;
  }

  function handleDateChange(val) {
    if (!val) {
      setValue("time", { hour: null, minute: null });
      setDisabledHour(true);
      setDisabledMinute(true);
      return setValue("date", null);
    }

    const date = dayjs(val).tz("America/Sao_Paulo");

    const businessHour = data.hours.find(
      (hour) => hour.day_of_week === date?.toDate().getDay()
    );
    const { openingTime, closingTime } = returnOpeningAndClosingTime(
      businessHour,
      date
    );
    generateDayHours(openingTime, closingTime);

    setValue("date", date?.toISOString());
  }

  function generateDayHours(openingTime, closingTime) {
    setDisabledHour(true);
    setDisabledMinute(true);
    const diff = closingTime.diff(openingTime, "hour");
    let hourOpen = openingTime.hour();
    let minuteOpen = openingTime.minute();
    let minuteClose = closingTime.minute();
    const dayHours = Array(diff + 1)
      .fill()
      .map((_, i) => {
        let minutes = [];
        if (i === 0) {
          for (let j = minuteOpen; j < 60; j++)
            minutes.push({ label: String(j).padStart(2, "0"), value: j });
        } else if (i === diff) {
          for (let j = 0; j <= minuteClose; j++)
            minutes.push({ label: String(j).padStart(2, "0"), value: j });
        } else {
          for (let j = 0; j < 60; j++)
            minutes.push({ label: String(j).padStart(2, "0"), value: j });
        }
        const hour_minute = {
          label: String(hourOpen).padStart(2, "0"),
          value: hourOpen,
          minutes: minutes,
        };
        hourOpen++;
        return hour_minute;
      });
    setDayHours(dayHours);
    setDisabledHour(false);
    setDisabledMinute(false);
    setMinutes(dayHours[0].minutes);
    setValue("time", {
      hour: dayHours[0],
      minute: dayHours[0].minutes[0],
    });
  }

  function returnOpeningAndClosingTime(businessHour, date) {
    const [hourOpen, minuteOpen] = businessHour.opening_time.split(":");
    const [hourClose, minuteClose] = businessHour.closing_time.split(":");

    const openingTime = date
      .hour(Number(hourOpen))
      .minute(Number(minuteOpen))
      .second(0)
      .tz("America/Sao_Paulo");
    const closingTime = date
      .hour(Number(hourClose))
      .minute(Number(minuteClose))
      .second(0)
      .tz("America/Sao_Paulo");

    return { openingTime, closingTime };
  }

  function validateIfItsClosed(businessHour, date) {
    if (date.toDate().getDay() !== businessHour.day_of_week) return false;
    const { openingTime, closingTime } = returnOpeningAndClosingTime(
      businessHour,
      date
    );

    return date.isBefore(openingTime) || date.isAfter(closingTime);
  }
  async function handleSchedule() {
    clearErrors();
    const date = dayjs(watch("date"))
      .hour(watch("time.hour").value)
      .minute(watch("time.minute").value)
      .tz("America/Sao_Paulo");
    const now = dayjs();
    if (date.isBefore(now)) {
      setError("date", {
        type: "manual",
        message: "Data retroativa",
      });
      return;
    }

    const isClosed = data.hours
      .filter((hour) => hour.is_open)
      .find((hour) => {
        return validateIfItsClosed(hour, date);
      });

    if (isClosed) {
      setError("date", {
        type: "manual",
        message: "Fechado nesse horário",
      });
      return;
    }

    const payload = {
      customer_id: profile.id,
      business_id: data.id,
      professional_id: watch("professional").id,
      service_id: watch("service").id,
      date: date.toISOString(),
    };
    console.log(payload);
    try {
      await createAppointment(payload);
      sendEmail();
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBusiness();
  }, []);
  useEffect(() => {
    fetchHolidays();
  }, [year]);

  return (
    <Container>
      <div className="wrapper">
        <TextButton title="voltar" onClick={() => navigate(-1)} />
        {data && (
          <>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>Telefone: {data.telephone}</p>
            <form onSubmit={handleSubmit(handleSchedule)}>
              <div className="service-professional">
                <Controller
                  name="service"
                  control={control}
                  rules={{ required: "Selecione um serviço" }}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      errorMessage={fieldState.error?.message}
                      id="service"
                      label="Escolha um serviço"
                      placeholder="Escolha um serviço"
                      options={data.services}
                      getOptionLabel={(opt) =>
                        `${opt?.name} - R$${opt?.price
                          .toFixed(2)
                          .replace(".", ",")}`
                      }
                      getOptionValue={(opt) => opt?.id}
                      isClearable
                    />
                  )}
                />
                <Controller
                  name="professional"
                  control={control}
                  rules={{ required: "Selecione um profissional" }}
                  render={({ field, fieldState }) => (
                    <Select
                      {...field}
                      label="Escolha um profissional"
                      errorMessage={fieldState.error?.message}
                      id="professional"
                      placeholder="Escolha um profissional"
                      options={data.professionals}
                      getOptionLabel={(opt) =>
                        `${opt?.name} - ${opt?.specialty}`
                      }
                      getOptionValue={(opt) => opt?.id}
                      isClearable
                    />
                  )}
                />
              </div>
              <div>
                <label>Escolha uma data e hora disponível</label>
                <div className="datetime">
                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: "Selecione uma data" }}
                    render={({ field, fieldState }) => (
                      <DateTime
                        {...field}
                        // label="Escolha uma data"
                        clearIcon
                        format="dd/MM/yyyy"
                        errorMessage={fieldState.error?.message}
                        onChange={handleDateChange}
                        minDate={dayjs().hour(0).minute(0).second(0).toDate()}
                        tileDisabled={disableDates}
                        onActiveStartDateChange={({ activeStartDate }) =>
                          activeStartDate.getFullYear() !== year &&
                          setYear(activeStartDate.getFullYear())
                        }
                        tileContent={putHolidayNameOnDate}
                      />
                    )}
                  />
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <Time
                        // label="Escolha um horário disponível"
                        hours={dayHours}
                        minutes={minutes}
                        hourValue={field.value?.hour}
                        minuteValue={field.value?.minute}
                        onChangeHour={(val) => {
                          field.onChange({
                            minute: val.minutes[0],
                            hour: val,
                          });
                          setMinutes(val.minutes);
                          setDisabledMinute(false);
                        }}
                        onChangeMinute={(val) => {
                          field.onChange({ ...field.value, minute: val });
                        }}
                        disabledHour={disabledHour}
                        disabledMinute={disabledMinute}
                      />
                    )}
                  />
                </div>
              </div>
              <Button>Agendar</Button>
            </form>
          </>
        )}
      </div>
    </Container>
  );
}
