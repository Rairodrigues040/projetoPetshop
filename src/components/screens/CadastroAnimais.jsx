import React from 'react';
import HeaderLogado from '../headerlogado/Header';
import Footer from '../Footer/Footer';
import './CadastroAnimais.css';
import CadArea from './components/area';


const CadastroAnimais = () => {

  return (
    <div className="page">
        <HeaderLogado />
        <main className='cadScreen'>
            <CadArea/>
        </main>
        <Footer/>
    </div>
  );
};

export default CadastroAnimais;