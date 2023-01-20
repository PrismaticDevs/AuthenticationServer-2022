const dotenv = require("dotenv").config({ path: "./.env" });
const express = require("express");
const mysql = require("mysql2");
const PORT = 8080;
const cors = require("cors");

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

connection.connect(() => console.log("connected to db"));

app.get("/", (req, res) => {
  res.json("helloworld");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    `select * from users  where email=? and password=?`,
    [email, password],
    (err, results) => {
      if (err) throw err;
      try {
        console.log("begin login");
        res.send(results[0].name + " successfully logged in.");
        console.log("login complete");
      } catch (error) {
        res.send("Invalid credentials");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
