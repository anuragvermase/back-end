//Closures

/** 
function greet(){
    let hello = "Hello Great"
    console.log(hello);
}
greet();

console.log(hello); //gives error (not accessible)
*/

function outerFn(){
    let outerVar = "I'm the outer variable"
    function innerFn(){
        console.log(outerVar);    //inner function holds the outerVar 
    }
    return innerFn
}

let fun = outerFn() //outerFn() have innerFn

fun() //here executed the innerFn

/**when a funcion is excuted its all local variable should have destroyed
 * but I'm still able to hold the local variable of outer function, so this is 
 * known as 'Closures'
 * 
 * Closures are mostly use in 'Encapsulation', means private your internal data 
 * and you still use it.
 */


function customerCounter(){
    let count = 0;
    return function(){   //this is inner function (Anonymous fn), So this is closure
        count++
        console.log("Customer count is :"+ count);
    }
}

let cus = customerCounter()
cus() //Customer count is :1
cus() //Customer count is :2
cus() //Customer count is :3
cus() //Customer count is :4

//We don't have access to count = 0 variable so can change that, this is encapsulation
