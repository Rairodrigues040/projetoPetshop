import React, { useState } from "react";
import Dog from "./img/petDog.png";
import DogCat from "../carrosselLogado/img/DogCat.png";
import Tigre from "../carrosselLogado/img/catRua.jpg";
import Soin from "../carrosselLogado/img/dogRua.png";
import Viado from "../carrosselLogado/img/patinho.webp";
import '../carrossel/Carrossel.css'

function Carrossel() {
  const imagens = [Dog, DogCat, Tigre, Soin, Viado];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const avancar = () => {
    setIndiceAtual((indiceAtual + 1) % imagens.length);
  };

  const voltar = () => {
    setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="fundo">
      <div className="carrossel" id ="carrosel">
        <img src={imagens[indiceAtual]} alt="Slide" className="imagem" />

        <div className="texto-central">
          <h1>IncludePets</h1>
          <p>
            Encontre seu companheiro <strong>patodavida</strong>
          </p>
        </div>

        <button className="seta esquerda" onClick={voltar}>
          &lt;
        </button>
        <button className="seta direita" onClick={avancar}>
          &gt;
        </button>
      </div>
    </div>
   
  );
}

export default Carrossel;
