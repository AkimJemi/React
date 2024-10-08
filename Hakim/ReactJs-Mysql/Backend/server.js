const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const e = require("express");

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
  const sql =
    "SELECT id, pw, name, delete_flag, DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i') AS updated_at FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql =
    "SELECT id, pw, name, delete_flag, DATE_FORMAT(created_at, '%Y-%m-%d') AS created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i') AS updated_at FROM user WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json({ message: "User not found" });
    return res.status(200).json(result[0]);
  });
});
app.post("/user/register", (req, res) => {
  const { id, pw, name } = req.body;
  const sql = "INSERT INTO user (id, pw, name) VALUES (?, ?, ?)";
  db.query(sql, [id, pw, name], (err, result) => {
    if (err) {
      switch (err.sqlState) {
        case "23000":
          return res.status(500).json({ message: "Already exists user ID" });
        default:
          return res.status(500).json({ message: "Fail User Register" });
      }
    }
    return res.status(200).json({ message: "User registered successfully" });
  });
});
app.post("/user/update/delete_flag", (req, res) => {
  console.log(req.body);
  const { id, delete_flag } = req.body;
  const sql = "UPDATE user SET delete_flag = ? WHERE id = ?";
  db.query(sql, [delete_flag, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error occurred" });
    }
    return res
      .status(200)
      .json({ delete_flag: delete_flag, message: "Update successful" });
  });
});
app.post("/user/update/:id", (req, res) => {
  const { id: previous_id } = req.params;
  const { id, pw, name } = req.body;
  const sql = "UPDATE user SET id = ?, pw = ?, name = ? WHERE id = ?";
  db.query(sql, [id, pw, name, previous_id], (err, result) => {
    if (err) return res.status(500).json("Fail User update");
    return res.status(200).json("User update successfully");
  });
});
app.get("/board/select/list", (req, res) => {
  const sql = "SELECT * FROM board";
  db.query(sql, [], (err, result) => {
    if (err) return res.status(500).json("Faill");
    return res.status(200).json(result);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
