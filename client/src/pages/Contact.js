import React from "react";
import Article from "../components/Article";
import "../App.css";

const Contact = () => {
  const body = (
    <>
      <h1>Hey</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur
        excepturi soluta nulla officia corporis. Minima obcaecati suscipit
        porro. Id, repellat reprehenderit? Optio recusandae obcaecati
        repellendus quis, aut expedita suscipit magnam laudantium commodi magni
        dignissimos aspernatur ea dolores illo placeat, fugit numquam quod
        corrupti dolor deserunt neque quos minus eaque.
      </p>
      <h3>Hoopla</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        optio reprehenderit velit ab mollitia commodi consequatur qui rem
        architecto, incidunt excepturi temporibus eius sed molestias. Rerum
        minima et impedit tenetur nihil vitae quia sunt!
      </p>
    </>
  );
  return (
    <>
      <div className="App-header">
        <h1>Contact</h1>
      </div>
      <Article
        title="Blah"
        body={body}
        author="Matt Brignola"
        date="1/28/2022"
      />
    </>
  );
};

export default Contact;
