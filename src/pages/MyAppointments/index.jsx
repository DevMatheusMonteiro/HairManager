import { useEffect, useState } from "react";

import {
  findAppointmentsByBusiness,
  findAppointmentsByCustomer,
  updateAppointmentStatus,
} from "../../services/appointmentService";
import { useAuth } from "../../hooks/authContext";

import { sendEmail } from "../../services/authService";
import { Container } from "./styles";
import { Select } from "../../components/Select";
import { IconButton } from "../../components/IconButton";
import { IoIosCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import dayjs from "dayjs";

export default function MyAppointments() {
  const options = [
    { label: "Solicitado", value: "requested" },
    { label: "Confirmado", value: "confirmed" },
    { label: "Cancelado", value: "canceled" },
    { label: "Concluído", value: "completed" },
  ];
  const { profile } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("requested");
  const [refreshing, setRefreshing] = useState(true);

  function displayStatus(status) {
    return options.find((item) => item.value === status).label;
  }

  async function handleConfirmAppointment(appointment) {
    if (appointment.status !== "requested") {
      alert("Só é possível confirmar agendamentos solicitados.");
      return;
    }

    const result = window.confirm(
      "Tem certeza que deseja confirmar este agendamento?"
    );
    if (!result) return;
    try {
      await updateAppointmentStatus(appointment.id, "confirmed");
      await sendEmail({
        subject: "Serviço Confirmado",
        html: `
                  ${`<p>${
                    appointment.services.name
                  } confirmado pelo estabelecimento ${profile.name}</p>
                      <p>Data: ${new Date(
                        appointment.date
                      ).toLocaleString()}</p>
                      `}
                `,
      });
      fetchAppointments();
    } catch (e) {
      console.error(e);
    }
  }

  async function handleCancelAppointment(appointment) {
    if (appointment.status !== "requested") {
      alert("Só é possível cancelar agendamentos ainda não confirmados.");
      return;
    }

    const result = window.confirm(
      "Tem certeza que deseja cancelar este agendamento?"
    );

    if (!result) return;
    try {
      await updateAppointmentStatus(appointment.id, "canceled");
      await sendEmail({
        subject: "Serviço Cancelado",
        html: `${
          profile.role === "customer"
            ? `<p>${appointment.services.name} cancelado pelo cliente ${profile.name}</p>`
            : `<p>${appointment.services.name} cancelado pelo estabelecimento ${profile.name}</p>`
        }`,
      });
      fetchAppointments();
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchAppointments() {
    try {
      setRefreshing(true);
      const res =
        profile.role == "customer"
          ? await findAppointmentsByCustomer({
              customer_id: profile.id,
              status: statusFilter ?? "requested",
            })
          : await findAppointmentsByBusiness({
              business_id: profile.id,
              status: statusFilter ?? "requested",
            });
      setAppointments(res);
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    if (!profile) return;
    fetchAppointments();
  }, [statusFilter, profile]);

  return (
    <Container>
      <Select
        placeholder="Escolha um status para filtrar"
        defaultValue={options[0]}
        options={options}
        onChange={(val) => {
          setStatusFilter(val.value);
        }}
        value={statusFilter.value}
      />
      <section id="appointments-list">
        {refreshing ? (
          <LoadingSpinner />
        ) : appointments.length > 0 ? (
          appointments.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.services.name}</h3>
              <p>{displayStatus(item.status)}</p>
              <p>Data: {dayjs(item.date).format("DD/MM/YYYY HH:mm")}</p>
              <div className="container-buttons">
                {profile.role === "business" && (
                  <IconButton
                    id="confirm"
                    title="Clique para confirmar"
                    icon={IoIosCheckmarkCircleOutline}
                    onClick={() => handleConfirmAppointment(item)}
                  />
                )}
                <IconButton
                  id="cancel"
                  title="Clique para cancelar"
                  icon={IoMdTrash}
                  onClick={() => handleCancelAppointment(item)}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum agendamento encontrado</p>
        )}
      </section>
    </Container>
  );
}
