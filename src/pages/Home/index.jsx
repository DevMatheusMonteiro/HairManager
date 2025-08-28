import { Button } from "../../components/Button";
import { Container } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";
import { LuMapPin, LuNotepadText } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdNotificationsActive, MdComputer } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { TfiAgenda } from "react-icons/tfi";

export default function Home() {
  return (
    <Container>
      <section id="hero">
        <div className="hero-wrapper">
          <div className="container-title">
            <h1>
              Conectando clientes às melhores barbearias e salões de beleza.
            </h1>
            <h2>
              Agende seu horário online ou cadastre seu salão e conquiste novos
              clientes.
            </h2>
          </div>
          <div className="container-buttons">
            <Button>Sou Cliente</Button>
            <Button>Sou Barbearia/Salão</Button>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>Como funciona</h2>
        <div className="wrapper-about">
          <div className="customers">
            <h3>Para Clientes</h3>
            <ul>
              <li>
                <span>
                  <BsFillPersonFill />
                </span>
                <span>Cadastre-se Gratuitamente</span>
              </li>
              <li>
                <span>
                  <LuMapPin />
                </span>
                <span>Encontre barbearias/salões próximos</span>
              </li>
              <li>
                <span>
                  <FaRegCalendarAlt />
                </span>
                <span>Escolha serviço e horário</span>
              </li>
              <li>
                <span>
                  <MdNotificationsActive />
                </span>
                <span>Confirme e receba lembrete</span>
              </li>
            </ul>
          </div>
          <div className="business">
            <h3>Para Negócios</h3>
            <ul>
              <li>
                <span>
                  <IoMdHome />
                </span>
                <span>Cadastre seu salão</span>
              </li>

              <li>
                <span>
                  <LuNotepadText />
                </span>
                <span>Adicione seus serviços e horários</span>
              </li>

              <li>
                <span>
                  <TfiAgenda />
                </span>
                <span>Receba novos agendamentos</span>
              </li>

              <li>
                <span>
                  <MdComputer />
                </span>
                <span>Gerencie sua agenda online</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="benefits">
        <h2>Benefícios</h2>
        <div className="benefits-wrapper">
          <div className="customer-benefits">
            <h3>Para Clientes</h3>
            <ul>
              <li>Agende seu horário com poucos cliques</li>
              <li>Evite filas e esperas desnecessárias</li>
              <li>Receba lembretes automáticos do seu agendamento</li>
              <li>Descubra novas barbearias e salões próximos</li>
              <li>Gerencie seus agendamentos em um só lugar</li>
            </ul>
          </div>
          <div className="business-benefits">
            <h3>Para negócios</h3>
            <ul>
              <li>Controle fácil da agenda de clientes</li>
              <li>Reduza faltas com lembretes automáticos</li>
              <li>Ganha mais visibilidade com novos clientes</li>
              <li>Otimize seu tempo e atenda mais pessoas</li>
              <li>Acompanhe relatórios e desempenho do seu negócio</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="cta">
        <div className="cta-wrapper">
          <h2>
            Cadastre-se agora e faça parte da revolução dos agendamentos de
            beleza!
          </h2>
          <div className="container-buttons">
            <Button>Sou Cliente</Button>
            <Button>Sou Barbearia/Salão</Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
