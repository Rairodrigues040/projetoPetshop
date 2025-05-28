import React from "react";
import Header from "./components/header/Header";
import Card from "./components/cards/Cards";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Card />
    </div>
  );
};

export default App;
