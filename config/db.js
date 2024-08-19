// @ts-nocheck

const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("connecting to DB");
  const connection = await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((err) => console.log(`Error connection to DB: ${err}`));
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

module.exports = connectDB;
