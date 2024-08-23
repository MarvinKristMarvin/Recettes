import React from "react";
import type { IRecipe } from "../../@types/index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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

	return <div className="RecipeDetails">{recipe?.title}</div>;
}

export default RecipeDetails;
