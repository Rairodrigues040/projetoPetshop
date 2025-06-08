import '../time/Time.css';
import React from 'react';

const equipe = [
  { iniciais: 'MR', nome: 'Marina Lima', cargo: 'Gerente de projetos', cor: 'azul', descricao: 'Adotar mudou minha vida com muito amor, carinho e patinhas pela casa.' },
  { iniciais: 'RR', nome: 'Raí Rodrigues', cargo: 'Dev Front-End', cor: 'laranja', descricao: 'Cada linha de código aqui é por eles e por um final feliz. Adote!' },
  { iniciais: 'AL', nome: 'Alice Lima', cargo: 'UI/UX Designer', cor: 'roxo', descricao: 'Tenho dois cachorros adotados e sei bem o quanto essa causa importa!' },
  { iniciais: 'KR', nome: 'Kaio Sousa', cargo: 'Dev Back-End', cor: 'verde', descricao: 'Veterinária especializada em pequenos animais, dedica sua vida ao cuidado e bem estar animal!' },
  { iniciais: 'GS', nome: 'Gustavo Santos', cargo: 'Dev Front-End', cor: 'laranja-escuro', descricao: 'A energia e a alegria que meus pets trazem pro dia a dia não têm preço. Apoiar essa causa é apoiar o amor em sua forma mais pura.' },
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
