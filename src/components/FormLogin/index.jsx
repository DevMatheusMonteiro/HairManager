import { Container, Form } from "./styles";
import logo from "../../assets/logo.png";
import { Input } from "../Input";
import { Button } from "../Button";
import { FaEnvelope, FaLock, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton } from "../IconButton";
export function FormLogin({ open = false, setOpen }) {
  return (
    <Container $open={open}>
      <div className="form-container">
        <IconButton icon={FaWindowClose} onClick={setOpen} />
        <h2>Login</h2>
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
        <p className="link">
          Não tem uma conta? <Link to="/signup">Cadastre-se!</Link>
        </p>
      </div>
    </Container>
  );
}
