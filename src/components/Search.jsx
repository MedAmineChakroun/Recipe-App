import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import ApiRequests from "./ApiRequests";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const key = "02e6b40c27bc4b51bb9dd54ce5f062ad";

export default function Search({ setFoods }) {
  const [query, setQuery] = useState("pizza");
  const [requestsLeft, setRequestsLeft] = useState(null); // Track quota points left

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${url}?query=${query}&apiKey=${key}`);
        const data = await response.json();
        setFoods(data.results);

        // Get the number of points left today from the response headers
        const requestsLeft = response.headers.get("X-API-Quota-Left");
        setRequestsLeft(requestsLeft); // Set it in the state
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    }
    fetchFood();
  }, [query, setFoods]);

  return (
    <div className={styles.searchInputDiv}>
      <input
        className={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      {requestsLeft}
      <ApiRequests requestsLeft={requestsLeft} />
    </div>
  );
}
