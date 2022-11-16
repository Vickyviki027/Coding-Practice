const express = require("express");
const app = express();

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const path = require("path");
const dbPath = path.join(__dirname, "moviesData.db");

app.use(express.json());
let db = null;

const initializeDbAndServer = async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });
  app.listen(3000, () => {
    console.log("Server Running at http://localhost:5000/");
  });
  //   catch (error) {
  //     console.log(`BD Error: ${error.message}`);
  //     process.exit(1);
  //   }
};

initializeDbAndServer();
