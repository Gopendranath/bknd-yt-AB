const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message, "\nFailed to connect to MongoDB");
        process.exit(1);
    }
};

module.exports = connectDB;