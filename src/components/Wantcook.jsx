/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Wantcook = ({ recipe, handleCooked }) => {
  const { productName, cookingTime, totalCalories } = recipe;
  return (
    <div>
      <table className="w-full h-8 my-2 p-2">
        <tbody>
          <tr className="font-semibold text-gray-500">
            <td className="w-64 ">{productName}</td>
            <td className="w-20 text-center ">{cookingTime} min</td>
            <td className="w-20 text-center ">{totalCalories} cal</td>
            <td className="w-16 text-center bg-green-400 rounded-xl px-3 text-white ">
              <button onClick={() => handleCooked(recipe)}>Preparing</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
Wantcook.prototype = {
  recipe: PropTypes.object,
};

export default Wantcook;
