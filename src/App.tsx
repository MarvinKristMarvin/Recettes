import "./reset.css";
import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import SideMenu from "./components/SideMenu/SideMenu";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

//import type IRecipe from "./Interfaces/Recipe";

import type { IRecipe } from "./@types/index.d.ts";

function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [chosenRecipe, setChosenRecipe] = useState<null | IRecipe>(null);

  //http://localhost:5173/accueil

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipes = await axios.get(
          "https://orecipesapi.onrender.com/api/recipes",
        );
        console.log(recipes.data);
        setRecipes(recipes.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <SideMenu recipes={recipes} />

        <div className="mainContent">
          <Header />

          <Routes>
            <Route path="/accueil" element={<Recipes recipes={recipes} />} />
            <Route path="/recipe/:slug" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
