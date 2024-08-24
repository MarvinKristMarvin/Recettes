import React from "react";
import type { IRecipe } from "../../@types/index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./RecipeDetails.css";
interface props {
  recipe: IRecipe;
}

function RecipeDetails() {
  const [recipe, setRecipe] = useState<null | IRecipe>(null);
  const { slug } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const recipes = await axios.get(
          `https://orecipesapi.onrender.com/api/recipes/${slug}`,
        );
        console.log(recipes.data);
        setRecipe(recipes.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [slug]);

  return (
    <div className="RecipeDetails">
      <div className="container">
        <img src={recipe?.thumbnail} alt="" />
        <p className="recipe-title">{recipe?.title}</p>
      </div>
      {}
      <ul className="ingredients">
        {recipe?.ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <span>{`${ingredient.quantity} ${ingredient.unit}`}</span>
            <p>{ingredient.name}</p>
          </li>
        ))}
      </ul>
      <ul className="instructions">
        {recipe?.instructions.map((instruction) => (
          <li key={instruction}>
            <span>-</span>
            <p>{instruction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
