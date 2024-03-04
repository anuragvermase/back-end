const mongoose = require("mongoose");



/* create a schema, having 
1.name
2.userId
3.email
4.password
5.userType

*/

const userSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },

    userId : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        Unique :true,
        minLength : 10,
        lowercase : true
    },

    userType :{
        type : String,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }


},{timestamps : true, versionKey : false})

// creating a collection 
//here 'Users' is the collection
module.exports = mongoose.model("User", userSchema)
//module.exports-> to export