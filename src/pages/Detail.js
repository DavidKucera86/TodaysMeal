import React from "react";
import { Link, useParams } from "react-router-dom";
import allMovies from "../data/data-movies";
import { TiArrowBack } from "react-icons/ti";
import { StyledDetail } from "../components/styles/Detail.styled";

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
      <Link to={`/movies`}>
        <TiArrowBack />
        <span>Back to the Movies</span>
      </Link>
    </StyledDetail>
  );
};

export default Detail;
