const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
const mariadb = require("mariadb");
const PORT = process.env.port || 8000;
const ROOT_ID = process.env.root_id;
const ROOT_PASSWORD = process.env.root_password;
const bodyParser = require("body-parser");

const db = mariadb.createPool({
  host: "localhost",
  user: ROOT_ID,
  password: ROOT_PASSWORD,
  database: "downFile",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: true }));

// api
app.get("/api/list", (req, res) => {
  const sqlQuery = "SELECT *FROM FILETABLE;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  console.log(req.body);
  var file = req.body.file;

  const sqlQuery = "INSERT INTO FILETABLE (FILENAME) VALUES (?);";
  db.query(sqlQuery, [file], (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
