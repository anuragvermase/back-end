/**
 * callbacks - call backs are function,
 * they passed as argument to another function.
 * and it is mostly use in Asynchronous context
 * eg :- setTimeout('callback function', 3000)
 */

function greet(name, callback){      //callback -> is callback function
    const greeting = "Hello " + name;
    callback(greeting)
}

function displayGreeting(message){
    console.log(message);

}

greet("Great",displayGreeting) //displayGreeting is fn


/**
 * Callback Hell -> Callback Hell is essentially nested callbacks stacked below one another 
 * forming a pyramid structure. Every callback depends/waits for the previous callback, 
 * thereby making a pyramid structure that affects the readability and maintainability of the code. 
 */

