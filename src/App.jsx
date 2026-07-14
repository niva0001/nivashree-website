import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import ProductDetails from "./pages/ProductDetails";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          {/* Dynamic Product Page */}
          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />

          <Route
            path="/recipes"
            element={<Recipes />}
          />

          <Route
            path="/recipes/:recipeName"
            element={<RecipeDetails />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;