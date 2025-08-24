// Import 'path' module to handle file paths
const path = require("path");
const sqlite = require("sqlite3");
// Import sqlite3 module to interact with SQLite database
const messages = require("../utils/messages");

// Create a new SQLite database connection
const db = new sqlite.Database(
    // Resolve the database file path
    path.resolve(__dirname, "../../database/database.sqlite"),
    (error) => {
        if (error) {
            //  Log error if connection fails
            return console.error(error);
        }

        // SQL statement to create the 'patients' table if it doesn't exist
        const sql = `CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,  
            name VARCHAR(100) NOT NULL,         
            lastName VARCHAR(100) NOT NULL,    
            age INTEGER,                 
            gender TEXT,                    
            symptoms TEXT,                 
            status TEXT,                          
            created_at TEXT,                
            updated_at TEXT        
        )`;

        // Execute the SQL statement to ensure the table exists
        db.run(sql, (error) => {
            if (error) {
                return console.error(messages.DB_ERROR_CONNECTION);
            }
            console.log(messages.DB_SUCCESSFUL_CONNECTION);
        });
    }
);
// Export the database connection for use in models/controllers
module.exports = db;
 