import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "styled-components";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { dateTimePickerTheme } from "./styles";

export function DateTime({ label, value, onChange }) {
  const theme = dateTimePickerTheme(useTheme());
  return (
    <ThemeProvider theme={theme}>
      <DateTimePicker
        label={label}
        ampm={false}
        value={value}
        onChange={onChange}
      />
    </ThemeProvider>
  );
}
