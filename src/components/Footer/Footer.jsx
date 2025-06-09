import React from "react";
import './footer.css';
import Logo from './logo_branca.png';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import Email from './email.png';
import Localizacao from './localização.png';
import Telefone from './telefone.png';

function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="footer-col logo">
                    <a href="#">
                        <img src={Logo} alt="IncludePets logo" />
                    </a>
                    <p>
                        Conectamos animais abandonados com famílias amorosas.
                        Nossa missão é garantir que cada animal encontre o lar
                        perfeito cheio de amor e cuidado.
                    </p>
                    <div className="icones">
                        <a href="https://www.facebook.com/share/g/1AP2JNbuAb/" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/meuamigoperro?igsh=MXRxaWxzc3d5ZGgwZw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>

                <div className="footer-col links">
                    <h3>Links rápidos</h3>
                    <a href="#">Animais</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Como Ajudar</a>
                    <a href="#">Contato</a>
                </div>

                <div className="footer-col contato">
                    <h3>Contato</h3>
                    <div className="contato-item">
                        <img src={Telefone} alt="Telefone" />
                        <p>(88) 99999-9999</p>
                    </div>
                    <div className="contato-item">
                        <img src={Email} alt="Email" />
                        <a href="mailto:contato@includepets.com">contato@includepets.com</a>
                    </div>
                    <div className="contato-item">
                        <img src={Localizacao} alt="Localização" />
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
