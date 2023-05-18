import FeaturedCategoriesSez from "./components/FeaturedCategoriesSez";
import Nav from "./components/Nav";
import "./reset.css";
import "./style.css";

const App = () => {
  return (
      <div className="app">
        <Nav />
        <FeaturedCategoriesSez />
      </div>
  );
}

export default App;
