import React from "react";
import "./css/card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <p className="code">{props.code}</p>
      </div>
    </>
  );
};

export default Card;
