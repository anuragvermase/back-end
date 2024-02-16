//Read from an external file

const fs = require('fs');

// console.log(typeof fs); //object


//Read in a sync way

/*
console.log("First Line");

let content = fs.readFileSync("input.txt")
console.log("String to read : "+content);

console.log("Last Line");
*/


//Read in async way


/*
console.log("First Line");

fs.readFile("input.txt", (err, content)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Content of file :"+ content);
    }
})

console.log("Last Line");
*/

//Write to an external file (synchronously)

/*
console.log("before");

fs.writeFileSync("output.txt","Hello Great")

console.log("after");
*/

//Write to an external file (Asynchronously)


console.log("before");

fs.writeFile("output(1).txt","Hello Great Again",(err,content)=>{
    if(err){
        console.log(err);
    }else{
        console.log("write Asynchronously Successfully");
    }
})

console.log("after");