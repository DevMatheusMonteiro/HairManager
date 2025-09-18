import styled from "styled-components";

import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    max-width: 200px;

    .MuiInputBase-root {
      border-radius: ${({ theme }) => theme.radius.medium};
      background: ${({ theme }) => theme.colors.surface};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.border};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.border};
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #1976d2;
      /* border-width: 2px; */
    }

    input {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textPrimary};
      padding: 10px 14px;
    }
  }
`;
