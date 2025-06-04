import React from "react";
import "./SecaoCompartilhe.css";
import dog3 from "./img/dog3.png";
import icone3 from "./img/icone3.png";

const SecaoCompartilhe = () => {
  return (
    <div className="container-compartilhe">
      <div className="compartilhe-flex">
        <div className="compartilhe-texto">
          <h2 className="titulo-com-icone">
            <img src={icone3} alt="Ícone megafone" className="icone-titulo" />
            Compartilhe Esperança: Seja Nossa Voz!
          </h2>

          <p>
            Sua voz é poderosa! Compartilhando nossa causa nas redes sociais e
            falando com amigos e familiares, você multiplica nossas chances de
            encontrar lares para nossos animais e pessoas dispostas a ajudar.
          </p>

          <ul>
            <li>Compartilhe perfis de animais para adoção</li>
            <li>Divulgue nossos eventos e campanhas</li>
            <li>Indique nosso trabalho para amigos</li>
            <li>Participe de campanhas de conscientização</li>
          </ul>

          <button>Siga-nos nas Redes</button>
        </div>

        <img src={dog3} alt="Pessoas felizes com animais" className="img-compartilhe" />
      </div>
    </div>
  );
};

export default SecaoCompartilhe;
