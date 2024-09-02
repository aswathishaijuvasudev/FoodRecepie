import { useEffect } from "react";

export const Header = ({foodName,setFoodName,url, setUrl})=>{
    useEffect(()=>{
        if(foodName){
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
        }
    },[foodName]);

    const setFood=(e)=>{
        e.preventDefault();
        setFoodName(e.target.value)
    }
    return(
        <div className="header container col-10">
            <span >
            <h1 className="text-center">Search Your Food Recipe</h1>
            <p className="text-center">"Discover delicious recipes from around the world with our Food Recipe App. Whether you're a beginner or a seasoned cook, find inspiration for every meal and turn your kitchen into a culinary adventure." </p>
            </span>
            <form className="d-flex justify-content-center">
                <input type="text" name="text" className="form-control col-md-4 col-xs-8 col-sm-8 col-10"placeholder="Enter Food Name!......" value={foodName} onChange={ (e)=>setFood(e)}></input>
            </form>
        </div>
    );
}