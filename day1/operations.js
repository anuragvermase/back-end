//operators

//assignment operators

var age = 21 
//21 is assigning in the age variable by the '=' operator

//arithmetic operator

console.log(4+5);
console.log(23-5);
console.log(9*5);
console.log(21%5);
console.log(21/2);
console.log(2**3);

//post increment & pre increment

var num =10

console.log(num); //10
console.log(num++); //10 -post increment (print the value first and then increase the value by 1)
console.log(num); //11


console.log(num); //11
console.log(++num); //12 -pre increment (fistly increase the value by 1 and then print the value)
console.log(num); //12


//relational operators
 
// Eqality

console.log(10==11); //false
console.log('10'==10); //true -js internally convert the string('10') type to int (10) 

// Strict eqality check
console.log('10'===10); //false -it checks the type and value both .types should be compared here.


//Check the ineqality

console.log(5!='5'); //false
 
console.log(5!=='5') //true  -strictly ineqality check


//comparative

console.log(3>4); //false
console.log(3>=4); //false
console.log(3<4); //true
console.log(3<=4); //true

//logical operators


/** OR (||)
 * T || F -> T
 * F || T -> T
 * T || T -> T
 * F || F -> F
 * 
 *  AND (&&)
 * T || F -> F
 * F || T -> F
 * T || T -> T
 * F || F -> F
 * 
 *  XOR (^)
 * T || F -> 1
 * F || T -> 1
 * T || T -> 0
 * F || F -> 0
 */

console.log(true && false); //false

console.log(5>3 && false); //false

console.log(5>3 || false); //true

console.log(5>3 ^ false); //1


//bitwise operator

console.log(10 & 6); //2

/**
 * 10-1010
 * 6 -0110
 * apply &(and) operation gets 0010 which is in integer 2.
 */

console.log(10 | 6); //14

/**
 * 10-1010
 * 6 -0110
 * apply |(or) operation gets 1110 which is in integer 14.
 */

console.log(10 ^ 6); //12

/**
 * 10-1010
 * 6 -0110
 * apply ^(xor) operation gets 1100 which is in integer 12.
 */