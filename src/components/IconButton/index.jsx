import { Container } from "./styles";
export function IconButton({ icon: Icon, title, ...rest }) {
  return (
    <Container title={title} {...rest} className="iconButton-component">
      <Icon />
    </Container>
  );
}
