import React from "react";
import uniqid from "uniqid";
import Item from "./Items";
const Result = ({ recipes }) => {
   return (
      <div
         class="card-deck"
         style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
         }}
      >
         {recipes.map(recipe => (
            <Item
               key={uniqid()}
               title={recipe.recipe.label}
               image={recipe.recipe.image}
               label={recipe.recipe.healthLabels}
               ingredients={recipe.recipe.ingredientLines}
            />
         ))}
      </div>
   );
};

export default Result;
