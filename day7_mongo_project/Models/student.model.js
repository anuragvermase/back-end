//define the schema of student collection to be stored in the database 

const mongoose = require("mongoose")

//schema

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

//go ahead and create corresponding collection in DB

module.exports = mongoose.model("student",studentSchema);
/*student - name of the collection
  studentSchema - schema of the document
  modulle.exports - for exporting the module,
  ** this files becomes module. so, we can called from anyother place

  student --> students (takes prural version) collection made in data base
*/