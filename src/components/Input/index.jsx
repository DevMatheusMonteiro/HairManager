import { Container } from "./styles";

export function Input({ label, id, srOnly = false, ...rest }) {
  return (
    <Container $srOnly={srOnly}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </Container>
  );
}
