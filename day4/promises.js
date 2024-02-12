/**Promises
 *  promise have two outcomes/action -resolve or reject
 * */ 

//promise from Simran

/**
 * const simranPromise = new Promise()  --> // to create a new promise object (by using new keyword)
 * 
 * '(resolve,reject)=>{       } '--> this is callback function (arrow function)
 * 
 * resolve and reject are actions , so these are also functions
 */

const simranPromise = new Promise((resolve,reject)=>{    
    let parentDecision =false;
    
    if(parentDecision){
        resolve("Yeah!! saadi ki taiyaari ki jaye", parentDecision);
    }else{
        reject("Papa ne IAS dhoond lia hai sorry !!", parentDecision)
    }

});    

simranPromise.then((msg,pd)=>{          //simranPromise -> this is promise
    console.log("Simran message : " + msg);   //(+ve part)
    console.log("parents decision : " + pd);
    console.log("wohooo!!, Let's Book the wedding venue.");
}).catch((msg,pd)=>{
    console.log("Simran message : "+ msg);  //(-ve part)
    console.log("parents decision : " + pd);
    console.log("Ohh God !");
}).finally(()=>{console.log("chalo life mein clearity mili.");})



/**
 * Three friend promise for goa trip, iff all agree then the trip plan successful
 * o/w no trip.  this will done by 'all()' method
 */

//all() Method

const frnd1Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("Frnd1 : yes I'm ready!")
        }else{
            reject("Frnd1 : mujhe ristedaar ki saadi mein jana hai")
        }
    }, 3000);
})

const frnd2Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("Frnd2 : yes I'm ready!")
        }else{
            reject("Frnd2 : meri tabiyat kharab hai")
        }
    }, 4000);
})

const frnd3Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("Frnd3 : yes I'm ready!")
        }else{
            reject("Frnd3 : abba nhi manenge")
        }
    }, 2000);
})

// [frnd1Promise,frnd2Promise,frnd3Promise] --> array of promises

Promise.all([frnd1Promise,frnd2Promise,frnd3Promise]).then((msg)=>{
    console.log(msg);
    console.log("yeah! let's go.");
}).catch((msg)=>{
    console.log(msg);
    console.log("aakhri mein sab mana hi kar dete ho.");
})


/** 
 * 
 * if any reject, trip will be cancel, but
 * 
 * if all agree then, this print:
 * 
 * [
 * "Frnd1 : yes I'm ready!",
 * "Frnd2 : yes I'm ready!",
 * "Frnd3 : yes I'm ready!"
 * ]
 * yeah! let's go.
 */


//any() Method

const gf1Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("GF1 : yes I'm ready for dinner!")
        }else{
            reject("GF1 : I'm busy today")
        }
    }, 1000);
})

const gf2Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("GF2 : yes I'm ready for dinner!")
        }else{
            reject("GF2 : Phone is unreachable!")
        }
    }, 2000);
})

const gf3Promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(Math.random()>0.5){
            resolve("GF3 : yes I'm ready for dinner!")
        }else{
            reject("GF3 : I'm on diet")
        }
    }, 3000);
})

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((msg)=>{
    console.log(msg);
    console.log("let's go for dinner");
}).catch((msg)=>{
    console.log(msg);
    console.log("sab jhoothe hai.");
})


/**
 * if any resolve, go for dinner, but
 * 
 * if all promise rejected then this will print
 * 
 * [AggregateError: All promises were rejected] {
 * [errors]: [
 *  "GF1 : I'm busy today",
 *  'GF2 : Phone is unreachable!',
 *  "GF3 : I'm on diet"
 * ]
 * }
 *  sab jhoothe hai.
 */