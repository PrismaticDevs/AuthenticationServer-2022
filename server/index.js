const dotenv = require("dotenv").config({ path: "./.env" });
const express = require("express");
const mysql = require("mysql2");
const PORT = 8080;

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
});

const app = express();

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
      res.send(results[0].email + " successfully logged in.");
    }
  );
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
