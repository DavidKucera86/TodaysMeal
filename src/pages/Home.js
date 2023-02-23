import React from "react";
import useMeals from "../query-hooks/useMeals";

const Home = () => {
  // loading meals from API
  const meals = useMeals();

  return (
    <main>
      <h2>Get Inspired By American Cousine:</h2>
      {meals.isLoading && <p>Loading meals...</p>}

      {meals.isError && <p>Could not fetch meals...</p>}

      {meals.isSuccess &&
        meals.data.map((meal) => {
          const { idMeal, strMeal, strMealThumb } = meal;

          return (
            <article key={idMeal}>
              <img src={strMealThumb} alt="" />
              <h2>{strMeal}</h2>
              <p>
                <a
                  href={`https://www.themealdb.com/meal.php?c=${idMeal}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  recipe
                </a>
              </p>
            </article>
          );
        })}
    </main>
  );
};

export default Home;
