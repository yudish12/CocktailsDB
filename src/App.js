import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import SharedLay from "./Components/SharedLayout";
import SingleCocktail from "./Components/SingleCocktail";
import Category from "./Components/Category";
import CacktailCategory from "./Components/CacktailCategory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLay />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Category />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route
            path="categories/cocktails/:category"
            element=<CacktailCategory />
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
