const express = require("express");
const app = express();
const connectDB = require("./Config/dbconnect.js");
require("dotenv").config();
const router = require("./Routes/user.router.js");
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./Config/swagger');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api", router);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log(`API Docs available at http://localhost:${port}/api-docs`);
    connectDB();
});
