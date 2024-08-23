import "./RecipeCard.css";
import type { IRecipe } from "../../../src/@types/index.d.ts";
import { Link } from "react-router-dom";

interface props {
	recipe: IRecipe;
}

function RecipeCard({ recipe }: props) {
	return (
		<div className="recipe-card">
			<img
				src={recipe.thumbnail}
				alt={recipe.title}
				className="recipe-card-image"
			/>
			<div className="card-content">
				<h2 className="recipe-title">{recipe.title}</h2>
				<p className="difficulty">Difficulté: {recipe.difficulty}</p>
				<button type="button" className="recipe-button">
					<Link to={`/recipe/${recipe.slug}`}>Voir la recette</Link>
				</button>
			</div>
		</div>
	);
}

export default RecipeCard;
