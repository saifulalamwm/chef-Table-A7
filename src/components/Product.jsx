/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";

const Product = ({ recipe, handleWantCook }) => {
  //   console.log(recipe);
  const {
    productName,
    productDescription,
    ingredients,
    productImage,
    cookingTime,
    totalCalories,
  } = recipe;
  return (
    <div className="p-4 border-2 rounded-xl w-96 grow ">
      <img className="rounded-xl w-full" src={productImage} alt="" />
      <p className="text-xl my-3 font-bold">{productName}</p>
      <p className="h-12">{productDescription}</p>
      <hr className="my-5" />
      <p className="font-bold">Ingredient {ingredients.length} </p>
      <div className="text-gray-500">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </div>
      <hr className="my-5" />

      <div className="flex gap-5 text-slate-400 font-semibold">
        <p className="flex items-center gap-2">
          <IoMdTime />
          {cookingTime} min
        </p>
        <p>{totalCalories} calories</p>
      </div>
      <button
        onClick={() => handleWantCook(recipe)}
        className="bg-green-400 px-5 py-3 text-sm font-semibold mt-3 rounded-3xl"
      >
        Want to cook
      </button>
    </div>
  );
};

Product.prototype = {
  recipe: PropTypes.object,
};
export default Product;
