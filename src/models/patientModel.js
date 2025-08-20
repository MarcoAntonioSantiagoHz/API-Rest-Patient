// import necessary connectionDb
const db = require("../config/connectionDb");

class Patient {

  //Create query get patients
  getAllPatients(callback) { 
    const sql = "SELECT name, lastName, age, gender, symptoms, status, created_at, updated_at FROM patient";
    db.all(sql, [], (err, rows) => {
      if (err) return callback(err);
      callback(null, rows);
    });
  }

  //Create query insert patient
  insertPatient(patient, callback) { 
    const { name, lastName, age, gender, symptoms, status, created_at, updated_at } = patient;
    const sql = `
      INSERT INTO patient 
      (name, lastName, age, gender, symptoms, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(sql, [name, lastName, age, gender, symptoms, status, created_at, updated_at], function (err) {
      if (err) return callback(err);
      callback(null, { id: this.lastID, ...patient });
    });
  }
}

module.exports = Patient;
