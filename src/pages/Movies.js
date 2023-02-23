import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import allMovies from '../data'

const Movies = () => {
  return (
    <main>
        <h2>Which movie to the meal do you wish?</h2>
        <section>
            {
                allMovies.map((oneMovie) => {
                    const {id, image, title} = oneMovie
                    return <article key={id}>
                        <h3>{title}</h3>
                        <img src={image} alt={title} />
                        <Link to={`/detail/${id}`}>
                        <FaInfoCircle />
                        <span>More info</span>
                        </Link>
                    </article>
                })
            }
        </section>
    </main>
  )
}

export default Movies