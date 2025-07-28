import { FaEnvelope, FaLock } from "react-icons/fa";
import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";

import { Input } from "../../components/Input";

export default function SignIn({}) {
  return (
    <Container>
      <div className="form-container">
        <div className="title-logo">
          <h1>Login</h1>
          <img src={logo} alt="Hair Manager Logo" title="Hair Manager Logo" />
        </div>
        <Form>
          <Input icon={FaEnvelope} label="Email" id="emailLogin" />
          <Input icon={FaLock} label="Senha" id="emailLogin" type="password" />
        </Form>
      </div>
    </Container>
  );
}
