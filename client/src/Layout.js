import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

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
          {token.name ? (
            <li className="logout">
              <p className="login text mr">User: {token.name}</p>
              <button className="logout" onClick={logout}>
                <span title="Logout">
                  <LogoutIcon />
                </span>
              </button>
            </li>
          ) : (
            <li className="login">
              <NavLink className="login" to="/login">
                <span title="Login">
                  <LoginIcon className="login" />
                </span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
