import { Container } from "./styles";
import { useTheme } from "../../hooks/themeContext";
import logo from "../../assets/logo.png";
import { Button } from "../Button";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { IconButton } from "../IconButton";
import { useAuthModal } from "../../hooks/authModalContext";
import { useAuth } from "../../hooks/authContext";
import { TextButton } from "../TextButton";

export function Header({}) {
  const { toggleTheme, theme } = useTheme();
  const { setOpenLoginForm, setOpenRoleSelection } = useAuthModal();
  const { user, profile, logout } = useAuth();
  return (
    <Container>
      <div className="wrapper">
        <img src={logo} alt="Logo HairManager" title="Logo HairManager" />
        {user && (
          <>
            {profile?.role == "customer" && (
              <nav className="navigation">
                <ul>
                  <li>Meus Agendamentos</li>
                </ul>
              </nav>
            )}
          </>
        )}

        <div className="container-buttons">
          {!user ? (
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
          ) : (
            <TextButton onClick={() => logout()} title={"Logout"} />
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
