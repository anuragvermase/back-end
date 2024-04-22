// This will be starting file of project

const express = require("express")
const mongoose = require("mongoose")
const app = express ()
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")
const user_model = require("./models/user.model")
const bcryptjs = require("bcryptjs")

app.use(express.json()) //middelware


/**
 * creating an admin user at the starting of the application
 * if not already present
 */

// connection with mongodb 
mongoose.connect(db_config.DB_URL)

const db =mongoose.connection

db.on("error",()=>{
    console.log("Error while connectiong on mongoDB");
})

db.once("open",()=>{
    console.log("connected with mongoDB");
    init()
})

async function init(){

    try{
       let user = await user_model.findOne({userId : "admin"})

       if(user){
           console.log("admin is already present")
           return 
        }
    }catch(err){
    console.log("Error while reading the data",err);
    }

    try {
        user = await user_model.create({
            name :"Anurag Verma ",
            userId : "admin",
            email : "anuragver689@gmail.com",
            userType : "ADMIN",
            password : bcryptjs.hashSync("Anurag70",8) //8->salt, and it is called salt based hashing
        })
        console.log("Admin created", user);
        
    } catch (error) {
        console.log("Error while create admin",error);
    }
}

/**
 * stitch the route to the server 
 */
require("./routes/auth.routes")(app)


/** start the server */
//8080-> port number
app.listen(server_config.PORT,()=>{
    console.log("server started at PORT number : ", server_config.PORT);
})