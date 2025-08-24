# Rest-Api-Patient

**Create, read, update, and delete patients** using Node.js, Express, and SQLite, following a clean architecture.

## 📁 Project Structure MVC

```
API-Rest-Patient/
├── database/
│   └── database.sqlite          # SQLite database (optional, can include sample data)
├── src/
│   ├── config/
│   │   └── swagger.js           # Swagger configuration
│
│   ├── controllers/
│   │   └── patientController.js # CRUD logic
│
│   ├── models/
│   │   └── patientModel.js      # Database queries
│
│   ├── public/
│   │   ├── index.ejs            # Main view
│   │   ├── create.ejs           # Form to create patient
│   │   ├── edit.ejs             # Form to edit patient
│   │   ├── style.css            # Styles
│   │   └── logic.js             # Frontend JS to consume API
│
│   ├── routes/
│   │   ├── patientRoute.js      # REST API routes
│   │   └── patientViewRoute.js  # Views routes (EJS)
│
│   ├── utils/
│   │   └── messages.js          # Messages for responses and DB
│
│   ├── validators/
│   │   └── patientValidator.js  # Request validation
│
│   └── app.js                   # Express app configuration

├── package.json                 # Node dependencies
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
http://localhost:3000/api/create/patient

Get-Patient-ById:
http://localhost:3000/api/patients/{id}

Update-Patient-ById:
http://localhost:3000/api/patients/{id}

Delete-Patient-ById:
http://localhost:3000/api/patients/{id}
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
