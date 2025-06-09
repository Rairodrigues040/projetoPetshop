import React from "react";
import { useNavigate } from "react-router-dom";
import "../cards/Cards.css";

const PetCard = ({
  nome,
  tipo,
  genero,
  porte,
  descricao,
  foto,
  local,
  vacinado,
  castrado,
  abrirModal,
}) => {
  const navigate = useNavigate();

  const irParaLogin = (e) => {
    e.stopPropagation(); // IMPEDIR que clique no botão abra modal também
    navigate("/login");
  };

  return (
    <div className="pets" onClick={abrirModal}>
      <div className="pet-image" style={{ backgroundImage: `url(${foto})` }}>
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
        <button onClick={irParaLogin} className="button">
          <p>Quero adotar</p>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
