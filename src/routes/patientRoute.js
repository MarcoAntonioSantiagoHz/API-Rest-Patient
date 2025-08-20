const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");


//ROUTES
router.get("/patients", patientController.fetchAllPatients); //<-get all patients
router.get("/patients/:id", patientController.getPatientById); //<- get by id patient
router.post("/patients", patientController.insertPatient); //<- post patient

module.exports = router;
