//Logic complete crud

const model = require("../models/patientModel");

// ------------------------
// METHOD POST /patients
// Create new patient
// ------------------------

const insertPatient = (req, res) => {
  const { name, lastName, age, gender, symptoms, status } = req.body;

  // Validate required fields, Avoid empty fields or example values like "string" or age 0 in this case
  const invalidStrings = ["string"];
  if (
    !name?.trim() || invalidStrings.includes(name.trim().toLowerCase()) ||
    !lastName?.trim() || invalidStrings.includes(lastName.trim().toLowerCase()) ||
    typeof age !== "number" || age === 0 ||
    !gender?.trim() || invalidStrings.includes(gender.trim().toLowerCase()) ||
    !symptoms?.trim() || invalidStrings.includes(symptoms.trim().toLowerCase()) ||
    !status?.trim() || invalidStrings.includes(status.trim().toLowerCase())
  ) {
    return res.status(400).json({ message: "Datos inválidos o de ejemplo" });
  }

  // CREATE PATIENT OBJECT
  const patient = {
    name: name.trim(),
    lastName: lastName.trim(), //<- .trim() removes spaces at the beginning and end of a text. For example, “  Maria  ” becomes “Maria”.
    age, //<- age is a number, not text (string).
    gender: gender.trim(),
    symptoms: symptoms.trim(),
    status: status.trim(),
    created_at: new Date().toISOString(), // <- Add automatic timestamps for created_at 
    updated_at: new Date().toISOString()  // <- Add automatic timestamps for  updated_at
  };

  // section check duplicate 
  model.getAllPatients((error, patients) => {
    if (error) return res.status(500).json({ error: "Internal Server Error" });

    // Compare fields case-insensitively no duplicates
    const exists = patients.some(
      p =>
        p.name.toLowerCase() === patient.name.toLowerCase() &&
        p.lastName.toLowerCase() === patient.lastName.toLowerCase() &&
        p.age === patient.age &&
        p.gender.toLowerCase() === patient.gender.toLowerCase() &&
        p.symptoms.toLowerCase() === patient.symptoms.toLowerCase()
    );
    //Message duplicate entry
    if (exists) return res.status(400).json({ message: "Register duplicate" });

    // Here call model for insert patient
    model.createPatient(patient, (error, id) => {
      if (error) return res.status(500).json({ error: "Internal Server Error" });

      res.status(201).json({ message: "Paciente creado exitosamente", id });
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





