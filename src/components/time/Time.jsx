import './Time.css';
import React from 'react';
import Marina from "./marina.jpg";
import Rai from "./rai.jpg";
import Alice from "./alice.jpg";
import Gustavo from "./gustavo.jpg";
import Kaio from "./kaio.jpeg";
import Alisson from "./Alisson.jpg"



const equipe = [
  { foto: Marina, nome: 'Marina Lima', cargo: 'Gerente de projetos', descricao: 'Adotar mudou minha vida com muito amor, carinho e patinhas pela casa.' },
  { foto: Rai, nome: 'Raí Rodrigues', cargo: 'Dev Front-End', descricao: 'Cada linha de código aqui é por eles e por um final feliz. Adote!' },
  { foto: Alice, nome: 'Alice Lima', cargo: 'UI/UX Designer', descricao: 'Tenho dois cachorros adotados e sei bem o quanto essa causa importa!' },
  { foto: Gustavo, nome: 'Gustavo Santos', cargo: 'Dev Front-End', descricao: 'A energia e a alegria que meus pets trazem pro dia a dia não têm preço. Apoiar essa causa é apoiar o amor em sua forma mais pura.' },
  { foto: Kaio, nome: 'Kaio Sousa', cargo: 'Dev Back-End', descricao: 'Sou uma mente lógica por trás das telas. Enquanto o usuário vê botões e cores, eu construo a engrenagem invisível que faz tudo funcionar.' },
  { foto: Alisson, nome: 'Alisson Paz', cargo: 'UI/UX Designer', descricao: 'Sou apaixonado(a) por transformar ideias em experiências memoráveis. Uno estética e funcionalidade para criar interfaces que encantam visualmente.' },

  
];


function Time() {
  return (
    <section className="time">
      <h2 className="titulo">Nossa equipe</h2>
      <div className="grid-equipe">
        {equipe.map((membro, index) => (
          <div key={index} className="card-membro">
            <img src={membro.foto} alt={membro.nome} className="avatar-foto" />
            <h3 className="nome">{membro.nome}</h3>
            <p className="cargo">{membro.cargo}</p>
            <p className="descricao">{membro.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Time;
