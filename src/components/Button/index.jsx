import { Container } from "./styles";

export function Button({ children, ...rest }) {
  return (
    <Container {...rest} className="button-component">
      {children}
    </Container>
  );
}
