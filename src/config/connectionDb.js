// Creation tables and connection database
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Ruta de la base de datos
const db_name = path.join(__dirname, "../../database/database.sqlite");

// Crear la conexión
const db = new sqlite3.Database(db_name, (err) => {
  if (err) console.error(err.message);
  else console.log("Connection successful with database");
});

// Crear tabla patient
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
