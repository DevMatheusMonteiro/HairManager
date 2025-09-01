import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.backgroundWeakOpacity};
  padding: 2rem;
  z-index: 999999;
  display: flex;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.normal};
  justify-content: center;
  align-items: center;
`;
