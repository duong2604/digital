import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import router from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import { v2 as cloudinary } from "cloudinary";
import colors from "@colors/colors";

// connect to database
import "./db/mongoose.js";
import { corsOptions } from "./config/corsOptions.js";

const app = express(corsOptions);
const port = process.env.PORT || 8080;
colors.enable();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(helmet());

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/v1/api", router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
