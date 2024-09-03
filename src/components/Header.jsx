import user1 from "../assets/user-3.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-between w-11/12 m-auto items-center mt-5 flex-wrap">
      {/* Nav logo */}
      <div className="font-bold text-2xl">
        <p>Star Kabab BD</p>
      </div>
      {/* Nav link */}
      <div className="text-xl">
        <ul className="flex gap-5 underline">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Recipe</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
        </ul>
      </div>
      {/* Search & user */}
      <div className="flex items-center gap-2">
        <CiSearch />
        <input
          placeholder="Search"
          type="search"
          name=""
          id=""
          className="border-2 border-gray-400 p-2 rounded-lg"
        />
        <img className="w-10 rounded-full" src={user1} alt="" />
      </div>
    </div>
  );
};

export default Header;
