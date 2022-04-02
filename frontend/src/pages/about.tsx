import type { NextPage } from "next";
import Header from "../components/header";

const About: NextPage = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col drop-shadow m-3 outline outline-1 outline-neutral-200 rounded-lg md:mx-96">
        <div className="flex flex-col py-2 px-5 text-sm text-center">
          <h1 className="text-usp text-2xl font-light p-5">Sobre o projeto</h1>
          <p className=" p-2">
            Com a volta ao presencial, tivemos a volta dos nossos lindos RU’s e
            consequentemente das enormes filas. Esse site, vai informar o atual
            estado das filas dos bandecos da cidade universitária. Porém, para
            que tudo funcione da melhor forma possível precisamos de você! Seja
            um usuário ativo, sempre ajudando com as atualizações do site.
          </p>
          <p className=" p-2">
            Essa iniciativa foi tomada por alunos da Skyrats e do jornal O Motim
            com o único intuito de ajudar nossa comunidade.
          </p>
        </div>

        <div className="flex flex-row justify-between text-white underline bg-usp rounded-b-lg py-1 px-7 items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/skyrats_drones/"
          >
            @skyrats_drones
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/jornalomotim/"
          >
            @jornalomotim
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
