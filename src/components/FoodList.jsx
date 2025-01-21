import FoodItem from "./FoodItem";
export default function FoodList({ foods, setFoodId }) {
  return (
    <div>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
