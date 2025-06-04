import React from "react";
import "./Cards.css";

const PetCard = ({
  tipo,
  nome,
  genero,
  porte,
  descricao,
  vacinado,
  castrado,
  abrirModal,
  imgPets,
}) => {
  return (
    <div className="pets" onClick={abrirModal}>
      <div className="pet-image" style={{ backgroundImage: `url(${imgPets})` }}>
        <div className="pet">
          <p>{tipo}</p>
        </div>
      </div>
      <div className="description-pet">
        <div className="name-years">
          <p>{nome}</p>
        </div>
        <div className="category">
          <div className={`genero ${genero === "Macho" ? "macho" : "femea"}`}>
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
          <p>Quero adotar</p>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
