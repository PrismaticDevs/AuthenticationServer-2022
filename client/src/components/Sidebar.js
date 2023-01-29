import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./css/sidebar.css";

const Sidebar = () => {
  const [showHTML, setShowHTML] = useState(false);
  const toggleHTML = () => setShowHTML(!showHTML);
  const [showVanilla, setShowVanilla] = useState(false);
  const toggleVanilla = () => setShowVanilla(!showVanilla);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const toggleFrameworks = () => setShowFrameworks(!showFrameworks);
  const [showNode, setShowNode] = useState(false);
  const toggleNode = () => setShowNode(!showNode);
  const [showSQL, setShowSQL] = useState(false);
  const toggleSQL = () => setShowSQL(!showSQL);
  const [showNoSQL, setShowNoSQL] = useState(false);
  const toggleNoSQL = () => setShowNoSQL(!showNoSQL);
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <button className={showHTML ? "show" : "hide"} onClick={toggleHTML}>
              HTML & CSS
              {showHTML ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showHTML ? (
              <>
                <a
                  href="https://www.w3schools.com/html/html_css.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  HTML & CSS
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button
              className={showVanilla ? "show" : "hide"}
              onClick={toggleVanilla}
            >
              Vanilla JavaScript
              {showVanilla ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showVanilla ? (
              <>
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript.com
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button
              className={showFrameworks ? "show" : "hide"}
              onClick={toggleFrameworks}
            >
              JavaScript Frameworks
              {showFrameworks ? (
                <ChevronRightIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
            {showFrameworks ? (
              <>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React.js
                </a>
                <a href="https://angular.io/" target="_blank" rel="noreferrer">
                  Angular
                </a>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                  Vue.js
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button className={showNode ? "show" : "hide"} onClick={toggleNode}>
              Node.js
              {showNode ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showNode ? (
              <>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  Node.js
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button className={showSQL ? "show" : "hide"} onClick={toggleSQL}>
              SQL
              {showSQL ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showSQL ? (
              <>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MySQL
                </a>
                <a
                  href="https://www.postgresql.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PostGres
                </a>
                <a href="https://mariadb.org/" target="_blank" rel="noreferrer">
                  MariaDB
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button
              className={showNoSQL ? "show" : "hide"}
              onClick={toggleNoSQL}
            >
              NoSQL
              {showNoSQL ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showNoSQL ? (
              <>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MongoDB
                </a>
                <a
                  href="https://couchdb.apache.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apache CouchDB
                </a>
                <a href="https://redis.io/" target="_blank" rel="noreferrer">
                  Redis
                </a>
              </>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
