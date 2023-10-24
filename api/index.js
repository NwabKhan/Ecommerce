import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res)=>{
    res.status(200).json({message: "Hellow World"})
})



app.listen(port, () => {
  console.log(`Lisint on Port on port ${port}`);
});
