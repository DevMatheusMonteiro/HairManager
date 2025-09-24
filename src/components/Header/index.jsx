import { Container } from "./styles";
import { useTheme } from "../../hooks/themeContext";
import logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { IconButton } from "../IconButton";
import { useAuthModal } from "../../hooks/authModalContext";
import { useAuth } from "../../hooks/authContext";
import { TextButton } from "../TextButton";

export function Header({ openSidebar, setOpenSidebar }) {
  const { toggleTheme, theme } = useTheme();
  const { setOpenLoginForm, setOpenRoleSelection } = useAuthModal();
  const { user, profile, logout } = useAuth();
  return (
    <Container>
      {user && (
        <IconButton
          icon={IoMdMenu}
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      )}
      <div className="wrapper">
        <img src={logo} alt="Logo HairManager" title="Logo HairManager" />

        <div className="container-buttons">
          {!user && (
            <div className="auth-buttons">
              <TextButton
                onClick={() => setOpenLoginForm(true)}
                title="Entrar"
              />
              <div className="border"></div>
              <TextButton
                onClick={() => setOpenRoleSelection(true)}
                title="Cadastrar"
              />
            </div>
          )}
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
