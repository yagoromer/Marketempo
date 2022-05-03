import React from "react";
import { useState } from "react";
import Logo from './componentes/img/Marketempo_transparente.png'


function App() {
  const [city, setCity] = useState("São Paulo");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handChange = (e) => {
    setCity(e.target.value);
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=a1432c128ac744fea9d114748220205&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForecast(data)
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark nb-4">
        <a className="navbar-brand text-white" href="#t">
          React . JS utilizando API - Tema: Previsão do Tempo 
        </a>

      </nav>
      <main className="container">
        <div className="">
          <img alt="logo" src={Logo} />
          <h2>
            Verifique o tempo, antes de sair de casa!
          </h2>

          <p className="lead">
            Escreva a sua cidade, e selecione pesquisar.
          </p>

          <div className="row mb-4">

            <div className="col-md-6">

              <input onChange={handChange}
                className="form-control" value={city} />

            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

          {weatherForecast ? (
            <div>
              <div className="mt-4 d-flex align-items-center">
                <div>
                  <img src={weatherForecast.current.condition.icon} />
                </div>

                <div>
                  <h3> O clima está: {weatherForecast.current.condition.text} </h3>
                  <div />

                  <p>
                    temp: {weatherForecast.current.temp_c}
                  </p>
                </div>
              </div>
            </div>

          ) : null}

        </div>
      </main>
    </div>
  );
}

export default App;
