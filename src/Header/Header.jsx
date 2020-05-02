import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <a href="https://www.webmotors.com.br" title="Webmotors" target="_blank" rel="noopener noreferrer" className="link-logo">
        <img src="../../img/webmotors.svg" alt="webmotors" height="29" />
      </a>
      <div>
        <p><span>Desafio do cadidato</span> <strong>
          <a href="https://trampos.co/sidneirodrigues"
            target="_blank"
            rel="noopener noreferrer"
            alt="Sidnei Rodrigues"
            title="Currículo de Sidnei Rodrigues"
            className="link-candidato"
          >
            Sidnei R. Rodrigues
          </a>
        </strong></p>
      </div>
    </header>
  );
};

export default Header;