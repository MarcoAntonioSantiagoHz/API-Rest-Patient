//Logic complete crud

const model = require("../models/patientModel");

// ------------------------
// METHOD POST /patients
// Create new patient
// // ------------------------


const insertPatient = (req, res) => {
  const { name, lastName, age, gender, symptoms, status } = req.body;

  // Create patient object with the received data
  const patient = {
    // The .trim() removes spaces at the beginning and end of a text. For example, “  Maria  ” becomes “Maria”.
    name: name.trim(),
    lastName: lastName.trim(),
    age, //<- age is a number, not text (string).
    gender: gender.trim(),
    symptoms: symptoms.trim(),
    status: status.trim(),
    created_at: new Date().toISOString(), // <- Add automatic timestamps for created_at 
    updated_at: new Date().toISOString() // <- Add automatic timestamps for  updated_at
  };

  // section check duplicate 
  // Get object patient verify no duplicates
  model.getAllPatients((error, patients) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });

    // Check for duplicates by comparing only relevant fields
    const exists = patients.some(p =>
      // the toLowerCase() && Check if the patient already exists by comparing all fields (text without case sensitivity)
      p.name.toLowerCase() === patient.name.toLowerCase() &&
      p.lastName.toLowerCase() === patient.lastName.toLowerCase() &&
      // p.age === patient.age &&
      p.age === Number(patient.age) &&        // <-- convert to number to verify

      p.gender.toLowerCase() === patient.gender.toLowerCase() &&
      p.symptoms.toLowerCase() === patient.symptoms.toLowerCase()
    );

    if (exists) {
      return res.status(400).json({ message: "Register duplicate" });
    }

    // Post insert patient if no exist duplicates
    model.createPatient(patient, (error, id) => {
      if (error) return res.status(500).json({ error: "Internal Server Error" });

      res.status(201).json({ message: "Patient created Successful", id });
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

    if (patients.length === 0) {
      return res.json({ message: "Patients no registers found for moment", data: [] });
    }

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
    if (!patient) return res.status(404).json({ message: "Patient Not Exist! :(" });

    res.json(patient);
  });
};


// ------------------------
// METHOD UPDATE / update patients
// ------------------------

// ------------------------
// PUT /patients/:id - Update patient
// ------------------------

const updatePatient = (req, res) => {
  const { id } = req.params;
  const { name, lastName, age, gender, symptoms, status } = req.body;

  // makes the update date automatic
  const updated_at = new Date().toISOString();

  const patient = {
    name,
    lastName,
    age,
    gender,
    symptoms,
    status,
    updated_at
  };

  model.updatePatient(id, patient, (error, changes) => {
    if (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (changes === 0) {
      return res.status(404).json({ message: "Patient Not Found" });
    }

    res.status(200).json({ message: "Patient updated successfully", id });
  });
};



// ------------------------
// METHOD DELETE / delete patient
// ------------------------

// Eliminar paciente
const deletePatient = (req, res) => {
  const { id } = req.params;
  model.deletePatient(id, (error, changes) => {
    if (error) return res.status(500).json({ message: "Internal Server Error" });
    if (changes === 0) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json({ message: "Patient deleted successfully", id });
  });
};

module.exports = {
  insertPatient,
  fetchAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
};





