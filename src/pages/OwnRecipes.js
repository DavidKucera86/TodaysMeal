import React, { useReducer, useState } from "react";
import Modal from "../components/Modal";
import { StyledOwnRecipes } from "../components/styles/OwnRecipes.styled";

const reducer = (state, action) => {
  if (action.type === "ADD_RECIPE") {
    const newRecipes = [...state.recipes, action.payload];

    return {
      ...state,
      recipes: newRecipes,
      showNotification: true,
      notificationContent: `Recipe "${action.payload.name}" was added.`,
      notificationColor: "green"
    };
  }

  if (action.type === "DELETE_RECIPE") {
    const filteredRecipes = state.recipes.filter((issue) => {
      return issue.id !== action.payload[0];
    });
    return {
      ...state,
      recipes: filteredRecipes,
      showNotification: true,
      notificationContent: `Recipe "${action.payload[1]}" was deleted.`,
      notificationColor: "green"
    };
  }

  if (action.type === "MISSING_DATA") {
    return {
      ...state,
      showNotification: true,
      notificationContent: "Missing data, please fill all the inputs.",
      notificationColor: "red"
    };
  }

  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      showNotification: false,
    };
  }

  return new Error("Error - invalid action.type");
};

const defaultState = {
  recipes: [],
  showNotification: false,
  notificationContent: "",
  notificationColor: "green"
};

const OwnRecipes = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (recipeName && recipeInstructions) {
      const newRecipe = {
        id: new Date().getTime(),
        name: recipeName,
        instructions: recipeInstructions,
      };
      dispatch({ type: "ADD_RECIPE", payload: newRecipe });
      setRecipeName("");
      setRecipeInstructions("");
    } else {
      dispatch({ type: "MISSING_DATA" });
    }
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  return (
    <StyledOwnRecipes>
      <h2>Add your own recipe</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name of recipe"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        
        <textarea
          placeholder="Your recipe step by step"
          value={recipeInstructions}
          onChange={(e) => setRecipeInstructions(e.target.value)}
        />
        
        <input type="submit" value="Add new recipe" />
      </form>
      {state.showNotification && (
        <Modal
          notificationContent={state.notificationContent}
          closeNotification={closeNotification}
          notificationColor={state.notificationColor}
        />
      )}

      <section>
        {state.recipes.map((recipe) => {
          const { id, name, instructions } = recipe;

          return (
            <article key={id}>
              <h3>{name}</h3>
              <p>{instructions}</p>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_RECIPE", payload: [id, name] })
                }
              >
                Delete
              </button>
            </article>
          );
        })}
      </section>
    </StyledOwnRecipes>
  );
};

export default OwnRecipes;
