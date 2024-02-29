import React from "react";

import FoodSearch from "./components/food";
import Footer from "./components/footer";

import Portada from "./components/portada";
import Que from "./components/que es";
import ReactGa from "react-ga";

function App() {
  const trakingId = "G-X0R31LHCMZ";
  ReactGa.initialize(trakingId);

  return (
    <>
      <Portada />
      <Que />
      <div className="container">
        <FoodSearch />
      </div>

      <Footer />
    </>
  );
}

export default App;
