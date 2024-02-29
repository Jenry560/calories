import React from "react";

import FoodSearch from "./components/food";
import Footer from "./components/footer";

import Portada from "./components/portada";
import Que from "./components/que es";
import ReactGa from "react-ga4";

// function crearCookie() {
//   ReactGa.initialize("G-MG2RZ57KQ6");
// }

function App() {
  // const handleCookies = () => {
  //   crearCookie();
  // };

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
