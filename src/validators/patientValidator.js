// Import express-validator functions to define rules and check results
const { body, validationResult } = require("express-validator");

// Validation rules for creating a patient
const createPatientValidator = [

  // Validate "name" field
  body("name")
    .isString().withMessage("Name must be a string") // must be a string
    .trim() // remove extra spaces at start and end
    .notEmpty().withMessage("Name is required") // cannot be empty
    .custom(value => {
      // prevent example placeholder value "string"
      if (value.toLowerCase() === "string") {
        throw new Error("Name is invalid or example value");
      }
      return true;
    }),

  // Validate "lastName" field
  body("lastName")
    .isString().withMessage("Last name must be a string")
    .trim()
    .notEmpty().withMessage("Last name is required")
    .custom(value => {
      if (value.toLowerCase() === "string") {
        throw new Error("Last name is invalid or example value");
      }
      return true;
    }),

  // Validate "age" field
  body("age")
    .isInt({ min: 1 }).withMessage("Age must be a positive number, not 0 or empty"),

  // Validate "gender" field
  body("gender")
    .isString().trim().notEmpty().withMessage("Gender is required")
    .custom(value => {
      if (value.toLowerCase() === "string") {
        throw new Error("Gender is invalid or example value");
      }
      return true;
    }),

  // Validate "symptoms" field
  body("symptoms")
    .isString().trim().notEmpty().withMessage("Symptoms are required")
    .custom(value => {
      if (value.toLowerCase() === "string") {
        throw new Error("Symptoms are invalid or example value");
      }
      return true;
    }),

  // Validate "status" field
  body("status")
    .isString().trim().notEmpty().withMessage("Status is required")
    .custom(value => {
      if (value.toLowerCase() === "string") {
        throw new Error("Status is invalid or example value");
      }
      return true;
    }),

  // Middleware to handle errors and return a clean object
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Format errors as { field: "message" }
      const formattedErrors = {};
      errors.array().forEach(err => {
        formattedErrors[err.param] = err.msg;
      });
      return res.status(400).json(formattedErrors);
    }
    next(); // no errors, proceed to controller
  }
];

module.exports = { createPatientValidator };
