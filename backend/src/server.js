import dotenv from "dotenv";
dotenv.config();


import express from "express";
import authRoutes from "./routes/auth.route.js";
import  { connectDB }  from "./lib/db.js";

const app =express();
const PORT=process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);

app.listen(PORT,()=> {
    console.log(`Server is runnig on port ${PORT}`);
    connectDB();
});