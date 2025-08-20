const express = require("express");
const app = express();

// Import routes
const patientRoutes = require("./routes/patientRoute");

// Middleware para parsear JSON
app.use(express.json());

// Prefijo /api para todas las rutas
app.use("/api", patientRoutes);


module.exports = app;
