import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const ApiKey = "02e6b40c27bc4b51bb9dd54ce5f062ad";
  useEffect(() => {
    async function fetchDetails() {
      const result = await fetch(`${url}?apiKey=${ApiKey}`);
      const data = await result.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchDetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes}</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "Vegeterain" : "Not Vegeterian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : "Not Vegan"}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.id}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
