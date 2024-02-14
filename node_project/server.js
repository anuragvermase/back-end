//http module / creating server

const http = require("http");

const server = http.createServer((req,res)=>{
    if (req.url=='/hello'){
       res.end("Hello Great");
    }else{
        res.end("you are not write correct URL");
    }
})

server.listen(5000,()=>{
    console.log("server is started")
})