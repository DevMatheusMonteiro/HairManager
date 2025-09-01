import { Container, Form } from "./styles";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaWindowClose,
} from "react-icons/fa";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useEffect, useReducer, useRef, useState } from "react";
import { IconButton } from "../IconButton";
import { TextButton } from "../TextButton";

import { register } from "../../services/authService";

const initialState = {
  name: "",
  email: "",
  telephone: "",
  password: "",
  confirmPassword: "",
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

export function RegistrationForm({
  open = false,
  onClose,
  handleOpenLoginForm,
  role = "customer",
}) {
  const containerRef = useRef();
  const inputRef = useRef();
  const [formState, dispatch] = useReducer(reducer, initialState);

  function handleChangeInput(field, value) {
    dispatch({ type: "CHANGE_INPUT", field: field, value: value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const data = await register({ ...formState, role });
    } catch (error) {}
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
      <IconButton icon={FaWindowClose} onClick={onClose} />
      <h2>Cadastro de {role == "customer" ? "Cliente" : "Negócio"}</h2>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          ref={inputRef}
          disabled={!open}
          value={formState.name}
          onChange={(e) => handleChangeInput("name", e.target.value)}
          icon={FaUser}
          label="Nome"
          id="nameRegister"
        />
        <Input
          disabled={!open}
          value={formState.email}
          onChange={(e) => handleChangeInput("email", e.target.value)}
          icon={FaEnvelope}
          label="Email"
          id="emailRegister"
        />
        <Input
          disabled={!open}
          value={formState.telephone}
          onChange={(e) => handleChangeInput("telephone", e.target.value)}
          icon={FaPhone}
          label="Telefone"
          id="telephoneRegister"
        />
        <Input
          disabled={!open}
          value={formState.password}
          onChange={(e) => handleChangeInput("password", e.target.value)}
          icon={FaLock}
          label="Senha"
          id="passwordRegister"
          type="password"
        />
        <Input
          disabled={!open}
          value={formState.confirmPassword}
          onChange={(e) => handleChangeInput("confirmPassword", e.target.value)}
          icon={FaLock}
          label="Confirme sua Senha"
          id="confirmPasswordRegister"
          type="password"
        />
        <Button disabled={!open} type="submit">
          Registrar
        </Button>
      </Form>
      <p className="button">
        Ja tem uma conta? Faça o{" "}
        <TextButton
          disabled={!open}
          title="login!"
          type="button"
          onClick={handleOpenLoginForm}
        />
      </p>
    </Container>
  );
}
