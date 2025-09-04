import { Container, Form } from "./styles";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaWindowClose,
  FaFingerprint,
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

const initialStateCustomer = { cpf: "" };
const initialStateBusiness = { cnpj: "" };

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELDS":
      return { ...state, [action.field]: action.value };
    case "CHANGE_EXTRA_FIELDS":
      return {
        ...state,
        extra: { ...state.extra, [action.field]: action.value },
      };
    case "RESET_FORM":
      if (action.role === "customer")
        return { ...initialState, extra: initialStateCustomer };
      if (action.role === "business")
        return { ...initialState, extra: initialStateBusiness };
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
  const [formState, dispatch] = useReducer(reducer, {
    ...initialState,
    extra: role === "customer" ? initialStateCustomer : initialStateBusiness,
  });

  function handleChangeProfileFields(field, value) {
    dispatch({ type: "CHANGE_FIELDS", field: field, value: value });
  }

  function handleChangeExtraFields(field, value) {
    dispatch({
      type: "CHANGE_EXTRA_FIELDS",
      field: field,
      value: value,
    });
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      if (formState.password != formState.confirmPassword) return;

      console.log({ ...formState, email: formState.email.trim(), role });

      const data = await register({
        ...formState,
        email: formState.email.trim(),
        role,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!open) {
      dispatch({ type: "RESET_FORM", role });
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
      <Form onSubmit={handleRegister}>
        <Input
          ref={inputRef}
          disabled={!open}
          value={formState.name}
          onChange={(e) => handleChangeProfileFields("name", e.target.value)}
          icon={FaUser}
          label="Nome"
          id="nameRegister"
        />
        <Input
          disabled={!open}
          value={formState.email}
          onChange={(e) => handleChangeProfileFields("email", e.target.value)}
          icon={FaEnvelope}
          label="Email"
          id="emailRegister"
        />
        {role === "customer" ? (
          <Input
            disabled={!open}
            value={formState.extra.cpf}
            onChange={(e) => handleChangeExtraFields("cpf", e.target.value)}
            icon={FaFingerprint}
            label="CPF"
            id="cpfRegister"
          />
        ) : (
          <Input
            disabled={!open}
            value={formState.extra.email}
            onChange={(e) => handleChangeExtraFields("cnpj", e.target.value)}
            icon={FaFingerprint}
            label="CNPJ"
            id="cnpjRegister"
          />
        )}
        <Input
          disabled={!open}
          value={formState.telephone}
          onChange={(e) =>
            handleChangeProfileFields("telephone", e.target.value)
          }
          icon={FaPhone}
          label="Telefone"
          id="telephoneRegister"
        />
        <Input
          disabled={!open}
          value={formState.password}
          onChange={(e) =>
            handleChangeProfileFields("password", e.target.value)
          }
          icon={FaLock}
          label="Senha"
          id="passwordRegister"
          type="password"
        />
        <Input
          disabled={!open}
          value={formState.confirmPassword}
          onChange={(e) =>
            handleChangeProfileFields("confirmPassword", e.target.value)
          }
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
