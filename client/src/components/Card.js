import React from "react";
import "./css/card.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <p className="code">
          {props.code}
          <Tooltip title="Copy code">
            <ContentCopyIcon className="copy" />
          </Tooltip>
        </p>
      </div>
    </>
  );
};

export default Card;
