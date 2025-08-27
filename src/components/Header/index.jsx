import { Container } from "./styles";

import { useTheme } from "../../hooks/themeContext";
import logo from "../../assets/logo.png";
import { Button } from "../Button";

import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { IconButton } from "../IconButton";

export function Header({}) {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <div className="wrapper">
        <img src={logo} alt="Logo HairManager" title="Logo HairManager" />
        <div className="container-buttons">
          <div className="auth-buttons">
            <Button>Entrar</Button>
            <div className="border"></div>
            <Button>Cadastrar</Button>
          </div>
          <IconButton
            icon={WiMoonAltFirstQuarter}
            onClick={toggleTheme}
            title={
              theme.title == "dark"
                ? "Alterar para o tema claro"
                : "Alterar para o tema escuro"
            }
          />
        </div>
      </div>
    </Container>
  );
}
