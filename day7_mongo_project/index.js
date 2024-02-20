const mongoose = require("mongoose");
const studentModel = require("./Models/student.model1");

//Write The code to connect with MongoDB

mongoose.connect("mongodb://127.0.0.1/be_demodb")

const db = mongoose.connection //start the connection with mongoDB

db.on("error",()=>{
    console.log("Error while connecting to database");
    
})

db.once("open",()=>{
    console.log("connected to mongoDB");
    //logic to insert data in the DB
    // init()
    //Logic to read the data from DB
    dbQueries()
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

async function dbQueries(){
    console.log("Read data from database");
    //logic to read the data from DB
    try{
    const std = await studentModel.findById("65d38612e7dd904de4e9a70d");
    console.log(std);
    }catch(err){
        console.log(err);
    }

    //Iwant to go and search based on name
    try{
    // const std1 = await studentModel.find({name:"anurag verma"})
    // const std1 = await studentModel.findOne({name:"anurag verma"})//gives only one data
    const std1 = await studentModel.find({}) //act like findAll
    console.log(std1);
    }catch(err){
        console.log(err);
    }


    //deal with miltiple contitions
    const std2 = await studentModel.where("age").gt("20").where("name").equals("anurag verma").limit(2)
    console.log(std2);


    //delete a document where name="anurag verma"

    const std3 = await studentModel.deleteOne({name :"anurag verma"})
    console.log(std3); //{ acknowledged: true, deletedCount: 1 }s

}