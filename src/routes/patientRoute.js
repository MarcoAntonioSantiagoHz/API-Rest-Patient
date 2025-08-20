const express = require("express");
const router = express.Router();

// Import controller
const { getPatients, insertPatient } = require("../controllers/patientController");
 
// GET /api/patients
router.get("/patients", getPatients);

// POST /api/patients
router.post("/patients", insertPatient);

module.exports = router;
