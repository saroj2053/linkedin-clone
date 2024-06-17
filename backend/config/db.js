const mongoose = require("mongoose");
const colors = require("colors");

const CONNECTION_URI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_URI);
    if (conn) {
      console.log(
        `MongoDB connected successfully on ${conn.connection.host}`.underline
          .italic.yellow
      );
    }
  } catch (error) {
    console.log(`Error connecting mongoDB ${error}`);
  }
};

connectDB();
