import { IconButton } from "../IconButton";
import { Container } from "./styles";
import { FaXmark } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../hooks/authContext";
import { TextButton } from "../TextButton";

export function Sidebar({ open, onClose }) {
  const { logout } = useAuth();

  return (
    <Container $open={open}>
      <div className="wrapper">
        <div className="header">
          <IconButton
            icon={CiLogout}
            title="Clique para deslogar"
            onClick={logout}
          />
          <IconButton
            icon={FaXmark}
            title="Clique para fechar"
            onClick={onClose}
          />
        </div>
        <nav>
          <ul>
            <li>
              <TextButton title="Meus Agendamentos" />
            </li>
            <li>
              <TextButton title="Perfil" />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
