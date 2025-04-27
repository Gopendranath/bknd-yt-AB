const express = require("express");
const app = express();
const connectDB = require("./Config/dbconnect.js");
require("dotenv").config();
const router = require("./Routes/user.router.js");
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', (req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    } else if (req.url.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
    }
    next();
});

// Add before route definitions
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
    );
    next();
});


app.get("/", (req, res) => {
    res.send("visit https://bknd-yt-ab.onrender.com/api-docs");
});

app.use("/api", router);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`API Docs available at http://localhost:${port}/api-docs`);
    connectDB();
});
