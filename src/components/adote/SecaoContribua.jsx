import React from "react";
import "./SecaoContribua.css";
import dog2 from './img/dog2.png';
import icone2 from './img/icone2.png';

const SecaoContribua = () => {
  return (
    <div className="container-contribua">
      <div className="contribua-flex">
        <img src={dog2} alt="Cão recebendo cuidados" className="img-contribua" />
        <div className="contribua-texto">
          <h2 className="titulo-com-icone">
            <img src={icone2} alt="Ícone de coração" className="icone-titulo" />
            Sua Contribuição Salva Vidas
          </h2>
          <p>
            Suas doações são fundamentais para mantermos nosso trabalho. Cada
            contribuição, por menor que seja, tem um impacto direto na vida dos
            animais que cuidamos, garantindo alimentação, medicamentos e
            cuidados veterinários.
          </p>
          <ul>
            <li>Ração e alimentação especial</li>
            <li>Medicamentos e tratamentos veterinários</li>
            <li>Materiais de higiene e limpeza</li>
            <li>Manutenção do abrigo e instalações</li>
          </ul>
          <button>Faça uma Doação</button>
        </div>
      </div>
    </div>
  );
};

export default SecaoContribua;
