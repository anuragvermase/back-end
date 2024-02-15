/**
 * var :
 * 1. It is used to define a variable
 * 2. It has function scope but not block scope
 * 3. It is Hoisted
 */

// function scope 

function num(){
    var one = 1;
    console.log(one); //1

} 
num()

// console.log(one); //error


//Block scope

{
    var x=20            // --->  var is not a block scope
    console.log(x);  //20
}

console.log(x);  //20


// Hoisting

console.log(i);  //shows undefine , not shows error

var i = 24;

console.log(i); //21

/** In hoisting when var i = 24 is define/executing after console.log(), it goes to top
 * and define a 'var i' , this is called hoisting. And thats the resason for undefined 'i'
 * and not giving any error.
 */


/**
 * let:
 * 1. no hoisting
 * 2. It has function scope and also has block scope 
 */

// hoisting 

// console.log(j)  // it throws error (so not suppot hoisting)

let j=2;

// function scope 

function num(){
    let two = 2;
    console.log(two); //2

} 
num()

// console.log(two); //error


//Block scope

{
    let y=20            // --->  var is not a block scope
    console.log(y);  //20
}

// console.log(y);  // error(ReferenceError: y is not defined)


/**
 * const:
 * 1. const scope is exactly same as let 
 * 2.const variable are final, can't be reassign value
 */

const favColor = "blue";

// favColor = "yellow"; //error (TypeError: Assignment to constant variable.)