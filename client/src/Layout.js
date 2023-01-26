import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Layout = () => {
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
    getToken();
    window.location.href = "/login";
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li style={{ display: "flex", float: "right" }}>
            <p className="">User: {token.name}</p>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
