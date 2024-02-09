/*Datatypes is of two types 
1.primitive- they are simple, immutable
2. Non-primitive - they are complex, and mutable
*/

// primitive

// String


var name ="Anurag"

var title ="Verma"

console.log(name) //Anurag

console.log(typeof name ) //string

console.log(typeof(title)) //string


//number

var one = 4

var two = 1.4

console.log(one,two); //4  1.4
console.log(typeof two); //number


//bigInt

var bignumber = 12345678989765446788n

console.log(bignumber); //12345678989765446788n
console.log(typeof bignumber); //bigint

console.log(typeof NaN) //NaN - Not a Number -its datatype is 'number'


//Null

console.log(typeof null) //it gives the 'object' as datatype, but it is an exception/bugs of js. null itself a datatype.


//undifined

var cartoon

console.log(typeof cartoon) //undefined 

/**
 * Undefined - means you are define a variable but not assign any value to it.
 * Null - means purposefully you won't any value be assign to variable.
 */

//Boolean

console.log(typeof true) //boolean
console.log(typeof false) //boolean


//symbols

// This data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.

var sym = Symbol("Hello")

console.log(typeof sym); //symbol

console.log(sym); //Symbol(Hello)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Non-primitive

//objects

var person ={
    name:"anurag",
    age:21,
    hobby:"cricket"
}

console.log(person); //{ name: 'anurag', age: 21, hobby: 'cricket' }
console.log(typeof person); //object

/**
 * object consist of keys:values pairs
 * key - can have string and symbols 
 * value -  can have any data types
 */

