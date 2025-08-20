const express = require("express");
const app = express();
const { swaggerUi, specs, swaggerOptions } = require('./config/swagger');
const patientRoutes = require("./routes/patientRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirigir la raíz a Swagger UI
app.get("/", (req, res) => {
    res.redirect("/api-docs");
});

// Swagger UI (solo una vez)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions));

// Rutas de la API
app.use("/api", patientRoutes);

module.exports = app;


