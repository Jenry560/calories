import React, { useEffect } from "react";
import "../../stilos/cookiesBanner.css";
import imgCookies from "../../videod/imgCookie.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function CookiesBanner({ crearCookie }) {
  const [cookies, setCookies] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies_aceptadas_calories")) {
      setCookies(true);
    } else {
      crearCookie();
    }
  }, [crearCookie]);

  const botonAceptar = (e) => {
    setCookies(false);
    localStorage.setItem("cookies_aceptadas_calories", true);
    crearCookie();
  };

  return (
    <>
      <div
        className={`aviso-cookies ${cookies && "activo"}`}
        id="aviso-cookies"
      >
        <img className="galleta" src={imgCookies} alt="Galleta" />
        <h3 className="titulo">Cookies</h3>
        <p className="parrafo">
          Navega con mayor fluidez, disfruta de contenido personalizado y recibe
          recomendaciones relevantes gracias a las cookies.Nos preocupamos por
          tu comodidad y privacidad. Puedes obtener más información y configurar
          tus preferencias en nuestra Política de cookies.
        </p>
        <div className="cookies_buttons">
          <button
            className="boton"
            id="btn-aceptar-cookies"
            onClick={botonAceptar}
          >
            De acuerdo
          </button>
          <Link className="enlace" to="/cookies">
            Aviso de Cookies
          </Link>
        </div>
      </div>
      <div
        className={`fondo-aviso-cookies ${cookies && "activo"} `}
        id="fondo-aviso-cookies"
      ></div>
    </>
  );
}

export default CookiesBanner;
