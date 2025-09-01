import { Container, Form } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { FaEnvelope, FaLock, FaWindowClose } from "react-icons/fa";
import { IconButton } from "../IconButton";
import { useEffect, useReducer, useRef, useState } from "react";
import { TextButton } from "../TextButton";

const initialState = {
  name: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export function LoginForm({
  open = false,
  onClose,
  handleOpenRegistrationForm,
}) {
  const containerRef = useRef();
  const inputRef = useRef();
  const [formState, dispatch] = useReducer(reducer, initialState);

  function handleChangeInput(field, value) {
    dispatch({ type: "CHANGE_INPUT", field: field, value: value });
  }

  useEffect(() => {
    if (!open) {
      dispatch({ type: "RESET_FORM" });
      containerRef.current.style.position = "absolute";
    } else {
      containerRef.current.style.position = "relative";
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <Container $open={open} ref={containerRef}>
      <IconButton id="closeButton" icon={FaWindowClose} onClick={onClose} />
      <h2>Login</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          ref={inputRef}
          disabled={!open}
          type="email"
          value={formState.name}
          icon={FaEnvelope}
          label="Email"
          id="emailLogin"
          onChange={(e) => handleChangeInput("name", e.target.value)}
        />
        <Input
          disabled={!open}
          value={formState.password}
          icon={FaLock}
          label="Senha"
          id="passwordLogin"
          type="password"
          onChange={(e) => handleChangeInput("password", e.target.value)}
        />
        <Button disabled={!open} type="submit">
          Entrar
        </Button>
      </Form>
      <p className="button">
        Não tem uma conta?{" "}
        <TextButton
          disabled={!open}
          title="Cadastre-se!"
          type="button"
          onClick={handleOpenRegistrationForm}
        />
      </p>
    </Container>
  );
}
