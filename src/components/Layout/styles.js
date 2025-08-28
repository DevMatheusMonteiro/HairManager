import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas: "header" "main" "footer";
  height: 100vh;

  > main {
    grid-area: main;
    overflow: auto;
  }

  @media (max-height: 600px) {
    main {
      overflow: visible;
    }
  }
`;
