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
                    age: { type: "integer" },
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
                    age: { type: "integer" },
                    gender: { type: "string" },
                    symptoms: { type: "string" },
                    status: { type: "string" },
                  },
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

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };


