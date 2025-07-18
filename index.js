const express=require("express");
const app=express();
require('dotenv').config();
const sequelize=require('./config/db');
const PORT=8000;
app.use(express.json())
sequelize.sync({alter:true})
       .then(()=>{
        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}`)
        });
       })
       .catch(err=>{
        console.error("Failed to sync database:",err);
       });