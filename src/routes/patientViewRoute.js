const express = require("express");
const router = express.Router();

// List of patients
router.get("/", async (req, res) => {
  const response = await fetch("http://localhost:3000/api/patients");
  const patients = await response.json();
  res.render("index", { patients }); // <-- route views/index.ejs
});

// Form create patient
router.get("/create", (req, res) => {
  res.render("create"); // <--  <-- route views/create.ejs
});

//  Form edit patient
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`http://localhost:3000/api/patients/${id}`);
  const patient = await response.json();
  res.render("edit", { patient }); // <-- route views/edit.js
});

module.exports = router;
