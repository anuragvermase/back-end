//VALIDATION 
//define the schema of student collection to be stored in the database 

const mongoose = require("mongoose")

//schema

const studentSchema = new mongoose.Schema({
    name : {
        type :String,
        require:true
    },
    age :{
        type:Number,
        min :19
    },
    email:{
        type :String,
        required:true,
        lowercase:true,
        minLength:15
    },
    subjects :[String],
    // createdAt:{
    //     type:Date,
    //     immutable:true,
    //     default:()=>{
    //         return Date.now()
    //     }
    // }
},{versionKey:false,timestamps:true})
//versionKey:false-> removes the version fields
//timestamps:true ->add timestamps (createdAt, updatedAt)

//go ahead and create corresponding collection in DB

module.exports = mongoose.model("student",studentSchema);
/*student - name of the collection
  studentSchema - schema of the document
  modulle.exports - for exporting the module,
  ** this files becomes module. so, we can called from anyother place

  student --> students (takes prural version) collection made in data base
*/