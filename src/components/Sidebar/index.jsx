import { IconButton } from "../IconButton";
import { Container } from "./styles";
import { FaXmark } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../hooks/authContext";
import { TextButton } from "../TextButton";
import { useNavigate } from "react-router-dom";

export function Sidebar({ open, onClose }) {
  const { logout, profile } = useAuth();
  const navigate = useNavigate();
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
              <TextButton
                title="Home"
                onClick={() => {
                  navigate("/");
                  onClose();
                }}
              />
            </li>

            {profile?.role === "customer" && (
              <li>
                <TextButton
                  title="Meus Agendamentos"
                  onClick={() => {
                    navigate("my-appointments");
                    onClose();
                  }}
                />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
