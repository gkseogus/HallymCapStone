const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;
const ROOT_ID = process.env.root_id;
const ROOT_PASSWORD = process.env.root_password;

const db = mysql.createPool({
  host: "localhost",
  user: ROOT_ID,
  password: ROOT_PASSWORD,
  database: "downFile",
});

app.use(cors({ credentials: true, origin: true }));

// api
app.get("/api/fileList", (req, res) => {
  const sqlQuery = "SELECT *FROM filetable;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/fileinsert", (req, res) => {
  var file = req.body.file;

  const sqlQuery = "INSERT INTO filetable (DOWNFILE) VALUES (?);";
  db.query(sqlQuery, [file], (err, result) => {
    res.send(result);
    console.log(result);
    console.log("FILE", file);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
