import { Container, Form } from "./styles";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaWindowClose,
  FaFingerprint,
} from "react-icons/fa";
import Select from "react-select";
import { listUfs } from "../../services/ibgeService";
import { getAddressByZipCode } from "../../services/viaCep";
import { MdOutlineDescription } from "react-icons/md";
import { Input } from "../Input";
import { Button } from "../Button";
import { useEffect, useReducer, useRef, useState } from "react";
import { IconButton } from "../IconButton";
import { TextButton } from "../TextButton";
import { Textarea } from "../TextArea";

import { useForm } from "react-hook-form";

import { useAuth } from "../../hooks/authContext";

const initialState = {
  name: "",
  email: "",
  telephone: "",
  password: "",
  confirmPassword: "",
  address: {
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
    zip_code: "",
  },
};

const initialStateCustomer = { cpf: "" };
const initialStateBusiness = { cnpj: "", description: "" };

export function RegisterForm({
  open = false,
  onClose,
  handleOpenLoginForm,
  role = "customer",
}) {
  const {
    register: useFormRegister,
    handleSubmit,
    reset,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...initialState,
      extra: role === "customer" ? initialStateCustomer : initialStateBusiness,
    },
  });
  const [ufs, setUfs] = useState([]);
  const { register } = useAuth();
  const containerRef = useRef();
  const inputRef = useRef();

  async function handleRegister() {
    try {
      console.log(watch());
      const payload = watch();
      await register({
        ...payload,
        role,
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUfs() {
    const res = await listUfs();
    setUfs(res);
  }
  async function fetchAddressInfo() {
    const zip_code = watch("address.zip_code");
    clearErrors("address.zip_code");
    if (!/^[0-9]{8}$/.test(zip_code)) {
      setError("address.zip_code", {
        type: "pattern",
        message: "Digite um cep válido com 8 números",
      });
      return;
    }
    const res = await getAddressByZipCode(watch("address.zip_code"));
    if (res.erro) {
      setError("address.zip_code", {
        type: "manual",
        message: "Nenhum endereço encontrado com esse CEP",
      });
      return;
    }
    setValue("address.street", res.logradouro);
    setValue("address.district", res.bairro);
    setValue("address.city", res.localidade);
    setValue("address.state", res.uf);
  }

  useEffect(() => {
    if (!open) {
      reset();
      containerRef.current.style.position = "absolute";
    } else {
      containerRef.current.style.position = "relative";
      inputRef.current?.focus();
      // fetchUfs();
    }
  }, [open]);

  return (
    <Container $open={open} ref={containerRef}>
      <IconButton icon={FaWindowClose} onClick={onClose} />
      <h2>Cadastro de {role == "customer" ? "Cliente" : "Negócio"}</h2>
      <Form
        onSubmit={handleSubmit(() => {
          console.log(errors);
          handleRegister();
        })}
      >
        <div className="personalInfo-group">
          <Input
            errorMessage={errors.name?.message}
            ref={inputRef}
            disabled={!open}
            value={watch("name")}
            {...useFormRegister("name", { required: "Nome é obrigatório" })}
            icon={FaUser}
            label="Nome"
            id="nameRegister"
          />
          <Input
            errorMessage={errors.email?.message}
            disabled={!open}
            value={watch("email")}
            {...useFormRegister("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um email válido",
              },
            })}
            icon={FaEnvelope}
            label="Email"
            id="emailRegister"
          />
          {role === "customer" ? (
            <Input
              errorMessage={errors.extra?.cpf?.message}
              disabled={!open}
              value={watch("extra.cpf")}
              {...useFormRegister("extra.cpf", {
                required: "CPF é obrigatório",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Digite apenas números",
                },
              })}
              icon={FaFingerprint}
              label="CPF"
              id="cpfRegister"
            />
          ) : (
            <Input
              errorMessage={errors.extra?.cnpj?.message}
              disabled={!open}
              value={watch("extra.cnpj")}
              {...useFormRegister("extra.cnpj", {
                required: "CNPJ é obrigatório",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Digite apenas números",
                },
              })}
              icon={FaFingerprint}
              label="CNPJ"
              id="cnpjRegister"
            />
          )}
          <Input
            errorMessage={errors.telephone?.message}
            disabled={!open}
            value={watch("telephone")}
            {...useFormRegister("telephone", {
              required: "Telefone é obrigatório",
              pattern: {
                value: /^[0-9]+$/,
                message: "Digite apenas números",
              },
            })}
            icon={FaPhone}
            label="Telefone"
            id="telephoneRegister"
          />
          {role == "business" && (
            <Textarea
              disabled={!open}
              value={watch("extra.description")}
              {...useFormRegister("extra.description", {})}
              icon={MdOutlineDescription}
              label="Descrição"
              id="descriptionRegister"
            />
          )}
        </div>
        <div className="address-group">
          <Input
            errorMessage={errors.address?.zip_code?.message}
            disabled={!open}
            value={watch("address.zip_code")}
            {...useFormRegister("address.zip_code", {
              required: "CEP é obrigatório",
              pattern: {
                value: /^[0-9]{8}$/,
                message: "Digite um cep válido com 8 números",
              },
              maxLength: 8,
              onBlur: fetchAddressInfo,
            })}
            label="CEP"
            id="zipCodeRegister"
            type="text"
          />
          <Input
            errorMessage={errors.address?.street?.message}
            disabled={!open}
            value={watch("address.street")}
            {...useFormRegister("address.street", {
              required: "Logradouro é obrigatório",
            })}
            label="Logradouro"
            id="streetRegister"
            type="text"
          />
          <Input
            errorMessage={errors.address?.number?.message}
            disabled={!open}
            value={watch("address.number")}
            {...useFormRegister("address.number", {
              required: "Número é obrigatório",
            })}
            label="Número"
            id="numberRegister"
            type="text"
          />
          <Input
            errorMessage={errors.address?.complement?.message}
            disabled={!open}
            value={watch("address.complement")}
            {...useFormRegister("address.complement", {})}
            label="Complemento"
            id="complementRegister"
            type="text"
          />
          <div className="district-city-state">
            <Input
              errorMessage={errors.address?.district?.message}
              disabled={!open}
              value={watch("address.district")}
              {...useFormRegister("address.district", {
                required: "Bairro é obrigatório",
              })}
              label="Bairro"
              id="districtRegister"
              type="text"
            />
            <Input
              errorMessage={errors.address?.city?.message}
              disabled={!open}
              value={watch("address.city")}
              {...useFormRegister("address.city", {
                required: "Cidade é obrigatória",
              })}
              label="Cidade"
              id="cityRegister"
              type="text"
            />
            <Input
              errorMessage={errors.address?.state?.message}
              disabled={!open}
              value={watch("address.state")}
              {...useFormRegister("address.state", {
                required: "UF é obrigatória",
              })}
              label="UF"
              id="stateRegister"
              type="text"
            />
          </div>
        </div>
        <div className="password-group">
          <Input
            errorMessage={errors.password?.message}
            disabled={!open}
            value={watch("password")}
            {...useFormRegister("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
            })}
            icon={FaLock}
            label="Senha"
            id="passwordRegister"
            type="password"
          />
          <Input
            errorMessage={errors.confirmPassword?.message}
            disabled={!open}
            value={watch("confirmPassword")}
            {...useFormRegister("confirmPassword", {
              required: "Confirmação de senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter pelo menos 6 caracteres",
              },
              validate: (value) =>
                value === watch("password") || "As senhas não coincidem",
            })}
            icon={FaLock}
            label="Confirme sua Senha"
            id="confirmPasswordRegister"
            type="password"
          />
        </div>
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
