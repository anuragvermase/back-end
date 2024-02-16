//using module

const operations = require("./myModule")

console.log(typeof operations); //object
console.log(operations); //{ sum: [Function: sum], prod: [Function: prod] }
console.log(operations.sum(6,70));
console.log(operations.prod(6,70));