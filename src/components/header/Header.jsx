import logo from '../header/img/logo.png';
import './Header.css';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log('Menu toggled:', !showMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className={`nav ${showMenu ? 'show' : ''}`}>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
        <button>Entrar</button>
      </nav>
      <div className="menuButton" onClick={toggleMenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Header;
