
//Create to model patient


const db = require("../config/connectionDb"); // CORRECTO

// Función para obtener todos los pacientes
function getAllPatients(callback) {
  db.all("SELECT * FROM patient", [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
}

module.exports = { getAllPatients };

