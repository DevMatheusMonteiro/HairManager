import { Button } from "../../components/Button";
import { Container } from "./styles";
import { BsFillPersonFill } from "react-icons/bs";
import { LuMapPin, LuNotepadText } from "react-icons/lu";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { MdNotificationsActive, MdComputer } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { TfiAgenda } from "react-icons/tfi";
import { Input } from "../../components/Input";

export const salons = [
  {
    id: 1,
    name: "Barbearia Estilo",
    city: "São Paulo",
    rating: 4.8,
    services: [
      { id: 101, name: "Corte Masculino", price: 50, duration: 30 },
      { id: 102, name: "Barba Completa", price: 35, duration: 25 },
      { id: 103, name: "Sobrancelha", price: 20, duration: 15 },
    ],
  },
  {
    id: 2,
    name: "Salão Glamour",
    city: "Rio de Janeiro",
    rating: 4.6,
    services: [
      { id: 201, name: "Corte Feminino", price: 70, duration: 45 },
      { id: 202, name: "Escova", price: 60, duration: 40 },
      { id: 203, name: "Hidratação", price: 80, duration: 50 },
    ],
  },
  {
    id: 3,
    name: "Studio Cabelo & Arte",
    city: "Belo Horizonte",
    rating: 4.7,
    services: [
      { id: 301, name: "Corte Unissex", price: 65, duration: 40 },
      { id: 302, name: "Coloração", price: 150, duration: 90 },
      { id: 303, name: "Luzes", price: 200, duration: 120 },
    ],
  },
  {
    id: 4,
    name: "Beleza Express",
    city: "Curitiba",
    rating: 4.5,
    services: [
      { id: 401, name: "Corte Masculino", price: 45, duration: 25 },
      { id: 402, name: "Barba", price: 30, duration: 20 },
      { id: 403, name: "Massagem Capilar", price: 50, duration: 30 },
    ],
  },
  {
    id: 5,
    name: "Spa Hair Lux",
    city: "Porto Alegre",
    rating: 4.9,
    services: [
      { id: 501, name: "Corte Feminino", price: 90, duration: 50 },
      { id: 502, name: "Escova Progressiva", price: 250, duration: 120 },
      { id: 503, name: "Penteado Festa", price: 180, duration: 60 },
    ],
  },
  {
    id: 6,
    name: "Clube da Barba",
    city: "Brasília",
    rating: 4.4,
    services: [
      { id: 601, name: "Corte Masculino", price: 55, duration: 30 },
      { id: 602, name: "Barba e Navalha", price: 40, duration: 25 },
      { id: 603, name: "Pigmentação de Barba", price: 70, duration: 35 },
    ],
  },
  {
    id: 7,
    name: "Salão Diva Hair",
    city: "Salvador",
    rating: 4.6,
    services: [
      { id: 701, name: "Corte Feminino", price: 75, duration: 45 },
      { id: 702, name: "Escova Modelada", price: 80, duration: 50 },
      { id: 703, name: "Hidratação + Nutrição", price: 120, duration: 60 },
    ],
  },
  {
    id: 8,
    name: "Beleza Natural",
    city: "Recife",
    rating: 4.5,
    services: [
      { id: 801, name: "Corte Cacheado", price: 85, duration: 60 },
      { id: 802, name: "Finalização", price: 70, duration: 45 },
      { id: 803, name: "Tratamento Capilar", price: 110, duration: 70 },
    ],
  },
  {
    id: 9,
    name: "Estilo Vip Barber",
    city: "Fortaleza",
    rating: 4.7,
    services: [
      { id: 901, name: "Corte Fade", price: 60, duration: 35 },
      { id: 902, name: "Barba Completa", price: 40, duration: 25 },
      { id: 903, name: "Sobrancelha Navalha", price: 25, duration: 15 },
    ],
  },
  {
    id: 10,
    name: "Studio Fashion Hair",
    city: "Florianópolis",
    rating: 4.8,
    services: [
      { id: 1001, name: "Corte Feminino", price: 85, duration: 50 },
      { id: 1002, name: "Luzes", price: 220, duration: 120 },
      { id: 1003, name: "Escova", price: 70, duration: 40 },
    ],
  },
];

export default function Home() {
  return (
    <Container>
      <section id="search">
        <Input
          icon={FaSearch}
          label="Pesquise por salões/barbearias ou serviços próximos de você"
          placeholder="Pesquise por salões/barbearias ou serviços"
          id="search"
          srOnly
        />
      </section>
    </Container>
  );
}
