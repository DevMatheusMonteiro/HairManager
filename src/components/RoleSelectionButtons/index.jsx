import { Container } from "./styles";
import { Button } from "../Button";
import { FaWindowClose } from "react-icons/fa";
import { IconButton } from "../IconButton";
import { useEffect, useReducer, useRef, useState } from "react";

export function RoleSelectionButtons({
  open = true,
  onClose,
  handleOpenRegistrationForm,
  setRole,
}) {
  const containerRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    if (!open) {
      containerRef.current.style.position = "absolute";
    } else {
      containerRef.current.style.position = "relative";
      buttonRef.current.focus();
    }
  }, [open]);

  return (
    <Container $open={open} ref={containerRef}>
      <IconButton id="closeButton" icon={FaWindowClose} onClick={onClose} />
      <Button
        ref={buttonRef}
        disabled={!open}
        type="button"
        onClick={() => {
          handleOpenRegistrationForm();
          setRole("customer");
        }}
      >
        Sou Cliente
      </Button>
      <Button
        disabled={!open}
        type="button"
        onClick={() => {
          handleOpenRegistrationForm();
          setRole("business");
        }}
      >
        Sou Barbearia/Salão
      </Button>
    </Container>
  );
}
