//Scope

/**Three type of scope:
 * global scope
 * function scope
 * block scope
 */

// Global Scope
 
let name = "Great"   //Global Scope

console.log(name);  //accessible outside function also

function printName(){
    console.log(name); //accessible in function 
}
printName()


//Local scope /function scope variable

                                                                
function num(){
    var one = 1;
    console.log(one);

} 
num()

// console.log(one); //shows error (not accessible) 


//Block scope


/**
 * {
 *    ---> scope
 * }
 * 
 * 
 *  
{
    var x=20            --->  var is not a block scope
    console.log(x);  //20
}

console.log(x);  //20

*/


{
    let y = 20;       // ---> block scope
    console.log(y); // 20
}

console.log(y);   // Error (ReferenceError: y is not defined)


