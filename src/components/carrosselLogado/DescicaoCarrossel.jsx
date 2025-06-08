import { useNavigate } from "react-router-dom";
import React from "react";
import "../carrossel/DescicaoCarrossel.css";

const DescicaoCarrossel = () => {

  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate("/todosPets");
  };

  const irParaAdocao = () => {
    navigate("/adote");
  };

  return (
    <div className="descricao-carrossel">
      <div className="title-descricao">
        <h1>
          Cada adoção transforma duas vidas: a sua e a do seu novo companheiro
        </h1>
      </div>
      <div className="text-descricao">
        <p>
          Nossos animais estão esperando por uma família que os ame
          incondicionalmente.
        </p>
        <p>
          Seja essa família especial e faça a diferença na vida de um animal.
        </p>
      </div>
      <div className="botoes-descicao">
        <button className="animais-disponiveis" onClick={irParaLogin}>
          {" "}
          Ver Animais Disponíveis
        </button>
        <button className="como-ajudar" onClick={irParaAdocao}> Como Ajudar</button>
      </div>
    </div>
  );
};

export default DescicaoCarrossel;
