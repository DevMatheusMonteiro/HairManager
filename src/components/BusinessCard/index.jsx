import { Container } from "./styles";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);

export function BusinessCard({ data }) {
  function getDayOfWeek(day) {
    return ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"][day];
  }

  function formatTime(time) {
    const [hour, minute] = time.split(":");
    return dayjs()
      .hour(Number(hour))
      .minute(Number(minute))
      .second(0)
      .tz("America/Sao_Paulo")
      .format("HH:mm");
  }
  return (
    <Container onClick={(e) => console.log(e)}>
      <h3>{data.name}</h3>
      <p>{data.description}</p>

      <ul className="hours-list">
        {data.hours.map((hour) => (
          <li key={hour.id} className={`${hour.is_open ? "open" : "close"}`}>
            <span className={`day ${hour.is_open ? "open" : "close"}`}>
              {getDayOfWeek(hour.day_of_week)}
            </span>
            {hour.is_open ? (
              <>
                <span className="opening">{formatTime(hour.opening_time)}</span>
                <span className="closing">{formatTime(hour.closing_time)}</span>
              </>
            ) : (
              <span className="closed">fechado</span>
            )}
          </li>
        ))}
      </ul>
      <ul className="services-list">
        {data.services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </Container>
  );
}
