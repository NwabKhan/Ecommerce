import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import productRouter from "./routes/product.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


mongoose
.connect(process.env.MONGO_KEY)
.then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.log("Error: ", err);
});

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());
app.use("/admin", productRouter);

app.listen(port, () => {
  console.log(`Lisint on Port on port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
