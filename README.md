### REST-Api-Patient
Create, read, update, and delete patients using Node.js, Express, and SQLite, following a clean architecture.

### Notes
Backend API to manage patients with CRUD operations (Create, Read, Update, Delete).

📁 Project Structure:

API-Rest-Patient/
  src/
    config/
      database.js           # Conexión a SQLite
    models/
      patientModel.js       # Consultas SQL
    controllers/
      patientController.js  # Lógica que llama al modelo
    routes/
      patientRoute.js       # Endpoints REST
    public/
      index.html
      style.css
      main.js               # JS para consumir la API
    app.js                  # Configuración de Express
  database.sqlite           # Archivo SQLite (opcional, con datos de ejemplo)
  package.json
  server.js                 # Punto de entrada de la aplicación


## ⚡ Installation

# 1 Clone the repository:
git clone https://github.com/MarcoAntonioSantiagoHz/API-Rest-Patient.git

# 2 Install dependencies:
npm install

# 3 Initialize project (if package.json doesn’t exist yet):
npm init -y

# 4 npm install express
npm install express

# 5 install sqlite
npm install sqlite3

# 6 install swagger ui
npm install swagger-ui-express swagger-jsdoc


## Compile project