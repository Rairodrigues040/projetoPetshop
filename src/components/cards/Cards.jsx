import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PetCard from './PetCard'
import Modal from "../modal/Modal";
import "./Cards.css";

const Cards = () => {
  const [animais, setAnimais] = useState([]);
  const [petSelecionado, setPetSelecionado] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5025/animais/listarAnimais", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: "",
        tipo: "",
        porte: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1 && data.Animais) {
          setAnimais(data.Animais);
        } else {
          console.error("Erro ao buscar animais:", data.mensagem);
        }
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
      });
  }, []);

  const handleAbrirModal = (pet) => {
    setPetSelecionado(pet);
  };

  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate("/login");
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
        {animais.slice(0, 6).map((pet) => (
          <PetCard
            key={pet.id}
            {...pet}
            abrirModal={() => handleAbrirModal(pet)}
            imgPets={pet.foto} // ajustando nome da imagem
          />
        ))}
      </div>

      {petSelecionado && (
        <Modal
          isOpen={true}
          onClose={() => setPetSelecionado(null)}
          {...petSelecionado}
          imagem={petSelecionado.foto}
          requisitos={petSelecionado.requisitos_adocao}
        />
      )}

      <div className="button-card">
        <button onClick={irParaLogin}>Ver Todos os Animais</button>
      </div>
    </div>
  );
};

export default Cards;
