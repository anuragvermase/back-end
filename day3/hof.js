//Higher Order Function

/** 1st order function - are those function which support primitives and objects in their parameter,
 * and also returns primitive and object (They are also known as normal function)
 * 
 * high order function - are those function which support primitive and object in their parameter, 
 * and also support another function as parameter, 
 * and also return primitive and object as well as function
 *
 */

/**1. */
function operation(operatorFn,a,b){   //operation is HOF & operator is pass as function

    return operatorFn(a,b)
}

function sum(a,b){
    return a+b
}

var result = operation(sum,6,9)   //sum is function

console.log(result);  //15


/**2. */
//return type function 

function getGreetMethod(){
    return function(){
        console.log("Hello Great");
    }
}
console.log(typeof getGreetMethod());  //function
let greet = getGreetMethod()
greet() //Hello Great


//for Each method 

//for each method is a HOF, as it take function as argument

let players = ["Rohit","Kohli","Dhoni","Sachin"]

players.forEach((players)=>{console.log(players);})


//map -> creation of new transformed array  (also a HOF)


let num = [1,2,3,4,5]

transformedArray = num.map((num)=>num**2)

console.log(transformedArray); //[ 1, 4, 9, 16, 25 ]


//filter -> use to filter some elements from an array  (also a HOF)

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let filteredArray = arr1.filter(arr1=>arr1%2==0)

console.log(filteredArray); // [ 2, 4, 6, 8, 10 ]


//reduce 

//reduce -> reduces whole array to one single value

let arr2 = [1,2,3,4,5,6,7,8,9,10]

const reducedArray = arr2.reduce((currValue,nextValue)=>currValue+nextValue)

console.log(reducedArray);




