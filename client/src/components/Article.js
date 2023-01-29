import React from "react";
import "./css/article.css";

const Article = (props) => {
  return (
    <>
      <article className="article">
        <p className="title">{props.title}</p>
        <div className="articleBody">{props.body}</div>
        <div className="items">
          <p className="lineItem">By: {props.author}</p>
          <p className="lineItem">{props.date}</p>
        </div>
      </article>
    </>
  );
};

export default Article;
