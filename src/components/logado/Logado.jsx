import React from "react";
import HeaderUser from "../headerlogado/Header";
import CarrosselUser from "../carrosselLogado/Carrossel";
import DescicaoCarrosselUser from "../carrosselLogado/DescicaoCarrossel";
import ValoresLogado from "../valoresLogado/Valores";

const Logado = () => {
  return (
    <div>
      <HeaderUser />
      <CarrosselUser />
      <DescicaoCarrosselUser />
      <ValoresLogado />
    </div>
  );
};

export default Logado;
