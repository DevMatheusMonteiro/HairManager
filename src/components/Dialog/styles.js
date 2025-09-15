import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999999;
  inset: 0;
  background: ${({ theme }) => theme.colors.backgroundWeakOpacity};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.normal};
`;
