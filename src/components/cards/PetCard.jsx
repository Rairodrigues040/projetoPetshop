import React from "react";
import "./Cards.css";

const PetCard = ({
  tipo,
  nome,
  idade,
  genero,
  porte,
  descricao,
  vacinado,
  castrado,
  abrirModal,
}) => {
  return (
    <div className="pets">
      <div className="pet-image">
        <div className="pet">
          <p>{tipo}</p>
        </div>
      </div>
      <div className="description-pet">
        <div className="name-years">
          <p>{nome}</p>
          <p>{idade} ano</p>
        </div>
        <div className="category">
          <div className="genero">
            <p>{genero}</p>
          </div>
          <div className="porte">
            <p>{porte}</p>
          </div>
        </div>
        <div className="subtitles-pet">
          <p>{descricao}</p>
        </div>
        <div className="health">
          {vacinado && (
            <div className="vacinado">
              <p>Vacinado</p>
            </div>
          )}
          {castrado && (
            <div className="castrado">
              <p>Castrado</p>
            </div>
          )}
        </div>
        <button onClick={abrirModal} className="button">
          <p>Tenho Interesse</p>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
