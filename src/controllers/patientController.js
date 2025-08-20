// Import dependencies necessary receives request/response and calls the service
const { getAllPatients, createPatient } = require("../services/patientService");

// GET /patients
function getPatients(req, res) {
  getAllPatients((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
}

// POST /patients
function insertPatient(req, res) {
  const patientData = req.body;

  createPatient(patientData, (err, newPatient) => { 
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newPatient);
  });
}

module.exports = { getPatients, insertPatient };
