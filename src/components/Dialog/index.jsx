import { Container } from "./styles";

export function Dialog({ open = false, setOpen, children }) {
  return <Container $open={open}>{children}</Container>;
}
