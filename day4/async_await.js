//async

/*
function printMsg(){
    return 'Hello Great';        --> this is the normal function print 'Hello Great'
}

console.log(printMsg());  //Hello Great
*/


async function printMsg(){
    return 'Hello Great';       //--> by adding async as prefix it returns promise 'Hello Great'
}

// console.log(printMsg()); //Promise { 'Hello Great' }

printMsg().then((msg)=>{
    // console.log(msg);  //--> then to print msg, use then() gives 'Hello Great'
})


//async-await

/*
function printMsgAfterWait(){
    console.log("I'm First");
    setTimeout(()=>{           //it is asynchronous/non-blocking
        console.log("Hello Great");
    },3000)
    console.log("I'm Last");
}
printMsgAfterWait()

*/
console.log("Starting");

async function printMsgAfterWait(){
    console.log("I'm First");
    let msg = new Promise((resolve,reject)=>{
        setTimeout(()=>{           //it is asynchronous/non-blocking
            resolve("Hello Great");
        },10000)
    })
    let result = await msg ;
    console.log(result);
    
    console.log("I'm Last");
}
printMsgAfterWait()

console.log("Ending");

/** output:
 * 
 * Starting
   I'm First
   Ending
   Hello Great
   I'm Last
*/