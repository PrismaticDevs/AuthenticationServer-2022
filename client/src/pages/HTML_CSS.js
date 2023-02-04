import React from "react";
import Article from "../components/Article";
import "../App.css";
import "../components/css/article.css";

const HTML_CSS = () => {
  const body = (
    <div className="articleBody">
      <div className="flex">
        <h1>HTML</h1>
        <p>Hyper Text Markup Language</p>
      </div>
      <h3>How This Works</h3>
      <p>
        Rather than write our own articles when there are already hundreds of
        articles on HTML and CSS that exist on the web, we will give you links
        to useful resources and then lead you on guided projects.
      </p>
      <p>
        The goal of this course is to get you building and developing actual
        webpages and projects that will give you a competitive edge when you
        start to look for a job. Web development is in high demand, so let's cut
        to the chase and begin learning how to code and develop complex and
        interactive web applications. This of course is the 101 introduction to
        HTML and CSS, which are the basic building blocks and styling you need
        to build a web page. The next series of projects have to do with making
        your web pages dynamic and far more interactive by using JavaScript.
      </p>
    </div>
  );
  return (
    <>
      <Article
        title="Web Design 101: HTML & CSS"
        body={body}
        author="Matt Brignola"
        date="1/28/2022"
      />
    </>
  );
};

export default HTML_CSS;
