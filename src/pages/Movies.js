import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
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
            <article key={id}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <Link to={`/detail/${id}`}>
                <FaInfoCircle />
                <div>More info</div>
              </Link>
            </article>
          );
        })}
      </section>
    </StyledMovies>
  );
};

export default Movies;
