import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "./components/Modal";

const Layout = () => {
  const [token, setToken] = useState({});
  const [modal, setModal] = useState(false);
  const getToken = async () => {
    await axios.get("/token").then((res) => {
      setToken(res.data);
      console.log(res.data.name);
    });
  };
  const logout = async () => {
    setModal(true);
    await getToken();
  };
  const out = async () => {
    await axios.get("/logout");
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
              <button className="logout logout-btn" onClick={logout}>
                <span title="Logout">
                  <LogoutIcon />
                </span>
              </button>
              <p className="logout text">User: {token.name}</p>
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
      {modal ? (
        <Modal message="Are you sure you want to log out?" confirm={out} />
      ) : (
        <></>
      )}

      <Outlet />
    </>
  );
};

export default Layout;
