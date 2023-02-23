import React from 'react'
import recipes from '../data/data-recipes'

const OwnRecipes = () => {
  return (
    <main>
      <h2>Add your own recipe</h2>
      <form>
        <input type="text" placeholder='Name of recipe' /><br />
        <textarea placeholder='Your recipe step by step' /><br />
        <input type="submit" value="Add new recipe" />
      </form>

      <section>
        {
          recipes.map((recipe) => {
            const {id, name, instructions} = recipe

            return <article key={id}>
              <h3>{name}</h3>
              <button>Delete</button>
              <p>{instructions}</p>
            </article>
          })
        }
      </section>
    </main>
  )
}

export default OwnRecipes