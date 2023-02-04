import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import "./Layout.css";
import "./components/css/sidebar.css";

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
    window.location.href = "/auth";
  };
  useEffect(() => {
    getToken();
  }, []);
  const [showHTML, setShowHTML] = useState(false);
  const toggleHTML = () => setShowHTML(!showHTML);
  const [showJS, setShowJS] = useState(false);
  const toggleJS = () => setShowJS(!showJS);
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <button
                className={showHTML ? "show" : "hide"}
                onClick={toggleHTML}
              >
                HTML & CSS
                {showHTML ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
              </button>
              {showHTML ? (
                <>
                  <li>
                    <NavLink to="/webdesign">Web Design 101</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </li>
            <li>
              <button className={showJS ? "show" : "hide"} onClick={toggleJS}>
                JavaScript
                {showJS ? <ChevronRightIcon /> : <KeyboardArrowDownIcon />}
              </button>
              {showJS ? (
                <>
                  <li>
                    <NavLink to="/javascript">JavaScript 101</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </li>
            {token.name ? (
              <div className="flex">
                <p className="text">User: {token.name}</p>
                <NavLink className="logout" onClick={logout}>
                  <span title="Logout">
                    <LogoutIcon className="logout" />
                  </span>
                </NavLink>
              </div>
            ) : (
              <div className="flex">
                <NavLink className="login" to="/auth">
                  <span title="Login">
                    <LoginIcon />
                  </span>
                </NavLink>
              </div>
            )}
          </ul>
          <Sidebar />
        </nav>
      </div>
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
