import React from "react";
import Button from "./Button";
import { StyledArticle } from "./styles/Article.styled";

const Article = ({ image, name, url, target, text }) => {
  return (
    <StyledArticle>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Button url={url} target={target} text={text} />
    </StyledArticle>
  );
};

export default Article;
