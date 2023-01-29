import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Login = () => {
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
    username: username,
    email: registrationEmail,
    password: registrationPassword,
  };
  const submitLoginForm = async (e) => {
    console.log("hi");
    e.preventDefault();
    await axios.post("/login", loginForm).then((res) => {
      setLoginMessage(res.data);
      if (res.data === "Invalid credentials") {
        setStatus(false);
      } else {
        setStatus(true);
      }
    });
    const goHome = () => (window.location.href = "/");
    setTimeout(goHome, 3000);
  };
  const submitRegistrationForm = async (e) => {
    await axios.post("/register", registrationForm).then((res) => {
      setRegistrationMessage(res.data);
      if (res.data === `${registrationEmail} already has an account`) {
        setStatus(false);
      } else {
        setStatus(true);
        const goHome = () => (window.location.href = "/");
        setTimeout(goHome, 3000);
      }
    });
  };
  return (
    <>
      <div className="form-container">
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
          />
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <input type="button" value="Login" onClick={submitLoginForm} />
          <p
            className={status ? "good" : "bad"}
            style={{ fontSize: "1.5em", textAlign: "center" }}
          >
            {loginMessage}
          </p>
        </form>
        <form autoComplete="off" onSubmit={submitRegistrationForm}>
          <div className="App-header">
            <h1>Register</h1>
          </div>
          <label>Name</label>
          <input
            type="text"
            required
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            required
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => setRegistrationEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setRegistrationPassword(e.target.value)}
          />
          <input type="button" value="Login" onClick={submitRegistrationForm} />
          <p
            className={status ? "good" : "bad"}
            style={{ fontSize: "1.5em", textAlign: "center" }}
          >
            {registrationMessage}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
