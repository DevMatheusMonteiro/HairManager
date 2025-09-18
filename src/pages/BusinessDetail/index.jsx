import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { findBusinessById } from "../../services/businessService";
import { createAppointment } from "../../services/appointmentService";
import { useAuth } from "../../hooks/authContext";

import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DateTime } from "../../components/DateTime";

export default function BusinessDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState();
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs());

  async function fetchBusiness() {
    const res = await findBusinessById(id);
    setData(res);
  }

  useEffect(() => {
    fetchBusiness();
  }, []);

  const handleDateChange = (newValue) => {
    setSelectedDateTime(newValue);
  };

  const handleSchedule = async () => {
    try {
      const appointment = await createAppointment({
        businessId: id,
        professionalId: null,
        customerId: user.id,
        serviceId: null,
        scheduledAt: selectedDateTime.toISOString(),
      });
      console.log(appointment);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      {data && (
        <div className="wrapper">
          <h2>{data.name}</h2>

          <DateTime
            label="Escolha data e hora"
            value={selectedDateTime}
            onChange={handleDateChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSchedule}
            sx={{ mt: 2 }}
          >
            Agendar
          </Button>
        </div>
      )}
    </Container>
  );
}
