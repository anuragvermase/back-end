//Function

//function is a block of code (or logic), which is use to solve some problem.
//and, which we can use and call from anywhere.

//Define a function

function hero(){
    console.log("I'm the Hero");
}

hero(); //function call

/** function name 
 *  should start with small case
 *  no gap/white space between the function name
 *  should be logical
 */

// function with argument

function sumOfTwoNum(x,y){  //(x,y) -> parameter / dummy value`
   return x+y; 
}

console.log(sumOfTwoNum(20,21)); //(20,21) -> argument
 
// return :- return is use to return out the value from the function after computation


//Default value concept

/**1. */
function sumOfTwoNum(x,y=10){  
    return x+y; 
 }
 
 console.log(sumOfTwoNum(20)); //30
 /**Here we pass only one argument and give a default value 10 to 'y'  */

/**2. */
 function sumOfTwoNum(x=15,y=10){  
    return x+y; 
 }
 
 console.log(sumOfTwoNum(20)); //30

 /**Default value only works, when you not pass argument/valur of that other wise it takes the argument value */

 /**3. */
 function sumOfTwoNum(x=15,y=10){  
    return x+y; 
 }
 
 console.log(sumOfTwoNum()); //25


 //Argument object

 function nos(){
    console.log(arguments);   //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 7, '6': 9 }

 }

 nos(1,2,3,4,5,7,9)


 //Arrow functions

 var great = () => { console.log("hello great");}
 great();

 var sum =(x,y) => { console.log(x+y);}
 sum(2,3);


//  multiple line arrow function 

var cal = (a,b) => {
    console.log("calculated value :");
    console.log(a+b);
}

cal(7,8);


//argumnet object

// you cannot use argument in arrow function as youy can use in normal function
var cal = () => {
    console.log(arguments);
}

cal(7,8);


//IIFE -Immediately Invoked Function Expression

//use when you need to execute functiom immediately afetr the function definition.
//also, when you need tho execution the function only one time

(function(){
    console.log("hello anurag");
})()

/**(function(){
    console.log("hello anurag");    ---> this is the function
})

** function with no function name known as Anonymous function

()  ---> this is the call 

*/
