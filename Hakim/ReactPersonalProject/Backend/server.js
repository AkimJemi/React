const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "parent",
});

app.get("/", (re, res) => {
  return res.json("from backend side");
});

app.get("/users", (req, res) => {
  const sql = "select * from old_table";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(8081, () => {
  console.log("listening");
});
