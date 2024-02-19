const mongoose = require("mongoose");
const studentModel = require("./Models/student.model1");

//Write The code to connect with MongoDB

mongoose.connect("mongodb://127.0.0.1/be_demodb")

const db = mongoose.connection //start the connection with mongoDB

db.on("error",()=>{
    console.log("Error while connecting to database");
    //logic to insert data in the DB

   
})

db.once("open",()=>{
    console.log("connected to mongoDB");
    init()
})

async function init(){
    //logic to insert data in the DB 
    const student = {
    name: "anurag verma",
    age : 21,
    email:"anuragvermagmail.com",
    subjects:["os",'dbms']
    }

    const std_obj = await studentModel.create(student);
    //it creates the collection and put the document/data
    console.log(std_obj);
}