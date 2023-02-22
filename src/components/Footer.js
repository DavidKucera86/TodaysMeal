import React from "react";
import {
  FaLinkedin,
  FaGithub  
} from "react-icons/fa";
import {
    SiCodewars,
    SiFrontendmentor  
  } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Today's Meal</h3>
        <p>
          This is one of the portfolio projects of React developer David Kučera.
          There is used API from{" "}
          <a href="https://www.themealdb.com/api.php" target="_blank">
            TheMealDB
          </a>
          . If you wish to contact me, just do it throught some social network.
        </p>
      </div>

      <div>
      <li>
        <a href="https://www.linkedin.com/in/david-ku%C4%8Dera-85832b33/" target="_blank">
          <FaLinkedin />
        </a>
      </li>

      <li>
        <a href="https://github.com/DavidKucera86" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.codewars.com/users/DavidKucera86" target="_blank">
          <SiCodewars />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/DavidKucera86" target="_blank">
          <SiFrontendmentor />
        </a>
      </li>
      </div>
    </footer>
  );
};

export default Footer;
