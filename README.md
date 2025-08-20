## REST-Api-Patient
Create, read, update, and delete patients using Node.js, Express, and SQLite, following a clean architecture. MVC

## 📁 Notes
Backend API to manage patients with CRUD operations (Create, Read, Update, Delete).

```
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
```
## ⚡ Installation

## 1 Clone the repository:
git clone https://github.com/MarcoAntonioSantiagoHz/API-Rest-Patient.git

## 2 Install dependencies:
npm install

## 3 Initialize project (if package.json doesn’t exist yet):
npm init -y

## 4 npm install express
npm install express

## 5 install sqlite
npm install sqlite3

## 6 install swagger ui
npm install swagger-ui-express swagger-jsdoc

## Compile project