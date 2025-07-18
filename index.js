const express=require("express");
const app=express();
const PORT=8000;
app.get("/demo",(req,res)=>{
    res.send("This app is working now....");
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})