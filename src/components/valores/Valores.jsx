import "./Valores.css";
import React from "react";
import Amor from "./img/Amor.svg";
import Responsabilidade from "./img/Responsabilidade.svg";
import Comunidade from "./img/Comunidade.svg";
import Exelencia from "./img/Exelencia.svg";
import Img from "./img/img.png";
import { useNavigate } from "react-router-dom";

function Valores() {

  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate("/login");
  };

  return (
    <section className="nossosValoresSection">
      <div className="nossosValores">
        <div className="title">Nossos Valores</div>
        <div className="cardValores">
          <div className="card">
            <img src={Amor} alt="Ícone Amor" />
            <h1>Amor</h1>
            <h2>
              Acreditamos que todo animal merece amor incondicional e cuidado
              especial
            </h2>
          </div>
          <div className="card">
            <img src={Responsabilidade} alt="Ícone Responsabilidade" />
            <h1>Responsabilidade</h1>
            <h2>
              Garantimos que cada adoção seja feita de forma consciente e
              responsável
            </h2>
          </div>
          <div className="card">
            <img src={Comunidade} alt="Ícone Comunidade" />
            <h1>Comunidade</h1>
            <h2>
              Fortalecemos a comunidade através da conscientização e educação
            </h2>
          </div>
          <div className="card">
            <img src={Exelencia} alt="Ícone Excelência" />
            <h1>Excelência</h1>
            <h2>
              Buscamos sempre a excelência no cuidado e bem-estar de nossos
              animais
            </h2>
          </div>
        </div>
      </div>

      <div className="comoAjudar" id = 'valores'>
        <div className="side">
          <h1>Como Você Pode Ajudar</h1>
          <h2>
            Existem várias maneiras de apoiar nossa causa, desde adoção até
            compartilhar nossa causa e doações. Cada contribuição faz diferença
            na vida desses animais.
          </h2>
          <ul>
            <li>Adote um animal</li>
            <li>Faça doações</li>
            <li>Divulgue nossa causa</li>
            <li>Entre em contato com as ONGs e seja um voluntário</li>
          </ul>
          <button onClick={irParaLogin}>Saiba Mais</button>
        </div>
        <img src={Img} alt="Pessoas cuidando de animais" />
      </div>
    </section>
  );
}

export default Valores;
