const env = require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const PORT = 8080;
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

const getUsers = "select * from users";

app.get("/", (req, res) => {
  connection.query(getUsers, (err, results) => {
    if (err) throw err;
    results;
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
