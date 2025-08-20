
const express = require("express");
const app = express();
const { swaggerUi, specs } = require("./config/swagger");

const patientRoutes = require("./routes/patientRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirigir la raíz a Swagger UI
app.get("/", (req, res) => {
    res.redirect("/api-docs");
});

// Rutas de la API
app.use("/api", patientRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;



