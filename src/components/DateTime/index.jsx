import { Container, StyledDateTimePicker } from "./styles";
import { FaCalendarAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export function DateTime({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  tileDisabled,
  tileContent,
  format,
  onActiveStartDateChange,
  errorMessage,
  clearIcon = false,
}) {
  return (
    <Container className="datetime-component">
      <label htmlFor="calendar">{label}</label>
      <StyledDateTimePicker
        onChange={onChange}
        value={value}
        locale="pt-BR"
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="YYYY"
        hourPlaceholder="HH"
        minutePlaceholder="mm"
        format={format}
        minDate={minDate}
        maxDate={maxDate}
        calendarIcon={FaCalendarAlt}
        clearIcon={clearIcon ? FaXmark : null}
        calendarProps={{
          tileDisabled: tileDisabled,
          onActiveStartDateChange: onActiveStartDateChange,
          className: "custom-calendar",
          tileContent: tileContent,
        }}
        disableClock
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </Container>
  );
}
