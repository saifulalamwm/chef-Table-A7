/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Cooked = ({ recipe }) => {
  const { productName, cookingTime, totalCalories } = recipe;
  return (
    <div>
      <div>
        <table className="w-full h-8 my-2 p-2">
          <tbody>
            <tr className="font-semibold text-gray-500">
              <td className="w-64 ">{productName}</td>
              <td className="w-20 text-center ">{cookingTime} min</td>
              <td className="w-20 text-center ">{totalCalories} cal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooked.prototype = {
  recipe: PropTypes.object.isRequired,
};

export default Cooked;
