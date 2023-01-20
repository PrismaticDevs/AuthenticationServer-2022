import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState("");
  const loginForm = {
    email: email,
    password: pw,
  };
  const submitForm = async (e) => {
    // e.preventDefault();
    await axios
      .post("http://localhost:8080/login", loginForm)
      .then((res) => setMessage(res.data));
  };
  return (
    <>
      <div>
        <div className="App-header">
          <h1>Login</h1>
        </div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />
          <input type="button" value="Login" onClick={() => submitForm()} />
          <p style={{ fontSize: "1.5em", textAlign: "center" }}>{message}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
