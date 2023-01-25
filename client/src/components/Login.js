import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const loginForm = {
    email: email,
    password: pw,
  };
  const submitForm = async (e) => {
    await axios.post("http://localhost:8080/login", loginForm).then((res) => {
      setMessage(res.data);
      if (res.data === "Invalid credentials") {
        setStatus(false);
      } else {
        setStatus(true);
      }
    });
  };
  return (
    <>
      <div>
        <div className="App-header">
          <h1>Login</h1>
        </div>
        <form onSubmit={submitForm}>
          <label>Email</label>
          <input
            type="text"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          />
          <input type="button" value="Login" onClick={() => submitForm()} />
          <p
            className={status ? "good" : "bad"}
            style={{ fontSize: "1.5em", textAlign: "center" }}
          >
            {message}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
