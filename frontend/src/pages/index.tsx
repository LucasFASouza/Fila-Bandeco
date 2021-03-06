import type { NextPage } from "next";
import Bandeco from "../components/bandeco";
import Header from "../components/header";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";
import { FiInfo, FiPlusCircle } from "react-icons/fi";
import { useAuth } from "../components/authProvider";

interface Bandeco {
  id: number;
  bandeco: string;
  situation: string;
  velocity: string;
  last_atualization: string;
}

const Home: NextPage = () => {
  const [filas, setFilas] = useState<Bandeco[]>([]);
  const { user, setUser } = useAuth();

  let atualization: Bandeco[] = [];

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://fila-bandeco-api.herokuapp.com/api/filas/?bandeco=CENTRAL"
        ),
        axios.get(
          "https://fila-bandeco-api.herokuapp.com/api/filas/?bandeco=FISICA"
        ),
        axios.get(
          "https://fila-bandeco-api.herokuapp.com/api/filas/?bandeco=PREFEITURA"
        ),
        axios.get(
          "http://fila-bandeco-api.herokuapp.com/api/filas/?bandeco=QUIMICA"
        ),
      ])
      .then(
        axios.spread(
          (
            centralAtualization,
            fisicaAtualization,
            prefAtualization,
            quimicaAtualization
          ) => {
            atualization.push(centralAtualization.data.at(-1));
            atualization.push(fisicaAtualization.data.at(-1));
            atualization.push(prefAtualization.data.at(-1));
            atualization.push(quimicaAtualization.data.at(-1));

            setFilas(atualization);
            console.log(filas);
          }
        )
      );
  }, []);

  return (
    <div>
      <Header />

      <div className="flex flex-row justify-evenly pt-2">
        <Link href="/about">
          <a className="bg-usp p-3 rounded-lg drop-shadow">
            <FiInfo color="white" fontSize="2em" />
          </a>
        </Link>

        {user && (
          <Link href="/submit">
            <a className="bg-usp p-3 rounded-lg drop-shadow">
              <FiPlusCircle color="white" fontSize="2em" />
            </a>
          </Link>
        )}
      </div>

      {filas.map((item) => (
        <Bandeco
          key={item.id}
          bandeco={item.bandeco}
          situation={item.situation}
          velocity={item.velocity}
          last_atualization={item.last_atualization}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
