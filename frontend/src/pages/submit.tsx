import type { NextPage } from "next";
import Header from "../components/header";
import axios from "axios";
import React from "react";

interface Bandeco {
  bandeco: string;
  situation: string;
  velocity: string;
}

let bandecoSubmit: Bandeco = {
  bandeco: "",
  situation: "",
  velocity: "",
};

const Submit: NextPage = () => {
  const [formValue, setformValue] = React.useState({
    bandeco: "",
    situation: "",
    velocity: "",
    last_atualization: "",
  });

  const handleBandeco = (bandeco: string) => {
    setformValue({
      ...formValue,
      bandeco,
    });
  };

  const handleVelocity = (velocity: string) => {
    setformValue({
      ...formValue,
      velocity,
    });
  };

  const handleSituation = (situation: string) => {
    setformValue({
      ...formValue,
      situation,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    bandecoSubmit.bandeco = formValue.bandeco;

    if (bandecoSubmit.bandeco == "") {
      bandecoSubmit.bandeco = "CENTRAL";
    }

    bandecoSubmit.situation = formValue.situation;
    bandecoSubmit.velocity = formValue.velocity;

    console.log(bandecoSubmit);

    // make axios post request
    axios
      .post(
        "https://fila-bandeco-api.herokuapp.com/api/filas/",
        {
          bandeco: bandecoSubmit.bandeco,
          situation: bandecoSubmit.situation,
          velocity: bandecoSubmit.velocity,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />

      <form
        onSubmit={handleSubmit}
        action="https://bandeco.skyrats.com.br"
        target='_blank'
        className="flex flex-col drop-shadow m-3 my-16 outline outline-1 outline-neutral-200 rounded-lg md:mx-96"
      >
        <div className="flex flex-col py-2 px-5 text-sm">
          <label htmlFor="bandeco" className="text-stone-700">
            Em qual bandeco você está?
          </label>
          <select
            id="bandeco"
            name="bandeco"
            required
            onChange={(e) => handleBandeco(e.target.value)}
            value={formValue.bandeco}
            className="outline outline-1 outline-gray-300 rounded-sm focus:outline-usp form-control"
          >
            <option value="CENTRAL">Central</option>
            <option value="FISICA">Física</option>
            <option value="PREFEITURA">Prefeitura</option>
            <option value="QUIMICA">Química</option>
          </select>
        </div>

        <div className="flex flex-col py-2 px-5 text-sm">
          <label htmlFor="situation" className="text-stone-700">
            Até onde está indo a fila?
          </label>
          <input
            id="situation"
            name="situation"
            type="text"
            required
            onChange={(e) => handleSituation(e.target.value)}
            value={formValue.situation}
            className="outline outline-1 outline-gray-300 rounded-sm focus:outline-usp"
          />
        </div>

        <div className="flex flex-col py-2 px-5 text-sm">
          <label htmlFor="velocity" className="text-stone-700">
            Como está a velocidade de andamento?
          </label>
          <input
            id="velocity"
            name="velocity"
            type="text"
            required
            onChange={(e) => handleVelocity(e.target.value)}
            value={formValue.velocity}
            className="outline outline-1 outline-gray-300 rounded-sm focus:outline-usp"
          />
        </div>

        <div className="flex flex-row justify-end text-white bg-usp rounded-b-lg mt-3 py-3 px-7 items-center">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
