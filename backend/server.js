import express from "express";

const app =express();

app.get("/", (req,res)=> {
    res.send("Hello World recheck");
});

app.listen(5001,()=> {
    console.log("Server is runnig on port 5001");
});