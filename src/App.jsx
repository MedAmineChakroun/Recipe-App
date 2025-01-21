import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/foodList.jsx";
import Nav from "./components/Nav.jsx";
import styles from "./App.module.css";
import Container from "./components/Container.jsx";
import InnerContainer from "./components/InnerContainer.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
function App() {
  const [foods, setFoods] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className={styles.App}>
      <Nav />
      <Search setFoods={setFoods} />

      <Container>
        <InnerContainer>
          <FoodList foods={foods} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
