const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "react_hakim",
});

app.get("/", (re, res) => {
  return res.json("from backend side");
});

app.get("/users", (req, res) => {
  const sql = "select * from user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/register", (req, res) => {
  console.log(req.body);
  const { id, pw, name } = req.body;
  const sql = "INSERT INTO user (id, pw, name) VALUES (?, ?, ?)";
  db.query(sql, [id, pw, name], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User registered successfully");
  });
});

app.listen(8081, () => {
  console.log("listening");
});
