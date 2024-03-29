import React, { useState } from "react";
import axios from "axios";
import "./css/auth.css";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [status, setStatus] = useState(false);
  const loginForm = {
    email: loginEmail,
    password: loginPassword,
  };
  const registrationForm = {
    name: username,
    email: registrationEmail,
    password: registrationPassword,
  };
  const submitLoginForm = async (e) => {
    console.log("hi");
    await axios.post("/login", loginForm).then((res) => {
      setLoginMessage(res.data);
      if (res.data === "Invalid credentials") {
        setStatus(false);
        setRegistrationMessage("");
      } else {
        setStatus(true);
        const goHome = () => (window.location.href = "/");
        setRegistrationMessage("");
        setTimeout(goHome, 3000);
      }
    });
  };
  const submitRegistrationForm = async (e) => {
    await axios.post("/register", registrationForm).then((res) => {
      setRegistrationMessage(res.data);
      if (res.data === `${registrationEmail} already has an account`) {
        setStatus(false);
        registrationMessage("");
      } else if (res.data === "Must use a valid email address") {
        setStatus(false);
        setLoginMessage("");
      } else if (res.data === "Password must be at least 8 characters") {
        setStatus(false);
        setLoginMessage("");
      } else {
        setStatus(true);
        axios.post("/login", registrationForm);
        const goHome = () => (window.location.href = "/");
        setTimeout(goHome, 3000);
        setLoginMessage("");
      }
    });
  };

  return (
    <>
      <div className="form-container">
        <div className="subForm">
          <form autoComplete="off" onSubmit={submitLoginForm}>
            <div className="App-header">
              <h1>Login</h1>
            </div>
            <label>Email</label>
            <input
              type="text"
              required
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setLoginEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitLoginForm();
                }
              }}
            />
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setLoginPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitLoginForm();
                }
              }}
            />
            <input type="button" value="Login" onClick={submitLoginForm} />
          </form>
          <p
            className={status ? "good" : "bad"}
            style={{ fontSize: "1.5em", textAlign: "center" }}
          >
            {loginMessage}
          </p>
        </div>
        <div className="subForm">
          <form autoComplete="off" onSubmit={submitRegistrationForm}>
            <div className="App-header">
              <h1>Register</h1>
            </div>
            <label>Username</label>
            <input
              type="text"
              required
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitRegistrationForm();
                }
              }}
            />
            <label>Email</label>
            <input
              type="text"
              required
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setRegistrationEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitRegistrationForm();
                }
              }}
            />
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setRegistrationPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitRegistrationForm();
                }
              }}
            />
            <input
              type="button"
              value="Login"
              onClick={submitRegistrationForm}
            />
          </form>
          <p
            className={status ? "good" : "bad"}
            style={{
              fontSize: "1.5em",
              textAlign: "center",
            }}
          >
            {registrationMessage}
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
