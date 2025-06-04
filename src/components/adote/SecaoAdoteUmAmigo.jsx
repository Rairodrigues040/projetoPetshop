import React from "react";
import "./SecaoAdoteUmAmigo.css";
import dog1 from "./img/dog1.png";
import icone1 from "./img/icone1.png";

const SecaoAdoteUmAmigo = () => {
  return (
    <div className="container-adote">
      <div className="adote-flex">
        <div className="adote-texto">
          <h2 className="titulo-com-icone">
            <img src={icone1} alt="Ícone1" className="icone-titulo" />
            Adote um Amigo Patodavida
          </h2>
          <p>
            A adoção é um ato de amor que transforma duas vidas: a do animal que
            ganha uma família e a sua, que se enche de alegria e companheirismo.
            Nossos animais estão prontos para dar e receber muito amor.
          </p>
          <ul>
            <li>Salve uma vida e ganhe um companheiro fiel</li>
            <li>Contribua para reduzir o número de animais abandonados</li>
            <li>Receba amor incondicional todos os dias</li>
            <li>Tenha acompanhamento pós-adoção gratuito</li>
          </ul>
          <button>Quero Adotar</button>
        </div>
        <img src={dog1} alt="imagem1" className="img-adote" />
      </div>
    </div>
  );
};

export default SecaoAdoteUmAmigo;
