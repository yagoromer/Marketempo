import React from "react";
import { useState } from "react";

function WeatherForecast() {
  const [city, setCity] = useState("São Paulo");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [hasInput, setHasInput] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
    setHasInput(!Boolean(e.target.value));
    setWeatherForecast(null);
  };

  const handleSearch = () => {
    if (city) {
      return fetch(
        `http://api.weatherapi.com/v1/current.json?key=a1432c128ac744fea9d114748220205&q=${city}&lang=pt`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          setWeatherForecast(data);
        })
        .catch((error) => {});
    }
    return Promise.resolve();
  };

  return (
    <div className="">
      <h2>Verifique o tempo, antes de sair de casa!</h2>

      <p className="lead">Escreva a sua cidade, e selecione pesquisar.</p>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            onChange={handleChange}
            className="form-control"
            value={city}
          />
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
              <h3>O hoje está: {weatherForecast.current.condition.text}</h3>
              <div />

              <p>temp: {weatherForecast.current.temp_c}</p>
            </div>
          </div>
        </div>
      ) : null}

      {hasInput ? (
        <div className="mt-4 d-flex align-items-center">
          <p> Ops. digite, para pesquisar. </p>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherForecast;
