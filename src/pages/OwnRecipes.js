import React from 'react'

const OwnRecipes = () => {
  return (
    <main>
      <h2>Add your own recipe</h2>
      <form>
        <input type="text" placeholder='Name of recipe' /><br />
        <textarea placeholder='Your recipe step by step' /><br />
        <input type="submit" value="Submit" />
      </form>

      <section>
        <p>List of your recipes...</p>
      </section>
    </main>
  )
}

export default OwnRecipes