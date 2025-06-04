import React, { useState } from "react";
import PetCard from "./PetCard";
import Modal from "../modal/Modal";
import pets from "../dados/pets";
import petsDetalhados from "../dados/modalPets";
import "./Cards.css";

const Cards = () => {
  const [petSelecionado, setPetSelecionado] = useState(null);

  const handleAbrirModal = (idPet) => {
    const petDetalhado = petsDetalhados.find((p) => p.id === idPet);
    setPetSelecionado(petDetalhado);
  };

  return (
    <div className="container-cards">
      <div className="introduce-pets">
        <h2>Animais para adoção</h2>
        <p>
          Conheça alguns dos nossos amiguinhos que estão procurando por um lar
          cheio de amor
        </p>
      </div>

      <div className="cards-pet">
        {pets.slice(0,6).map((pet) => (
          <PetCard
            key={pet.id}
            {...pet}
            abrirModal={() => handleAbrirModal(pet.id)}
          />
        ))}
      </div>

      {petSelecionado && (
        <Modal
          isOpen={true}
          {...petSelecionado}
          onClose={() => setPetSelecionado(null)}
        />
      )}

      <div className="button-card">
        <button>Ver Todos os Animais</button>
      </div>
    </div>
  );
};

export default Cards;
