import { Container } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <Container>
      <p>&copy; Todos os direitos reservados</p>
      <div className="social-media">
        <a
          href="https://github.com/DevMatheusMonteiro"
          title="Github"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/matheus-monteiro-2b1056183/"
          title="LinkedIn"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </Container>
  );
}
