# REST-Api-Patient to **create, read, update, and delete patients** using Node.js, Express, and SQLite, following a clean architecture.

## 📁 Project Structure

API-Rest-Patient/
│── src/
│ ├── config/
│ │ └── database.js # SQLite connection
│ ├── models/
│ │ └── userModel.js # SQL queries
│ ├── services/
│ │ └── userService.js # Business logic layer
│ ├── controllers/
│ │ └── userController.js # Calls the service instead of the model directly
│ ├── routes/
│ │ └── userRoutes.js # REST endpoints
│ ├── public/
│ │ ├── index.html
│ │ ├── style.css
│ │ └── main.js # JS to consume the API
│ └── app.js # Express configuration
│
├── database.sqlite # SQLite file (optional, with sample data)
├── package.json
└── index.js # Entry point

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




