import './Time.css';
import React from 'react';

const equipe = [
  { iniciais: 'MR', nome: 'Marina Lima', cargo: 'Gerente de projetos', cor: 'azul', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'RR', nome: 'Raí Rodrigues', cargo: 'Dev Front-End', cor: 'laranja', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'AL', nome: 'Alice Lima', cargo: 'UI/UX Designer', cor: 'roxo', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'KR', nome: 'Kaio Sousa', cargo: 'Dev Back-End', cor: 'verde', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'GS', nome: 'Gustavo Santos', cargo: 'Dev Front-End', cor: 'laranja-escuro', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'AL', nome: 'Alisson Paz', cargo: 'UI/UX Designer', cor: 'roxo', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
];

function Time() {
  return (
    <section className="time">
      <h2 className="titulo">Nossa equipe</h2>
      <div className="grid-equipe">
        {equipe.map((membro, index) => (
          <div key={index} className="card-membro">
            <div className={`avatar ${membro.cor}`}>{membro.iniciais}</div>
            <h3>{membro.nome}</h3>
            <p className="cargo">{membro.cargo}</p>
            <p className="descricao">{membro.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Time;
