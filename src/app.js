
// centralizes app configuration, middleware, routes, and view/static setup.
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const { swaggerUi, specs, swaggerOptions } = require('./config/swagger');

// Import routes
const patientRoutes = require("./routes/patientRoute");
const patientViewsRoutes = require("./routes/patientViewRoute");

// Configuration Route EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views'); // tus .ejs

// Folder static fields
app.use(express.static(__dirname + '/public'));

// Middleware
app.use(express.json());                 // parse JSON
app.use(express.urlencoded({ extended: true })); // parse URL-encoded data
app.use(methodOverride("_method"));      // support PUT and DELETE in forms

// Rutas
app.use("/", patientViewsRoutes);  // views EJS
app.use("/api", patientRoutes);    // API REST
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerOptions)); //swagger docs

module.exports = app;

