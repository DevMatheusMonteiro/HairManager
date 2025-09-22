import styled from "styled-components";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  &:has(input:focus),
  &:has(button:focus) {
    label {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .error-message {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const StyledDateTimePicker = styled(DateTimePicker)`
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.medium};

  &:has(input:focus),
  &:has(button:focus) {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  .react-datetime-picker__inputGroup__input:invalid {
    background: none;
  }

  .react-datetime-picker__wrapper {
    border: none;
  }
  .react-datetime-picker__inputGroup__leadingZero,
  .react-datetime-picker__inputGroup input {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  .react-datetime-picker__inputGroup input {
    border: none;
    outline: none;
  }

  .react-datetime-picker__button {
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    background: none;
    border: none;
    border-radius: ${({ theme }) => theme.radius.small};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: transform ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};
    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.secondaryHover};
    }
  }

  .react-datetime-picker__calendar {
    width: 100%;
  }

  .custom-calendar {
    width: 100%;
    margin-top: 0.4rem;
    border-radius: ${({ theme }) => theme.radius.medium};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    padding: 10px;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textPrimary};

    .react-calendar__tile {
      border-radius: ${({ theme }) => theme.radius.small};
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      font-family: ${({ theme }) => theme.fonts.secondary};
      padding: 1rem;
      width: max-content;
      color: ${({ theme }) => theme.colors.textPrimary};
      position: relative;
      .holidayName {
        position: absolute;
        inset: 0;
      }
    }

    .react-calendar__tile:disabled {
      background: ${({ theme }) => theme.colors.background};
      opacity: 0.2;
    }

    .react-calendar__month-view__days__day--weekend {
      color: ${({ theme }) => theme.colors.primary};
    }

    .react-calendar__month-view__days__day--weekend:disabled {
      color: ${({ theme }) => theme.colors.primary};
    }

    .react-calendar__tile--now {
      background: ${({ theme }) => theme.colors.accent};
      color: #fff;
    }

    .react-calendar__tile--active {
      background: ${({ theme }) => theme.colors.secondary} !important;
      color: #fff;
    }

    .react-calendar__tile:hover,
    .react-calendar__tile:focus {
      background: ${({ theme }) => theme.colors.secondaryHover} !important;
      color: #fff;
    }

    .react-calendar__month-view__weekdays {
      font-family: ${({ theme }) => theme.fonts.secondary};
      abbr {
        text-transform: lowercase;
        text-decoration: none;
      }
      .react-calendar__month-view__weekdays__weekday--weekend {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .react-calendar__navigation {
      display: flex;
      gap: 0.4rem;
      .react-calendar__navigation__label {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-size: clamp(1.4rem, 3vw, 1.6rem);
      }

      .react-calendar__navigation__arrow {
        font-size: 2rem;
      }

      button {
        color: ${({ theme }) => theme.colors.textPrimary};
        font-weight: bold;
        border-radius: ${({ theme }) => theme.radius.small};

        &:disabled {
          background: ${({ theme }) => theme.colors.accent};
          opacity: 0.2;
        }

        &:hover,
        &:focus {
          background: ${({ theme }) => theme.colors.secondaryHover};
        }
      }
    }
  }
`;
