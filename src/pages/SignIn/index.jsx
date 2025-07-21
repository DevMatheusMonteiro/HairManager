import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";

import { Input } from "../../components/Input";

export default function SignIn({}) {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <img src={logo} alt="Hair Manager Logo" />
        <Input label="Email" />
      </Form>
    </Container>
  );
}
