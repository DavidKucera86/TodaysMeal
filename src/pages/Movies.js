import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import allMovies from "../data/data-movies";

const Movies = () => {
    const [searchingMovie, setSearchingMovie] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        const finalMovies = allMovies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchingMovie.toLocaleLowerCase())
        })

        setFilteredMovies(finalMovies)
    },[searchingMovie])

  return (
    <main>
      <h2>Which movie to the meal do you wish?</h2>
      <form>
        <input type="text" placeholder="Search for a Movie"
            value={searchingMovie}
            onChange={(e) => setSearchingMovie(e.target.value)}
        />
      </form>
      <section>
        {filteredMovies.map((oneMovie) => {
          const { id, image, title } = oneMovie;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <img src={image} alt={title} />
              <Link to={`/detail/${id}`}>
                <FaInfoCircle />
                <span>More info</span>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Movies;
