import React from "react";
import Information from "./information";

interface Props {
  bandeco: string;
  situation: string;
  velocity: string;
  last_atualization: string;
}

const Dict: any = {
  "C": "Central",
  "Q": "Química",
  "F": "Física",
  "P": "Prefeitura"
}

const Bandeco: React.FC<Props> = ({
  bandeco,
  situation,
  velocity,
  last_atualization,
}) => {
  const date = new Date(last_atualization).toTimeString().split(" ")[0];
  const dateText = date.slice(0, 5);

  return (
    <div className="flex flex-col drop-shadow m-5 outline outline-1 outline-neutral-200 rounded-lg md:mx-96">
      <div className="flex flex-col py-2 px-5 text-sm">
        <Information label="Situação" value={situation} />
        <Information label="Velocidade" value={velocity} />
      </div>

      <div className="flex flex-row justify-between text-white bg-usp rounded-b-lg py-1 px-7 items-center">
        <h1 className="uppercase">{Dict[bandeco]}</h1>
        <div>{dateText}</div>
      </div>
    </div>
  );
};

export default Bandeco;
