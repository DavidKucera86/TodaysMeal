import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledMovies } from "../components/styles/Movies.styled";
import allMovies from "../data/data-movies";

const Movies = () => {
  const [searchingMovie, setSearchingMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const finalMovies = allMovies.filter((movie) => {
      return movie.title
        .toLowerCase()
        .includes(searchingMovie.toLocaleLowerCase());
    });

    setFilteredMovies(finalMovies);
  }, [searchingMovie]);

  return (
    <StyledMovies>
      <h2>Which movie to the meal do you wish?</h2>
      <form>
        <input
          type="text"
          placeholder="Search for a Movie"
          value={searchingMovie}
          onChange={(e) => setSearchingMovie(e.target.value)}
        />
      </form>
      <section>
        {filteredMovies.map((oneMovie) => {
          const { id, image, title } = oneMovie;
          return (
            <article>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <Link to={`/detail/${id}`}>More</Link>
            </article>           
          );
        })}
      </section>
    </StyledMovies>
  );
};

export default Movies;
