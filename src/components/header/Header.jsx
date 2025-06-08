import { PiPawPrintLight } from "react-icons/pi";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("Menu toggled:", !showMenu);
  };

  const navigate = useNavigate();

  const irParaLogin = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-central">
          <div className="pata-logo">
          <PiPawPrintLight color="EBE5C7" size={30} ali/>
          </div>
          <div className="title-logo">
            <p>IncludePets</p>
          </div>
        </div>
      </div>
      <nav className={`nav ${showMenu ? "show" : ""}`}>
        <a href="#carrosel">Início</a>
        <a href="#animais-disponiveis">Animais</a>
        <a href="#nossa-historia">Sobre nós</a>
        <button onClick={() => irParaLogin()}>Entrar</button>
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
