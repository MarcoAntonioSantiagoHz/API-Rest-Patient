//Creation  swagger ui
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Patients",
      version: "1.0.0",
      description: "API REST para gestionar pacientes",
    },
    servers: [{ url: "http://localhost:3000/api" }],
    paths: {
      "/patients": {
        get: {
          summary: "Get all patients",
          tags: ["Patients"],
          responses: {
            200: {
              description: "List of patients",
            },
          },
        },
      },
      "/create/patients": {
        post: {
          summary: "Create a new patient",
          tags: ["Patients"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    lastName: { type: "string" },
                    age: { type: "integer" },
                    gender: { type: "string" },
                    symptoms: { type: "string" },
                    status: { type: "string" },
                    created_at: { type: "string" },
                    updated_at: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Patient created" },
          },
        },
      },
    },
  },
  apis: [], // Ya no necesitas apuntar a las rutas
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
