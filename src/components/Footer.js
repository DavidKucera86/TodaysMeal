import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodewars, SiFrontendmentor } from "react-icons/si";
import ImgCook from "./ImgCook";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-row">
        
        <div className="proclaimer">
          <h3>Today's Meal</h3>
          <p>
            This is one of the portfolio projects of React developer David
            Kučera. There is used API from{" "}
            <a
              href="https://www.themealdb.com/api.php"
              target="_blank"
              rel="noreferrer"
            >
              TheMealDB
            </a>{" "}
            and movie pictures from{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLQ8x_VWW6AkvURLFWrOZy1e8cZuyx_xN8"
              target="_blank"
              rel="noreferrer"
            >
              Hackni svou budoucnost
            </a>
            . If you wish to contact me, just do it throught some social
            network.
          </p>
        </div>

        <div className="socials">
          <li>
            <a
              href="https://www.linkedin.com/in/david-ku%C4%8Dera-85832b33/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/DavidKucera86"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.codewars.com/users/DavidKucera86"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodewars />
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/DavidKucera86"
              target="_blank"
              rel="noreferrer"
            >
              <SiFrontendmentor />
            </a>
          </li>
        </div>
        <ImgCook url="/images/header-right.png" />
      </div>      
    </StyledFooter>
  );
};

export default Footer;
