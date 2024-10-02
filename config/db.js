// @ts-nocheck
require("dotenv").config(); // Load environment variables from .env

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("connecting to DB");
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected\nURI: ${connection.connection.host}\nDatabase: ${connection.connection.db.databaseName}`
    );
  } catch (err) {
    console.error(`Error connection to DB: ${err}`);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
