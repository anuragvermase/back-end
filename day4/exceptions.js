/**
 * Error -> happens - can't recover
 * Exception -> handled programatically
 */

/*
//syntax related

console.log("hello   // SyntaxError -> not allow your program to run

//runtime exception

let x = 5;

console.log(x.toUppercase());

//logical 

let num = 5;
for(let i=-3; i<5; i++){
    console.log(num/i)         //--> we can't divide any number by zero
}
*/

/** 
let obj = undefined;

console.log(obj.name); //TypeError: Cannot read properties of undefined (reading 'name')
*/

/*
try{ 
let obj = {
    name : "Great"
};

console.log(obj.name);
}catch(err){
    console.log("Exception handled");
    console.log(err);
}
*/

try{ 
    let obj =undefined
    
    console.log(obj.name);
 }catch(err){
    console.log("Exception handled");
    console.log(err);
 }finally{
    console.log("I will always executed");
 }