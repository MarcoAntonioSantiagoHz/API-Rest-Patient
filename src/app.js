const express = require("express");
const app = express();
const patientRoutes = require("./routes/patientRoute");

app.use(express.json());
app.use("/api", patientRoutes);

module.exports = app;
