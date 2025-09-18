import { StyledTextField } from "./styles";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";

export function DateTime({ label, selectedDateTime, onChange }) {
  return (
    <>
      <DateTimePicker
        label={label}
        value={selectedDateTime}
        onChange={onChange}
        format="DD/MM/YYYY HH:mm"
        ampm={false}
        text
        slots={{
          textField: (params) => <StyledTextField {...params} />,
        }}
      />
    </>
  );
}
