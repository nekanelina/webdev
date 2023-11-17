import { recipes } from "./data.js";
import Recipe from "./recipe.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
