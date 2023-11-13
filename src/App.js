
import React from "react";

import FoodSearch from "./components/food";
import Footer from "./components/footer";

import Navbal from "./components/Navbar";
import Portada from "./components/portada";
import Que from "./components/que es";


function App() {
  return (
    <>
      <Navbal brand="Calories" />
      <Portada/>
      <Que/>      
      <div className="container">
        <FoodSearch/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
