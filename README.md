REST-Api-Patient
Create, read, update, and delete patients using Node.js, Express, and SQLite, following a clean architecture.

📁 Project Structure
text
API-Rest-Patient/
├── src/
│   ├── config/
│   │   └── database.js          # SQLite connection
│   ├── models/
│   │   └── patientModel.js      # SQL queries
│   ├── controllers/
│   │   └── patientController.js # Calls the model
│   ├── routes/
│   │   └── patientRoute.js      # REST endpoints
│   ├── public/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── main.js              # JS to consume the API
│   └── app.js                   # Express configuration
├── database.sqlite              # SQLite file (optional, with sample data)
├── package.json
└── server.js                    # Entry point
⚡ Installation
Clone the repository:


git clone https://github.com/MarcoAntonioSantiagoHz/API-Rest-Patient.git
Navigate to the project directory:


cd API-Rest-Patient
Install dependencies:


npm install
Install required packages (if not already installed):


npm install express sqlite3 swagger-ui-express swagger-jsdoc
Start the server:


node server.js