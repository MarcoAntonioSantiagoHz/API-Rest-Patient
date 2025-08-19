const express = require("express");
const router = express.Router();
const { fetchPatients } = require("../controllers/patientController");

router.get("/patients", fetchPatients);

module.exports = router;
