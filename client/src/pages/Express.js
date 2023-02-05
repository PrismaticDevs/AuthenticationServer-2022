import React from "react";
import Article from "../components/Article";
import "../components/css/article.css";

const Express = () => {
  const body = (
    <>
      <h1>Express.js</h1>
      <p>
        Express.js is a web server module that can be installed using Node.js.
        Express.js will really help you in your quest to become a full stack web
        developer and will require you to learn an understanding of HTTP, or the
        Hyper Text Transfer Protocol, and the http request and response methods.
        As a full stack web developer it is necessary for you to have a solid
        grasp of what HTTP is and how to utilize the different request and
        response methods that are defined by HTTP.
      </p>
      <p>
        The various methods used within HTTP are GET, POST, PUT, PATCH and
        DELETE. GET and DELETE do exactly what they say with data. They get data
        and delete data, but POST, PUT, and PATCH require a more detailed
        explanation. POST allows a web server to be able to send data from a
        webserver, or allows you to post data on the webserver. PUT and Patch
        allow you to edit data that's already on the server.
      </p>
    </>
  );
  return (
    <>
      <Article
        title="Express.js and an Introduction to HTTP"
        body={body}
        author="Matthew Brignola"
        date="2/5/2022"
      />
    </>
  );
};

export default Express;
