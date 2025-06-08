import React from "react";
import './footer.css';
import Logo from './logo_branca.png';
import Email from './email.png'
import Localização from './localização.png'
import Telefone from './telefone.png'

function Footer(){
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="logo">
                    <a href='#'>
                        <img src={Logo} alt="logo" />
                    </a>
                    <p className="texto">
                        Conectamos animais abandonados com famílias amorosas.
                        Nossa missão é garantir que cada animal encontre o lar
                        perfeito cheio de amor e cuidado.
                    </p>
                    <div className="icones">
                    </div>
                </div>

                <div className="links">
                    <h3>Links rápidos</h3>
                    <a href="#animais-disponiveis">Animais</a>
                    <a href="#nossa-historia">Sobre nós</a>
                    <a href="#valores">Como Ajudar</a>
                    <a href="#contato">Contato</a>
                </div>

                <div className="contato">
                    <h3>Contato</h3>
                    <div className="contato1" id = "contato">
                        <img src={Telefone} alt="telefone" />
                        <p>(88) 99999-9999</p>
                    </div>
                    <div className="email">
                        <img src={Email} alt="email" />
                        <a href="mailto:contato@includepets.com">contato@includepets.com</a>
                    </div>
                    <div className="loc">
                        <img src={Localização} alt="localização" />
                        <p>Russas - CE</p>
                    </div>
                </div>
            </div>

            <hr className="separador" />

            <div className="copyright">
                © 2025 IncludePets. Todos os direitos reservados.
            </div>
        </section>
    );
}


export default Footer;