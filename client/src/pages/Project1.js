import React from "react";
import Card from "../components/Card";

const Project1 = () => {
  const code = (
    <>
      <h2>HTML</h2>
      <p>&lt;p&gt; Hello World! &lt;/p&gt;</p>
      <h1>&lt;div&gt; Hello World! &lt;/div&gt;</h1>
      <p>const dogs = ['corgis', 'dobermans', 'huskies']</p>
      <p>for (let i = 0; i &lt; dogs.length; i++;)</p>
      <p>"I love " dogs[i]</p>
      <p>Output:</p>
      <p>I love Corgis</p>
      <p>I love dobermans</p>
      <p>I love huskies</p>
    </>
  );
  return (
    <>
      <Card className="code" code={code} />
    </>
  );
};

export default Project1;
