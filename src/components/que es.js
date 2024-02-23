import React from "react";
import image from "../videod/fruta.png";
import "../stilos/style.css";
import ElementoAnimado from "../hooks/elementoAnimado";

function Que() {
  return (
    <section className="knowledge" id="main">
      <div className="knowledge__container container">
        <ElementoAnimado id={"text_knowledge"} clase={"knowledge__texts"}>
          <h2 className="subtitle">
            How calories will help you in your healthy life?
          </h2>
          <p className="about__paragraph">
            Its very importand know about the nutritional values of foods that
            we eat in the day for have a fit life cause many times we eat food
            thinking that dont make us so much damage or its healthy but
            calories help of it only you need write the food what do you want to
            know the nutrition values.
          </p>
        </ElementoAnimado>

        <ElementoAnimado id={"picture_knowledge"} clase={"knowledgepicture"}>
          <img src={image} className="knowledge__img" alt="que es" />
        </ElementoAnimado>
      </div>
    </section>
  );
}

export default Que;
