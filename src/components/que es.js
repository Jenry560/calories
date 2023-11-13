import React from "react";
import image from "../videod/fruta.png"
import '../stilos/style.css'


function  Que(){
    return(
        <section className="knowledge" id="main"  >
            <div className="knowledge__container container">
                <div className="knowledge__texts">
                    <h2 className="subtitle">How calories will help you in your healthy life?</h2>
                    <p className="about__paragraph">Its very importand know about the nutritional values of foods that we eat in the day for have a fit life cause many times we eat food thinking that dont make us so much damage or its healthy but calories help of it only you need write the food what do you want to know the nutrition values.</p>
                </div>

            <figure className="knowledgepicture">
                <img src={image} className="knowledge__img" alt="que es"/>
            </figure>
          </div>
        </section>
        )
}

export default Que