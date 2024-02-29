import videoN from "../videod/naturaleza.mp4";
import "../stilos/style.css";
import ReactGa from "react-ga";
import { useEffect } from "react";

const Portada = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div className="portada">
      <div className="overlay"></div>
      <video src={videoN} autoPlay loop muted />
      <div className="content contentx">
        <h1 className="title-portada">Keep healthy with calories</h1>
        <p className="paragraph-portada">
          Learn about nutritional values of foods
        </p>
      </div>
    </div>
  );
};

export default Portada;
