import { useRef } from "react";
import { Container } from "./styles";

export function Dialog({ open = false, ref, handleClickOutside, children }) {
  return (
    <Container ref={ref} $open={open} onClick={handleClickOutside}>
      {children}
    </Container>
  );
}
