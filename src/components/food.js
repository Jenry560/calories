import React, { useState, useEffect } from "react";
import axios from "axios";
import FruitForm from "./Fruitform";
import FruitList from "./fruitlist";
import Loader from "./Loader";



const FoodSearch = () => {
  const [search, setSearch] = useState("");
  const [fruit, setFruit] = useState("");
  const [recipe,setRecipe] = useState([])
  const [info,setinfo] = useState({})
  const [loading, setLoading] = useState(false);

   
  const fetchData2 = async (urlx) => {
    const [recipeRes] = await Promise.all([
      axios.get(urlx),]);

    setRecipe(recipeRes.data.hits)
  };
  
  const fetchData = async (url) => {
    setLoading(true);

    const [fruitRes] = await Promise.all([
      axios.get(url),]);

    setFruit(fruitRes.data.hints);
    setinfo(fruitRes.data._links)
    setLoading(false);
  };

  const onNext=()=>{
    fetchData(info.next.href);
  }
  

 
    
  useEffect(() => {
      const { fruit } = search;
      let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=8f733273&app_key=6f34068759dd7038e83fafb476b6929d&ingr=${fruit}&nutrition-type=cooking&health=celery-free`;
      let urlx =`https://api.edamam.com/api/recipes/v2?type=public&q=${fruit}&app_id=f409d030&app_key=78f13204ad88d0eb4bbe9aa52d52c99b&ingr=5-8`
      fetchData(url);
      fetchData2(urlx)
  }, [search]);

  useEffect(() => {
    const Iniurl = `https://api.edamam.com/api/food-database/v2/parser?app_id=8f733273&app_key=6f34068759dd7038e83fafb476b6929d&ingr=food&nutrition-type=cooking&health=celery-free`;
    fetchData(Iniurl)
    
  },[]);
 

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
    
  };

  return (
    <div>
      <article className="grid-1-3">
        <h1 className="fruit-title"> Search your aliment</h1>
        <FruitForm handleSearch={handleSearch} />
        {loading && (<Loader />)}
        {search && !loading ? (
         <>
         <FruitList fruit={fruit} search={search} onNext={onNext} next={info} recipe={recipe} loading={loading}/>
         </> 
        ): (<FruitList fruit={fruit} search={search} onNext={onNext} next={info} recipe={recipe}/>)}
      </article>
    </div>
  );
};

export default FoodSearch;
