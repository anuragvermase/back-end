// Creating a module

exports.sum = (a,b)=>{
    return a+b;
}

exports.prod = (a,b)=>{
    return a*b;
}


/*
or second method for export the modules

module.exports = {
    sum : sum,
    prod : prod
}
*/


// console.log(typeof sum); //function