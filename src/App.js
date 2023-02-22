import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OwnRecipes from "./pages/OwnRecipes";
import OneRecipe from "./pages/OneRecipe";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="own-rec" element={<OwnRecipes />} />
          <Route path="/recipes/:recipeId" element={<OneRecipe />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
