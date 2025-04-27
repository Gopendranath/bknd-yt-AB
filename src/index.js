const express = require("express");
const app = express();
const connectDB = require("./Config/dbconnect.js");
require("dotenv").config();
const router = require("./Routes/user.router.js");
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./Config/swagger');

const port = process.env.PORT || 3000; // default port

app.use(express.json()); // for parsing application/json

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec)); // API documentation


app.get("/", (req, res) => {
    res.send('<a href="https://bknd-yt-ab.onrender.com/api-docs">Click here to visit API documentation</a>');
});

app.use("/api", router); // API routes


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`API Docs available at http://localhost:${port}/api-docs`);
    connectDB();
});
