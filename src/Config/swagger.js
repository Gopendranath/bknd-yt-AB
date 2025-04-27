const swaggerJSDoc = require('swagger-jsdoc');

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Youtube API',
      version: '1.0.0',
      description: 'A simple API documentation',
    },
    servers: [
      {
        url: process.env.RENDER_EXTERNAL_URL || 'http://localhost:3000',
        description: 'API Server'
      },
    ],
  },
  apis: ['./src/Routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;