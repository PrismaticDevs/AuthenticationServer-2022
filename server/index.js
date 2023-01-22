const dotenv = require("dotenv").config({ path: "./.env" });
const express = require("express");
const mysql = require("mysql2");
const PORT = 8080;
const cors = require("cors");
const cp = require("cookie-parser");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cp());

connection.connect(() => console.log("connected to db"));

let password;
app.post("/login", (req, res) => {
  const email = req.body.email;
  password = req.body.password;
  connection.query(
    `select * from users  where email=? and password=?`,
    [email, password],
    (err, results) => {
      if (err) throw err;
      try {
        const payload = {
          email: req.body.email,
          name: results[0].name,
        };
        const token = jwt.sign(payload, password);
        res
          .cookie("token", token, {
            httpOnly: true,
          })
          .send(results[0].name + " successfully logged in.");
      } catch (error) {
        res.send("Invalid credentials");
      }
    }
  );
});

app.get("/token", (req, res) => {
  const token = req.cookies.token;
  const payload = jwt.verify(token, password);
  res.json(payload);
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Successfully logged out");
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
