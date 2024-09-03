import Banner from "./components/Banner";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      {/* header start */}
      <div className="">
        <Header></Header>
        <Banner></Banner>
        <Recipe></Recipe>
      </div>
    </>
  );
}

export default App;
