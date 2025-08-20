// Creation tables and connection database
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const MESSAGES = require("../utils/messages");

// Route created database 
const db_name = path.join(__dirname, "../../database/database.sqlite");

// Created connection
const db = new sqlite3.Database(db_name, (err) => {
  if (err) console.error(MESSAGES.DB_ERROR_CONNECTION); //<--Import message if error
  else console.log(MESSAGES.DB_SUCCESSFUL_CONNECTION); //<--Import message if successful
});

// Created table patient
db.run(
  `CREATE TABLE IF NOT EXISTS patient (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    lastName TEXT NOT NULL,
    age INTEGER,
    gender TEXT,
    symptoms TEXT,
    status TEXT,
    created_at TEXT,
    updated_at TEXT
  )`,
  (err) => {
    if (err) console.error(err.message);
    else console.log("Table 'patient' ready");
  }
);

module.exports = db;
