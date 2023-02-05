import React from "react";
import Article from "../components/Article";
import "../components/css/article.css";

const JavaScript = () => {
  const body = (
    <div className="articleBody">
      <h1>JavaScript</h1>
      <p>
        JavaScript is a coding language that will make you into a real software
        developer. If you have a grip on HTML and CSS you know how to design the
        basic layout and look of a web page, but with JavaScript you will be
        able to make interactive webpages and web applications, or web apps.
        Doing the projects for this section of the course will be what you need
        to start to become a "coder".
      </p>
      <p>
        The web runs on JavaScript. Data is made editable and interactive using
        JavaScript. For Pete's ake, one of the most widely used datatypes on the
        web is JavaSCript Object Notation, or JSON. The end of this course will
        touch on datatypes and how to manipulate data with JavaScript, but the
        course covering Node.js and Databases will make you a true data master.
        Then everything will get put together in the full stack section of the
        course. This introduction to JavaScript will give you an introductory
        look into how to make web pages dynamic but to become a full stack
        developer, you will need to master both the front end and back end.
      </p>
      <p>
        Luckily there are already really good websites to teach you web
        development software languages.{" "}
        <a
          href="https://www.w3schools.com/js/default.asp"
          target="_blank"
          rel="noreferrer"
        >
          W3schools.com
        </a>{" "}
        is one that the original creator of these courses and repository would
        use even to help him remember the necessary code to style certain types
        of web pages components while he was on the job working on a government
        contract. That being said, a really good resource on web for you to
        reference when learning and using JavaScript is{" "}
        <a
          href="https://www.w3schools.com/js/default.asp"
          target="_blank"
          rel="noreferrer"
        >
          W3 Schools
        </a>
        .
      </p>
    </div>
  );
  return (
    <>
      <Article
        title="JavaScript 101"
        author="Matt Brignola"
        date="2/3/23"
        body={body}
      />
    </>
  );
};

export default JavaScript;
