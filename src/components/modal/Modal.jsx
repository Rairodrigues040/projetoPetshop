import React from "react";
import "../modal/Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="janela-modal">
      <div className="modal">
        <button className="close" onClick={onClose}>
          X
        </button>
        <div className="img-modal"></div>
        <div className="descricao-popUp">
          <h1>Janela modal</h1>
          <p>
            tetetetteetttetetetetetetteetettetetet tetetetetetetetetette
            teteteteteetet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
