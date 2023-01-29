import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./css/sidebar.css";

const Sidebar = () => {
  const [showVanilla, setShowVanilla] = useState(false);
  const toggleVanilla = () => setShowVanilla(!showVanilla);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const toggleFrameworks = () => setShowFrameworks(!showFrameworks);
  const [showNode, setShowNode] = useState(false);
  const toggleNode = () => setShowNode(!showNode);
  const [showDatabases, setShowDatabases] = useState(false);
  const toggleDatabases = () => setShowDatabases(!showDatabases);
  return (
    <>
      <div className="sidebar">
        <ul>
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
                <a href="/">Hi</a>
                <a href="/">Hi</a>
                <a href="/">Hi</a>
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
                <a href="/">Hi</a>
                <a href="/">Hi</a>
                <a href="/">Hi</a>
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
                <a href="/">Hi</a>
                <a href="/">Hi</a>
                <a href="/">Hi</a>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <button
              className={showDatabases ? "show" : "hide"}
              onClick={toggleDatabases}
            >
              Databases
              {showDatabases ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
            </button>
            {showDatabases ? (
              <>
                <a href="/">Hi</a>
                <a href="/">Hi</a>
                <a href="/">Hi</a>
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
