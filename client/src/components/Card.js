import React, { useState } from "react";
import "./css/card.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

const Card = (props) => {
  const [title, setTitle] = useState("Copy Text");
  const copy = () => {
    setTitle("Copied");
    const array = [];
    props.code.props.children.map((child) => array.push(child.props.children));
    const code = array.join("");
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setTitle("Copy Text");
    }, 1500);
  };
  return (
    <>
      <div className="card">
        <div className="code">
          {props.code}
          <Tooltip title={title}>
            <ContentCopyIcon className="copy" onClick={copy} />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Card;
