import React from "react";
import ufo from "../ufo.png";

const NoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div>
        <img style={{ height: 100 }} src={ufo} alt="ufo" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className="notFound">404</h1>
          <h3>Page Not Found</h3>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
