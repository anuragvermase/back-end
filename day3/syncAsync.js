/**
 * Synchronous -> Instruction in synchronous code executes in a given sequence.
 * 
 * Asynchronous -> Instructions in asynchronous code can execute in parallel.
 * 
 */

//Sunchronous 

console.log("This is the first line");

function greet(){
    console.log("Hello Great");
}

greet()

console.log("This is the end");

/*
 * -> for the exution of code, all the lines/ source code go through the call stack
 * which is based on LIFO rule and whwn exection start GEG (global exection context)
 * comes call stack then all the code comes for execution, after all code executed GEC 
 * also pop out from call stack 
 * 
*/


//Asynchronous

console.log("Hello from the first line");

setTimeout(()=>{           //Asynchronous 
    console.log("Hello from the call back function");
},3000)

console.log("Hello from the last line");

/*
 *setTimeout is a HOF  & 
 * 
 * ()=>{           
 *   console.log("Hello from the call back function");
 * },3000
 *  
 * this is call back function -> call back function are those function which is passed 
 * as an argument to a function(hof)
 *
 */

/**
 * -> for the exution of code, all the lines/ source code go through the call stack
 * which is based on LIFO rule and when exection start GEG (global exection context)
 * comes to call stack then all the code comes for execution,
 * and if any asynchronous task comes then the call back function is register to 'Web Api'
 * 
 * and then the 'event loop' keep eye on call back function which is register in Web Api
 * & on the timer and when the timer is done in Web Api, then event loop brings the completed
 * task to 'call back queue'
 * 
 * then event loop check the call stack, if call stack is empty (GEC also pops) then 
 * the completed call back function moves to call stack for the execution.
 * 
 */
