import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 1px; */
  .time-wrapper {
    display: flex;
    align-items: center;
    gap: 2px;
    .divider {
      font-size: 3.2rem;
      font-weight: bold;
    }
    .select-component {
      .select__indicators {
        display: none;
      }
    }
  }
`;
