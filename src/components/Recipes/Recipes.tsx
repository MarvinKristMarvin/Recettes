import "./Recipes.css";
import type { IRecipe } from "../../../src/@types/index.d.ts";
import RecipeCard from "../RecipeCard/RecipeCard";

import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

interface RecipesProps {
	recipes: IRecipe[];
}

function Recipes({ recipes }: RecipesProps) {
	return (
		<div className="Recipes">
			<h1>Les recettes oRecipes</h1>
			<p>Voici nos {recipes.length} recettes</p>
			<div className="cardsContainer">
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
}

export default Recipes;
