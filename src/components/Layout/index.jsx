import { Container } from "./styles";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { useAuth } from "../../hooks/authContext";

export function Layout({ main: Main }) {
  const { user } = useAuth();
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Container>
      {user && (
        <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      )}
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Main />
      <Footer />
    </Container>
  );
}
