import { Select } from "../Select";
import { Container } from "./styles";

const defaultHours = Array(24)
  .fill()
  .map((_, i) => ({
    label: String(i++).padStart(2, "0"),
    value: i++,
    disabled: false,
  }));
const defaultMinutes = Array(60)
  .fill()
  .map((_, i) => ({
    label: String(i++).padStart(2, "0"),
    value: i++,
    disabled: false,
  }));

export function Time({
  label,
  id,
  onChangeHour,
  hours = defaultHours,
  hourValue,
  disabledHour,
  onChangeMinute,
  minutes = defaultMinutes,
  minuteValue,
  disabledMinute,
}) {
  return (
    <Container className="time-component">
      <label htmlFor={id}>{label}</label>
      <div className="time-wrapper">
        <Select
          placeholder="00"
          disabled={disabledHour}
          options={hours}
          filterOption={(opt, inputValue) => opt.label.includes(inputValue)}
          onChange={onChangeHour}
          value={hourValue}
        />
        <div className="divider">:</div>
        <Select
          placeholder="00"
          disabled={disabledMinute}
          options={minutes}
          onChange={onChangeMinute}
          value={minuteValue}
          filterOption={(opt, inputValue) => opt.label.includes(inputValue)}
        />
      </div>
    </Container>
  );
}
