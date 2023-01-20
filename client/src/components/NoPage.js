import React from "react";

const NoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h3 className="notFound">Page Not Found</h3>
    </div>
  );
};

export default NoPage;
