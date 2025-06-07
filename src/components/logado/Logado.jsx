import React from "react";
import HeaderUser from "../headerlogado/Header";
import CarrosselUser from "../carrosselLogado/Carrossel";
import DescicaoCarrosselUser from "../carrosselLogado/DescicaoCarrossel";
import ValoresLogado from "../valoresLogado/Valores";
import CardsUser from "../cardsLogado/Cards";
import HistoriaUser from "../historiaLogado/Historia";
import TimeUser from "../timeLogado/Time";
import Footer from '../Footer/Footer'

const Logado = () => {
  return (
    <div>
      <HeaderUser />
      <CarrosselUser />
      <DescicaoCarrosselUser />
      <ValoresLogado />
      <CardsUser/>
      <HistoriaUser/>
      <TimeUser/>
      <Footer/>
    </div>
  );
};

export default Logado;
