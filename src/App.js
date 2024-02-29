import React from "react";

import FoodSearch from "./components/food";
import Footer from "./components/footer";

import Portada from "./components/portada";
import Que from "./components/que es";
import ReactGa from "react-ga4";

function App() {
  function crearCookie() {
    ReactGa.initialize("G-MG2RZ57KQ6");
    ReactGa.send({
      hitType: "pageview",
      page: "/my-path",
    });
  }

  return (
    <>
      <Portada />
      <Que />
      <div className="container">
        <FoodSearch />
      </div>

      <Footer crearCookie={crearCookie} />
    </>
  );
}

export default App;
