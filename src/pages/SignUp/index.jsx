import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignUp() {
  return (
    <Container>
      <div className="form-container">
        <h1>Registro</h1>
        <img
          src={logo}
          alt="Hair Manager Logo"
          title="Hair Manager Logo"
          id="logo"
        />
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input icon={FaUser} label="Nome" id="nameRegister" />
          <Input icon={FaEnvelope} label="Email" id="emailRegister" />
          <Input icon={FaPhone} label="Telefone" id="telephoneRegister" />
          <Input
            icon={FaLock}
            label="Senha"
            id="passwordRegister"
            type="password"
          />
          <Input
            icon={FaLock}
            label="Confirme sua Senha"
            id="confirmPasswordRegister"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <p className="login-link">
          Ja tem uma conta? Faça o <Link to="/">login!</Link>
        </p>
      </div>
    </Container>
  );
}
