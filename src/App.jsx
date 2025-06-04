import React from "react";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import "./App.css";
import Carrossel from "./components/carrossel/Carrossel";
import DescicaoCarrossel from "./components/carrossel/DescicaoCarrossel";
import Time from "./components/time/Time"
import Footer from './components/Footer/Footer'
import Historia from "./components/historia/Historia";
import Valores from "./components/valores/Valores";
import TodosPets from './components/cards/TodosPets'

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
      <TodosPets/>
      <Footer/>
    </div>
  );
};

export default App;
