import { Link, Route, Routes, NavLink } from "react-router-dom";

import "./SideMenu.css";
import type { IRecipe } from "../../../src/@types/index.d.ts";
interface RecipesProps {
  recipes: IRecipe[];
}

function SideMenu({ recipes }: RecipesProps) {
  console.log();
  return (
    <div className="SideMenu">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/accueil">Acceuil </NavLink>
          </li>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <NavLink to={`/recipe/${recipe.slug}`}> {recipe.title} </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
