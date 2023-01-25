import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [token, setToken] = useState({});
  const getToken = async () => {
    await axios.get("/token").then((res) => {
      setToken(res.data);
      console.log(res.data.name);
    });
  };
  const logout = async () => {
    if (window.confirm("Are you sure that you want to log out?")) {
      await axios.get("/logout");
    } else {
      return;
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <div className="App-header">
        <h1>Home</h1>
      </div>
      <p className="fixed">User: {token.name}</p>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Home;
