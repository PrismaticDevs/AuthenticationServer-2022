import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [token, setToken] = useState({});
  const getToken = async () => {
    await axios.get("/token").then((res) => {
      setToken(res.data);
      console.log(token.name);
    });
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <div className="App-header">
        <h1>Contact</h1>
        <p></p>
      </div>
      <p className="fixed">User: {token.name}</p>
    </>
  );
};

export default Contact;
