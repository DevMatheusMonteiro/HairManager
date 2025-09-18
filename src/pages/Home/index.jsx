import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";
import { searchBusinessAndServices } from "../../services/businessService";
import { useEffect, useState } from "react";

import { Input } from "../../components/Input";
import { BusinessCard } from "../../components/BusinessCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await searchBusinessAndServices(query);
      setData(res);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <Container>
      <section id="search">
        <Input
          icon={FaSearch}
          label="Pesquise por salões/barbearias ou serviços próximos de você"
          placeholder="Pesquise por salões/barbearias ou serviços"
          id="search"
          onChange={(e) => setQuery(e.target.value)}
          srOnly
        />
      </section>
      <section id="business">
        {data.length > 0 &&
          data.map((item) => <BusinessCard key={item.id} data={item} />)}
      </section>
    </Container>
  );
}
