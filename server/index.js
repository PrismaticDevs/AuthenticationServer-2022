const dotenv = require("dotenv").config({ path: "./.env" });
const express = require("express");
const mysql = require("mysql2");
const PORT = 8080;
const cors = require("cors");
const cp = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
let hash;
app.post("/login", async (req, res) => {
  const email = req.body.email;
  connection.query(
    `select password from users where email="${email}"`,
    (err, results) => {
      if (err) throw err;
      hash = results[0].password;
    }
  );
  connection.query(
    `select * from users  where email=? and password=?`,
    [email, hash],
    (err, results) => {
      if (err) throw err;
      try {
        const payload = {
          email: req.body.email,
          name: results[0].name,
        };
        const token = jwt.sign(payload, hash);
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
  const payload = jwt.verify(token, hash);
  res.json(payload);
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Successfully logged out");
});

app.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  connection.query(
    `select * from users where email=?`,
    [email],
    (err, results) => {
      if (err) throw err;
      if (results.length !== 0) {
        res.send(`${email} already has an account`);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            connection.query(
              `insert into users (name, email, password) values (?, ?, ?)`,
              [name, email, hash],
              (err) => {
                if (err) throw err;
                res.send(`Successfully registered ${name}`);
              }
            );
          });
        });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
