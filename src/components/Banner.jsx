import banner from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="text-center text-white w-3/4 ">
        <p className="text-6xl font-bold">
          Discover an exceptional cooking class tailored for you!
        </p>
        <p className="text-lg my-10">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-5 justify-center  ">
          <button className="bg-green-500 p-4 rounded-3xl text-black font-semibold">
            Explore Now
          </button>
          <button className="border-2 p-4 rounded-3xl bg-black opacity-50 font-semibold">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
