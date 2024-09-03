import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import Wantcook from "./Wantcook";
import Cooked from "./Cooked";
// import data from "../../public/package.json";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantCook, setwantCook] = useState([]);
  const [currentlyCook, setCurrentlyCook] = useState([]);

  const handleWantCook = (recipe) => {
    // console.log(recipe);
    if (wantCook.filter((c) => c.id === recipe.id).length < 3) {
      setwantCook([...wantCook, recipe]);
    } else {
      alert("You can select a item only three times!");
    }
    // setwantCook([...wantCook, recipe]);
  };

  useEffect(() => {
    fetch("/Product.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCooked = (cooked) => {
    setwantCook(wantCook.filter((c) => c.id !== cooked.id));
    setCurrentlyCook([...currentlyCook, cooked]);
  };

  let totalTime = 0;
  currentlyCook.forEach((cook) => {
    totalTime += cook.cookingTime;
  });

  let totalCalories = 0;
  currentlyCook.forEach((cook) => {
    totalCalories += cook.totalCalories;
  });

  return (
    <div className="w-11/12 m-auto mt-10">
      <div className="text-center w-1/2 m-auto">
        <p className="text-2xl font-bold">Our Recipes</p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="flex mt-10 gap-3 ">
        <div className="w-2/3">
          {/* Display product */}
          <p className="font-bold text-2xl">
            Total items load : {recipes.length} items
          </p>
          <hr className="my-5" />
          <div className="flex gap-3 flex-wrap">
            {recipes.map((recipe, idx) => (
              <Product
                key={idx}
                recipe={recipe}
                handleWantCook={() => handleWantCook(recipe)}
              ></Product>
            ))}
          </div>
        </div>
        <div className="w-1/3 px-3">
          <div className="">
            <p className="text-center font-bold text-2xl">
              Want To Cook : {wantCook.length} items
            </p>
            <hr className="my-5" />
            <table className="w-full">
              <thead className="text-left bg-gray-400  h-10 rounded-tl-lg">
                <tr>
                  <th className="w-48 pl-2  ">Name</th>
                  <th className="w-20 text-center ">Time</th>
                  <th className="w-20 text-center ">Calories</th>
                  <th className="w-16 text-center ">Cooked</th>
                </tr>
              </thead>
            </table>
            {wantCook.map((recipe, idx) => (
              <Wantcook
                key={idx}
                recipe={recipe}
                handleCooked={() => handleCooked(recipe)}
              ></Wantcook>
            ))}
          </div>

          {/* Currently cooking */}
          <hr className="my-5" />
          <div className="text-center font-bold text-2xl">
            <p>Currently cooked:{currentlyCook.length} </p>
          </div>
          <hr className="my-5" />
          <table className="w-full">
            <thead className="text-left bg-gray-400  h-10 ">
              <tr>
                <th className="w-56 pl-2  ">Name</th>
                <th className="w-20 text-center ">Time</th>
                <th className="w-20 text-center ">Calories</th>
              </tr>
            </thead>
          </table>
          {currentlyCook.map((recipe, idx) => (
            <Cooked key={idx} recipe={recipe}></Cooked>
          ))}
          <hr className="my-5" />
          <div className="text-gray-500 font-semibold text-right">
            <p>Total cooking time : {totalTime} min </p>
            <hr className="my-5" />
            <p>Total calories : {totalCalories} calories </p>
            <hr className="my-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
