import React from "react";
import EnredoDog from "./img/enredoPetDog.png";
import "./Historia.css";

const Historia = () => {
  return (
    <div className="container-historia">
      <section className="nossa-historia">
        <h2>Nossa História</h2>
        <p>
          Desde 2015, trabalhamos com dedicação para conectar animais
          abandonados com famílias amorosas, transformando vidas e criando laços
          especiais.
        </p>
      </section>

      <section className="enredo">
        <div className="enredo-texto">
          <h3>Como Tudo Começou</h3>
          <p>
            A IncludePets nasceu do sonho de três amigos que, comovidos pela
            situação de animais abandonados nas ruas de São Paulo, decidiram
            fazer a diferença. Maria, João e Ana começaram resgatando animais em
            seus próprios apartamentos.
          </p>
          <p>
            Com o tempo, perceberam que precisavam de uma estrutura maior e mais
            organizada. Em 2015, fundaram oficialmente o AdotePet, começando com
            um pequeno abrigo que comportava 20 animais.
          </p>
          <p>
            Hoje, após 8 anos de dedicação, já ajudamos mais de 250 animais a
            encontrarem seus lares definitivos e mantemos parcerias com
            veterinários, pet shops e organizações do terceiro setor.
          </p>
        </div>
        <div className="enredo-img">
          <img src={EnredoDog} alt="Cão representando a história da ONG" />
        </div>
      </section>
    </div>
  );
};

export default Historia;
