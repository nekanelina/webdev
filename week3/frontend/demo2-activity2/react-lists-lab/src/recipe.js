import React from "react";

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <p>
        <strong>Name :</strong> {recipe.name}
      </p>
      <p>
        <strong>Ingridients:</strong> {recipe.ingredients.join(", ")}
      </p>
    </div>
  );
}

export default Recipe;
