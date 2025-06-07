import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import './CadastroAnimais.css';
import CadArea from './components/area';


const CadastroAnimais = () => {

  return (
    <div className="page">
        <Header />
        <main className='cadScreen'>
            <CadArea/>
        </main>
        <Footer/>
    </div>
  );
};

export default CadastroAnimais;