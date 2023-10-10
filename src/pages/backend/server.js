//Module imports
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");

//Enabling express
const app = express();

//Middleware
app.use(cors("http://localhost:3000/project-library"));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/api/projects", (req, res) => {
  pool.query(
    "SELECT id, description, year_level, animation, images FROM project_database.project_database;",
    function (err, result) {
      if (err) return console.log(err);
      console.log(result);
      res.send(result);
    }
  );
});

//Endpoints
const PORT = 4000;
app
  .listen(PORT, () => console.log(`It's working at ${PORT}`))
  .on("error", (error) => console.log(error));
