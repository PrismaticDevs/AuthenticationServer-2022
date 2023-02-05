import React from "react";
import Card from "../components/Card";

const Project1 = () => {
  const code = (
    <>
      <h2>HTML</h2>
      <p>&lt;p&gt; Hello World! &lt;/p&gt;</p>
      <h1>&lt;div&gt; Hello World! &lt;/div&gt;</h1>
    </>
  );
  return (
    <>
      <Card className="code" code={code} />
    </>
  );
};

export default Project1;
