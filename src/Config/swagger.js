const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: {
          title: 'YouTube Backend API',
          version: '1.0.0',
          description: 'API documentation for YouTube subscribers',
      },
      servers: [
          {
              url: process.env.NODE_ENV === 'production' 
                  ? 'https://bknd-yt-ab.onrender.com'
                  : 'http://localhost:3000',
          },
      ],
  },
  apis: ['./src/Routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
