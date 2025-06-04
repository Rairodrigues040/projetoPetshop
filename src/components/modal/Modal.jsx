import React from "react";
import "./Modal.css";
import { SlCalender } from "react-icons/sl";
import { IoPawOutline, IoClipboardOutline, IoLocationOutline } from "react-icons/io5";

const Modal = ({
  isOpen,
  onClose,
  imagem,
  nome,
  peso,
  porte,
  idade,
  tipo,
  genero,
  raca,
  local,
  descricao,
  personalidade,
  vacinado,
  castrado,
  requisitos,
}) => {
  if (!isOpen) return null;

  return (
    <div className="janela-modal" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>X</button>

        <div className="modal-conteudo">
          {/* Lado esquerdo: imagem e dados rápidos */}
          <div className="coluna-esquerda">
            <h2>{nome}</h2>
            <div className="img-modal" style={{ backgroundImage: `url(${imagem})` }}>
              <div className="tipo">
                <p>{tipo}</p>
              </div>
            </div>

            <div className="descricao-popUp">
              <div className="idade-genero">
                <p><SlCalender /> {idade} anos</p>
                <p><IoPawOutline /> {genero}</p>
              </div>

              <div className="porte-peso">
                <p><IoClipboardOutline /> {porte}</p>
                <p><IoClipboardOutline /> {peso} kg</p>
              </div>

              <div className="vacinado-castrado">
                {vacinado && <div className="vacinado"><p>Vacinado</p></div>}
                {castrado && <div className="castrado"><p>Castrado</p></div>}
              </div>

              <div className="localizacao">
                <p><IoLocationOutline /> {local}</p>
              </div>
            </div>
          </div>

          {/* Lado direito: descrição detalhada */}
          <div className="coluna-direita">
            <div className="sobre-pet">
              <h3>Sobre a {nome}</h3>
              <p>{descricao}</p>
            </div>

            <div className="raca-pet">
              <h3>Raça</h3>
              <p>{raca}</p>
            </div>

            <div className="personalidade-pet">
              <h3>Personalidade</h3>
              <ul>
                {personalidade.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="requisitos-pet">
              <h3>Requisitos para adoção</h3>
              <ul>
                {requisitos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="button-pet">
              <button>Tenho interesse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
