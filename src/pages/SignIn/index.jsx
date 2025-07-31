import { FaEnvelope, FaLock } from "react-icons/fa";
import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function SignIn() {
  return (
    <Container>
      <div className="form-container">
        <h1>Login</h1>
        <img
          src={logo}
          alt="Hair Manager Logo"
          title="Hair Manager Logo"
          id="logo"
        />
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input icon={FaEnvelope} label="Email" id="emailLogin" />
          <Input
            icon={FaLock}
            label="Senha"
            id="passwordLogin"
            type="password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <p className="register-link">
          Não tem uma conta? <Link to="/signup">Cadastre-se!</Link>
        </p>
      </div>
    </Container>
  );
}
