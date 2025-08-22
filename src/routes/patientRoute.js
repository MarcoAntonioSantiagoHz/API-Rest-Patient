const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const { createPatientValidator } = require("../validators/patientValidator");

// POST /patients con validations
router.post("/create/patient", createPatientValidator, patientController.insertPatient);

// ROUTES
router.get("/patients", patientController.fetchAllPatients); // <- get all patients
router.get("/patients/:id", patientController.getPatientById); // <- get by id patient
router.put("/patients/:id", patientController.updatePatient); // <- put patient :id 
router.delete("/patients/:id", patientController.deletePatient); // <- delete patient

module.exports = router;
