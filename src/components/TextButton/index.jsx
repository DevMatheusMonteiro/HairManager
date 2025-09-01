import { Container } from "./styles";

export function TextButton({ title, ...rest }) {
  return (
    <Container title={title} {...rest}>
      {title}
    </Container>
  );
}
