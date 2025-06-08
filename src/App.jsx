import React from "react";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import "./App.css";
import Carrossel from "./components/carrossel/Carrossel";
import DescicaoCarrossel from "./components/carrossel/DescicaoCarrossel";
import Time from "./components/time/Time";
import Footer from "./components/Footer/Footer";
import Historia from "./components/historia/Historia";
import Valores from "./components/valores/Valores";
import CadastroAnimais from "./components/screens/CadastroAnimais";
import CaminhoPet from "./components/cardsLogado/CaminhoPet";


const App = () => {
  return (
    <div className="page">
      <Header />
      <Carrossel/>
      <DescicaoCarrossel/>
      <Valores/>
      <Card />
      <Historia/>
      <Time/>
      <Footer/>
    </div>
  );
};

export default App;
