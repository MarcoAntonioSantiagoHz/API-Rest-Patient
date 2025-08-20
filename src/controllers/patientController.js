//Logic complete crud

const model = require("../models/patientModel");

// ------------------------
// METHOD POST /patients
// Create new patient
// ------------------------
const insertPatient = (req, res) => {
  const patient = req.body; // {name, lastName, age, gender, symptoms, ...}

  // Check if a patient with the same details already exists.
  model.getAllPatients((error, patients) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });

    //Constant compare exist
    const exists = patients.some(
      p =>
        p.name === patient.name &&
        p.lastName === patient.lastName &&
        p.age === patient.age &&
        p.gender === patient.gender &&
        p.symptoms === patient.symptoms
    );

    if (exists) {
      return res.status(400).json({ message: "Registro duplicado" });
    }

    // If no exist register patient 
    model.createPatient(patient, (error, id) => {
      if (error) return res.status(500).json({ error: "Internal Server Error" });

      res.status(201).json({ message: "Paciente creado", id });
    });
  });
};

// ------------------------
// METHOD GET /patients
// Get all patients
// ------------------------
const fetchAllPatients = (req, res) => {
  model.getAllPatients((error, patients) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });

    res.json(patients);
  });
};

// ------------------------
// GET /patients/:id
// Get patient By ID
// ------------------------
const getPatientById = (req, res) => {
  const { id } = req.params;

  model.getById(id, (error, patient) => {
    if (error) return res.status(500).json({ message: "Internal Server Error" });
    if (!patient) return res.status(404).json({ message: "Paciente no encontrado" });

    res.json(patient);
  });
};

module.exports = {
  insertPatient,
  fetchAllPatients,
  getPatientById
};










