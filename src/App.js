import React from "react";
import Layout from "./components/layout/Layout";
import WeatherForecast from "./pages/WeatherForecast";

function App() {
  return (
    <Layout>
      <WeatherForecast></WeatherForecast>
    </Layout>
  );
}

export default App;
