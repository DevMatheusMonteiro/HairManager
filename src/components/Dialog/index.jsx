import { useRef } from "react";
import { Container } from "./styles";

export function Dialog({ open = false, onClose, children }) {
  const containerRef = useRef();

  function handleClickOutside(e) {
    if (containerRef.current && containerRef.current == e.target) onClose();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") onClose();
  }

  open && (window.onkeydown = handleKeyDown);
  return (
    <Container ref={containerRef} $open={open} onClick={handleClickOutside}>
      {children}
    </Container>
  );
}
