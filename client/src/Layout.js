import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

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
                    <NavLink to="/">HTML & CSS</NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </li>
            {token.name ? (
              <>
                <button className="logout logout-btn" onClick={logout}>
                  <span title="Logout">
                    <LogoutIcon />
                  </span>
                </button>
                <p className="logout text">User: {token.name}</p>
              </>
            ) : (
              <NavLink className="login" to="/auth">
                <span title="Login">
                  <LoginIcon className="login" />
                </span>
              </NavLink>
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
