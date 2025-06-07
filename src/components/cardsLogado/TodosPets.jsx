import React, { useState, useEffect, useMemo } from "react";
import PetCard from "./PetCard";
import Modal from "../modal/Modal";
import "../cards/Cards.css";
import "../cards/TodosPets.css";

const TodosPets = () => {
  const [pets, setPets] = useState([]); // Estado para pets da API
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [buscaNome, setBuscaNome] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroTamanho, setFiltroTamanho] = useState("");

  const petsPorPagina = 6;

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
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 1 && data.Animais) {
          setPets(data.Animais);
        } else {
          console.error("Erro ao buscar animais:", data.mensagem);
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  // Função para montar URL completa da imagem
  const urlImagemCompleta = (imagem) => {
    if (!imagem) return "";
    if (imagem.startsWith("http")) return imagem;
    return `http://localhost:5025/${imagem}`;
  };

  // Abrir modal passando o pet selecionado inteiro
  const handleAbrirModal = (pet) => {
    setPetSelecionado(pet);
  };

  const limparFiltros = () => {
    setBuscaNome("");
    setFiltroTipo("");
    setFiltroTamanho("");
    setPaginaAtual(1);
  };

  const tipos = useMemo(() => [...new Set(pets.map((p) => p.tipo))].sort(), [pets]);
  const portes = useMemo(() => [...new Set(pets.map((p) => p.porte))].sort(), [pets]);

  const petsFiltrados = pets.filter((pet) => {
    const nomeMatch = pet.nome.toLowerCase().includes(buscaNome.toLowerCase());
    const tipoMatch = filtroTipo ? pet.tipo === filtroTipo : true;
    const tamanhoMatch = filtroTamanho ? pet.porte === filtroTamanho : true;
    return nomeMatch && tipoMatch && tamanhoMatch;
  });

  const totalPaginas = Math.ceil(petsFiltrados.length / petsPorPagina);
  const indiceInicial = (paginaAtual - 1) * petsPorPagina;
  const indiceFinal = indiceInicial + petsPorPagina;
  const petsPaginaAtual = petsFiltrados.slice(indiceInicial, indiceFinal);

  return (
    <div className="container-cards fade-in">
      <div className="introduce-pets">
        <h2>Animais para adoção</h2>
        <p>Conheça alguns dos nossos amiguinhos que estão procurando por um lar cheio de amor</p>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={buscaNome}
          onChange={(e) => setBuscaNome(e.target.value)}
        />

        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          <option value="">Todos os tipos</option>
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <select value={filtroTamanho} onChange={(e) => setFiltroTamanho(e.target.value)}>
          <option value="">Todos os tamanhos</option>
          {portes.map((porte) => (
            <option key={porte} value={porte}>
              {porte}
            </option>
          ))}
        </select>

        <button onClick={limparFiltros}>🧹 Limpar Filtros</button>
      </div>

      {/* Cards */}
      <div className="cards-pet">
        {petsPaginaAtual.map((pet) => (
          <PetCard
            key={pet.id}
            {...pet}
            abrirModal={() => handleAbrirModal(pet)}
            imgPets={urlImagemCompleta(pet.foto || pet.imagem)} // ajuste para PetCard se precisar
          />
        ))}
      </div>

      {/* Paginação */}
      <div className="paginacao">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPaginaAtual(i + 1)}
            className={paginaAtual === i + 1 ? "pagina-ativa" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {petSelecionado && (
        <Modal
          isOpen={true}
          onClose={() => setPetSelecionado(null)}
          {...petSelecionado}
          imagem={urlImagemCompleta(petSelecionado.foto || petSelecionado.imagem)}
          requisitos={petSelecionado.requisitos_adocao || petSelecionado.requisitos}
        />
      )}
    </div>
  );
};

export default TodosPets;
