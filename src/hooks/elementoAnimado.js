import React, { useState, useEffect } from "react";

function ElementoAnimado({ id, children, clase }) {
  const [animado, setAnimado] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      const elemento = document.getElementById(id);

      if (elemento) {
        const posicionElemento = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;
        if (posicionElemento < alturaPantalla && !animado) {
          setAnimado(true);
        }
      }
    };

    window.addEventListener("scroll", manejarScroll);
    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, [id, animado]);

  return (
    <div id={id} className={animado ? clase : "zeroOpacity"}>
      {children}
    </div>
  );
}

export default ElementoAnimado;
