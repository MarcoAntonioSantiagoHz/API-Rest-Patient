// import necessary connectionDb
const db = require("../models/sqlite");


//Creation  all query's for database


// Query to insert insert patient
const createPatient = (patient, callback) => {
  const sql = `INSERT INTO patients 
               (name, lastName, age, gender, symptoms, status, created_at, updated_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [
    patient.name,
    patient.lastName,
    patient.age,
    patient.gender,
    patient.symptoms,
    patient.status,
    patient.created_at,
    patient.updated_at
  ], function (error) {
    if (error) return callback(error);
    callback(null, this.lastID);
  });
};





// Query get patients
const getAllPatients = (callback) => {
  const sql = `SELECT * FROM patients`;

  db.all(sql, (error, rows) => {
    if (error) {
      return callback(error);
    }

    callback(null, rows);
  });
};

// Query get by id
const getById = (id, callback) => {
  const sql = `SELECT * FROM patients WHERE id = ?`;

  db.get(sql, [id], (error, row) => {
    if (error) {
      return callback(error);
    }
    callback(null, row);
  });
};


// Query Update 
const updatePatient = (id, patient, callback) => {
  const sql = `UPDATE patients 
  SET name = ?, 
  lastName = ?, 
  age = ?, 
  gender = ?, 
  symptoms = ?, 
  status = ?, 
  updated_at = ?   
  WHERE id = ?`;
  
  db.run(sql, [
    patient.name,
    patient.lastName,
    patient.age,
    patient.gender,
    patient.symptoms,
    patient.status,
    patient.updated_at, 
    id
  ], function (error) {
    if (error) {
      return callback(error);
    }
    callback(null, this.changes);
  });
};

// Query Delete register patient
// Eliminar paciente
const deletePatient = (id, callback) => {
  const sql = `DELETE FROM patients WHERE id = ?`;
  db.run(sql, [id], function (error) {
    if (error) return callback(error);
    callback(null, this.changes);
  });
};

module.exports = {
  createPatient,
  getAllPatients,
  getById,
  updatePatient,
  deletePatient
};
