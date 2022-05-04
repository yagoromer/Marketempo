import React from "react";
import Logo from "../img/Marketempo_transparente.png";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark nb-4">
        <img alt="logo" src={Logo} />
        <a className="navbar-brand text-white" href="#t">
          React . JS utilizando API - Tema: Previsão do Tempo
        </a>
      </nav>
      <main className="container"> {children} </main>
    </div>
  );
}

export default Layout;
