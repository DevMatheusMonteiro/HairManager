import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.backgroundWeakOpacity};
  padding: 2rem;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  scale: ${({ $open }) => ($open ? 1 : 0.8)};
  transition: scale ${({ theme }) => theme.transitions.normal},
    opacity ${({ theme }) => theme.transitions.normal};
`;
