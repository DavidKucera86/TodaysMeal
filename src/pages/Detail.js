import React from "react";
import { useParams } from "react-router-dom";
import allMovies from "../data/data-movies";

import { StyledDetail } from "../components/styles/Detail.styled";
import Button from "../components/Button";

const Detail = () => {
  const { idDetail } = useParams();

  const chosenMovie = allMovies.find((oneMovie) => {
    return oneMovie.id === parseInt(idDetail);
  });

  const { image, title, description, age, tags } = chosenMovie;

  return (
    <StyledDetail>
      <img src={image} alt={title} />
      <h3>
        <small>Movie to the Meal:</small> <br /> {title}
      </h3>
      <p>{description}</p>
      <p>{age}</p>
      <p>{tags}</p>
      <Button url="/movies" text="Back" />
    </StyledDetail>
  );
};

export default Detail;
