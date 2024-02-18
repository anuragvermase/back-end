const mongoose = require('mongoose');

//Write the code to connect with data base

mongoose.connect("mongodb://localhost/be_demodb");

const db = mongoose.connection;  //start the connection with mongoDB 

db.on("error",()=>{
    console.log("error while connecting with db");
})

db.once("open",()=>{
    console.log("connected to MongoDB");
})