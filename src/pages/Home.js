import React from "react";
import { StyledHome } from "../components/styles/Home.styled";
import useMeals from "../query-hooks/useMeals";

const Home = () => {
  // loading meals from API
  const meals = useMeals();

  return (
    <StyledHome>
      <h2>Get Inspired By American Cousine:</h2>
      <section>
        {meals.isLoading && <p>Loading meals...</p>}

        {meals.isError && <p>Could not fetch meals...</p>}
      </section>
      <div>
        {meals.isSuccess &&
          meals.data.map((meal) => {
            const { idMeal, strMeal, strMealThumb } = meal;

            return (
              <article key={idMeal}>
                <img src={strMealThumb} alt="" />
                <h3>{strMeal}</h3>

                <a
                  href={`https://www.themealdb.com/meal.php?c=${idMeal}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  recipe
                </a>
              </article>
            );
          })}
      </div>
    </StyledHome>
  );
};

export default Home;
