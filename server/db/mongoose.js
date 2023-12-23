import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  })
  .catch((err) => console.log("Failed to connect to Mongodb", err.message));

mongoose.connection.on("connected", () =>
  console.log(`Mongodb ::: connected ::: ${process.env.DB_NAME}`)
);
mongoose.connection.on("disconnected", () =>
  console.log(`Mongodb ::: disconnected ::: ${process.env.DB_NAME}`)
);
