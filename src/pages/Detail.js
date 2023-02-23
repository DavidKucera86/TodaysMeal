import React from "react";
import { Link, useParams } from "react-router-dom";
import allMovies from "../data";
import {TiArrowBack} from "react-icons/ti";

const Detail = () => {
  const { idDetail } = useParams();

  const chosenMovie = allMovies.find((oneMovie) => {
    return oneMovie.id === parseInt(idDetail);
  });

  const { image, title, description, age, tags } = chosenMovie;

  return (
    <main>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{age}</p>
      <p>{tags}</p>
      <Link to={`/movies`}>
        <TiArrowBack />
        <span>Back to Movies</span>
      </Link>
    </main>
  );
};

export default Detail;
