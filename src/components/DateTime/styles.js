import { createTheme } from "@mui/material/styles";

export const dateTimePickerTheme = (theme) => {
  if (!theme) return;
  return createTheme({
    palette: {
      primary: {
        main: theme.colors.primary,
      },
      background: {
        default: theme.colors.surface,
        paper: theme.colors.surface,
      },
      text: {
        primary: theme.colors.textPrimary,
        secondary: theme.colors.textSecondary,
      },
    },
    typography: {
      fontFamily: theme.fonts.secondary,
      fontSize: "clamp(1.4rem,3vw,1.6rem)",
    },
    components: {
      // MuiPickersDay: {
      //   styleOverrides: {
      //     root: {
      //       borderRadius: 8,
      //       "&.Mui-selected": {
      //         backgroundColor: "#bb86fc",
      //         color: "#000",
      //       },
      //       "&.Mui-selected:hover": {
      //         backgroundColor: "#9f6efc",
      //       },
      //       "&.Mui-disabled": {
      //         color: "#555",
      //       },
      //       "&.MuiPickersDay-today": {
      //         borderColor: "#bb86fc",
      //       },
      //     },
      //   },
      // },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: theme.radius.large,
            boxShadow: theme.shadows.xl,
          },
        },
      },
      MuiPickersToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.textPrimary,
          },
        },
      },
    },
  });
};
