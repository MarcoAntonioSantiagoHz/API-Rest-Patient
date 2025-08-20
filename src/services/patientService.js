
// They contain the business logic (validations, filtering, formatting, etc.)
const Patient = require("../models/patientModel");
const PatientController = require("../controllers/patientController");
const MESSAGES = require("../utils/messages");


// Logic  to obtain all patients with active status
function getAllPatients(callback) {
    Patient.getAllPatients((err, patients) => { 
        if (err) return callback(new Error(MESSAGES.ERROR_PATIENT));
        if (!patients || patients.length === 0) return callback(new Error(MESSAGES.PATIENT_NOT_FOUND));
        const activePatients = patients.filter(p => p.status === 'active');
        callback(null, activePatients);
    });
}

// Logic  insert patient
function createPatient(patientData, callback) {
  if (!patientData.name || !patientData.age) return callback(new Error(MESSAGES.INVALID_DATA));
  Patient.insertPatient(patientData, (err, newPatient) => {
    if (err) return callback(new Error(MESSAGES.ERROR_PATIENT));
    callback(null, newPatient);
  });
}

module.exports = { getAllPatients, createPatient };
