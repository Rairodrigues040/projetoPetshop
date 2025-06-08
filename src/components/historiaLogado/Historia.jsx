import React from "react";
import EnredoDog from "./img/enredoPetDog.png";
import "../historia/Historia.css"

const Historia = () => {
  return (
    <div className="container-historia" id="nossa-historia" >
      <section className="nossa-historia">
        <h2>Nossa História</h2>
        <p>
          Desde 2025, trabalhamos com dedicação para conectar animais
          abandonados com famílias amorosas, transformando vidas e
          criando laços especiais.
        </p>
      </section>

      <section className="enredo">
        <div className="enredo-texto">
          <h3>Como Tudo Começou</h3>
          <p>
            A IncludePets nasceu do esforço de uma equipe de 6 pessoas
            comprometidas com a causa animal. Comovidos com a situação
            de abandono nas ruas, a equipe decidiu unir forças para fazer
            a diferença, criando um site para ajudar a causa.
          </p>
          <p>
            Com o tempo, perceberam que poderiam facilitar ainda mais a conexão entre
             protetores, ONGs e pessoas interessadas em adotar, centralizando informações
              e divulgando animais disponíveis para adoção de forma prática e acessível.
          </p>
          <p>
            Hoje, com muito empenho e trabalho em equipe, ajudamos na divulgação
            de vários animais e mantemos parcerias com pet shops e organizações
            do terceiro setor para fortalecer a rede de apoio à adoção responsável.
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
