import React from "react";

const Home = () => {
  return (
    <main>
      <section>
        <input type="text" placeholder="Search for a Meal..." />
        <label>
          p.e. fish, chicken, duck, pork, soup, salad, cheese, cake, potatoe,
          developer
        </label>
      </section>

      <section>
        <p>Vyhledaná jídla...</p>
      </section>
    </main>
  );
};

export default Home;
