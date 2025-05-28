import React, { useState } from "react";
import PetCard from "./PetCard";
import Modal from "../modal/Modal";
import pets from "../dados/pets";

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-cards">
      <div className="introduce-pets">
        <h2>Animais para adoção</h2>
        <p>Conheça alguns dos nossos amiguinhos que estão procurando por um lar cheio de amor</p>
      </div>

      <div className="cards-pet">
        {pets.map((pet, index) => (
          <PetCard key={index} {...pet} abrirModal={() => setIsOpen(true)} />
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Cards;
