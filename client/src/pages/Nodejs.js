import React from "react";
import Article from "../components/Article";
import "../components/css/article.css";

const Nodejs = () => {
  const body = (
    <>
      <h1>Node.js</h1>
      <p>
        Node.js gives a developer the ability to build a server written with
        JavaScript. You can install Node.js on your local machine in ordert to
        be able to build servers with JavaScript. Since this is a web
        development course many of the projects that you build in this course
        will build servers with Node.js and webservers using a Node.js module
        called Express.js. HEre is the link to download{" "}
        <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
          Node.js
        </a>
        .
      </p>
    </>
  );
  return (
    <>
      <Article
        title="Nodejs"
        body={body}
        author="Matthew Brignola"
        date="2/5/2022"
      />
    </>
  );
};

export default Nodejs;
