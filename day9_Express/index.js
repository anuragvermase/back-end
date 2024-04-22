const express = require("express");
console.log(typeof express);

const app = express()

//starting a express server

app.listen(8080, ()=>{
    console.log("hello great! server got started");
})