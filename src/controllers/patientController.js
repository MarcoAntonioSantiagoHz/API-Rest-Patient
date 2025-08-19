const { getAllPatients } = require("../models/patientModel");

function fetchPatients(req, res) {
  getAllPatients((err, data) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(data);
  });
}

module.exports = { fetchPatients };
