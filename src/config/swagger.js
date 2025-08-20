// // Creation  swagger ui
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST PATIENTS",
      version: "1.0.0",
      description: "REST API for managing patients",
    },
    servers: [{ url: "http://localhost:3000/api" }],
    paths: {
      "/patients": {
        get: {
          summary: "Get all patients",
          tags: ["Patients"],
          responses: {
            200: { description: "List of patients" },
            500: { description: "Internal Server Error" },
          },
        },
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
                    age: { type: "integer", example: 40 },
                    // age: { type: "integer" },
                    gender: { type: "string" },
                    symptoms: { type: "string" },
                    status: { type: "string" },
                  },
                  required: ["name", "lastName", "age", "gender"],
                },
              },
            },
          },
          responses: {
            201: { description: "Patient created" },
            400: { description: "Registro duplicado" },
            500: { description: "Internal Server Error" },
          },
        },
      },
      "/patients/{id}": {
        get: {
          summary: "Get patient by ID",
          tags: ["Patients"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
              description: "ID del paciente",
            },
          ],
          responses: {
            200: { description: "Patient found" },
            404: { description: "Paciente no encontrado" },
            500: { description: "Internal Server Error" },
          },
        },
        put: {
          summary: "Update a patient by ID",
          tags: ["Patients"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
              description: "ID del paciente",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    lastName: { type: "string" },
                    age: { type: "integer", example: 40 },
                    // age: { type: "integer" },
                    gender: { type: "string" },
                    symptoms: { type: "string" },
                    status: { type: "string" },
                  },
                  required: ["name", "lastName", "age", "gender"],
                },
              },
            },
          },
          responses: {
            200: { description: "Patient updated successfully" },
            404: { description: "Paciente no encontrado" },
            500: { description: "Internal Server Error" },
          },
        },
        delete: {
          summary: "Delete a patient by ID",
          tags: ["Patients"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "integer" },
              description: "ID del paciente",
            },
          ],
          responses: {
            200: { description: "Patient deleted successfully" },
            404: { description: "Paciente no encontrado" },
            500: { description: "Internal Server Error" },
          },
        },
      },
    },
  },
  apis: [],
};

// Crear specs después de definir options
const specs = swaggerJsdoc(options);

const swaggerOptions = {
  customCss: `
    .swagger-ui .topbar { background-color: #3f3ffc; }
    .swagger-ui .topbar a span { color: #fff; font-weight: bold; }
    .swagger-ui .scheme-container { display: none; }
    body { background-color: #f5f6fa; } 
    .swagger-ui .opblock-summary { border-radius: 12px; }
    .swagger-ui .opblock.opblock-get { background: #e0e7ff; }
    .swagger-ui .opblock.opblock-post { background: #d4f7dc; }
    .swagger-ui .opblock.opblock-put { background: #fff3cd; }
    .swagger-ui .opblock.opblock-delete { background: #f8d7da; }
  `,
  customSiteTitle: "API REST Patients",
};

module.exports = { swaggerUi, specs, swaggerOptions };
