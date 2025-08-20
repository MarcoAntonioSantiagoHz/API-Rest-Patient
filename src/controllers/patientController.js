//Logic complete crud

const model = require("../models/patientModel");

// ------------------------
// METHOD POST /patients
// Create new patient
// ------------------------

const insertPatient = (req, res) => {
  const patient = req.body; // {name, lastName, age, gender, symptoms, ...}

  // Assign dates automatically
  const now = new Date().toISOString(); // format: YYYY-MM-DDTHH:mm:ss.sssZ
  patient.created_at = now;
  patient.updated_at = now;
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
      return res.status(400).json({ message: "Duplicate registration" });
    }

    // If no exist register patient 
    model.createPatient(patient, (error, id) => {
      if (error) return res.status(500).json({ error: "Internal Server Error" });

      res.status(201).json({ message: "Patient Create Successful", id });
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





