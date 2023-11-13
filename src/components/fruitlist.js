import React from "react";
import Message from "./mensaje";
import Pagination from "./pagination";

const FruitList = ({ fruit, search, recipe, onNext,next,loading}) => {
  return (
    <>
      {fruit.length === 0 ? (
        <Message
          msg={`dont find the fruit: "<em>${search.fruit}</em>"`}
        />
      ) : (
    <div className="container">
      <div className="row">
        {fruit.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.food.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.food.label}</h5>
                <hr />
                <p className="card-text">100 gr about</p>
                <p className="card-text">Calories: {item.food.nutrients.ENERC_KCAL}</p>
                <p className="card-text">Porcent: {item.food.nutrients.PROCNT}</p>
                <p className="card-text">Fat: {item.food.nutrients.FAT}</p>
                <p className="card-text">Choresterol: {item.food.nutrients.CHOCDF}</p>
                <p className="card-text">Dietary fiber: {item.food.nutrients.FIBTG}</p>
              </div>
            </div>
          </div>
        ))}
        <Pagination onNext={onNext} next={next}/>
        <h1 className="fruit-title">Recipes</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
          {recipe.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-1">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.recipe.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.recipe.label}</h5>
                <hr />
                <p className="card-text">Calories: {item.recipe.calories}</p>
                <p className="card-text">ingredients: {item.recipe.ingredientLines}</p>
                <p className="card-text">For: {item.recipe.healthLabels}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
    
  )}  
    </>
  );
};

export default FruitList;
