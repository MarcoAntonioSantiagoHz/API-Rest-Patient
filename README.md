# Rest-Api-Patient

**Create, read, update, and delete patients** using Node.js, Express, and SQLite, following a clean architecture.

## 📁 Project Structure MVC

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

# ⚡ HOW COMPILE PROJECT:

## 1 Open Terminal 

## 2 Clone The Repository:

git clone https://github.com/MarcoAntonioSantiagoHz/API-Rest-Patient.git

## 3 Run Command In VS:

npm start

## NOTE: FrontEnd && BackEnd


##  FRONTEND ENDPOINT:
http://localhost:3000/

##  BACKEND ENDPOINTS POSTMAN CRUD:

```
Get-All-Patients:
http://localhost:3000/api/patients

Create-Patient:
http://localhost:3000/api/patients

Get-Patient-ById:
http://localhost:3000/api/patients/9

Update-Patient-ById:
http://localhost:3000/api/patients/9

Delete-Patient-ById:
http://localhost:3000/api/patients/9
```

## NOTES:

### 📦 Dependencies Installed

### Install dependencies:

npm install

### Initialize project (if package.json doesn’t exist yet):

npm init -y

### npm install express

npm install express

### install sqlite

npm install sqlite3

### install swagger ui

npm install swagger-ui-express swagger-jsdoc

### install express-validator

npm install express-validator

### install dependency ejs

npm install method-override

### install EJS, which is the template engine.

npm install ejs
