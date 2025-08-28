import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

export function Layout({ main: Main }) {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
