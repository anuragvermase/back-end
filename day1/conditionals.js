//conditionals 

//if-else

var num = 19

if(num%2==0){
    console.log("Even");
}else {
    console.log("Odd"); 
}

console.log("After If");


// ternary Operator

(num%2 == 0)?console.log("Even"):console.log("Odd")


// nested conditionals

var a = 100

if(a>=0){
    if(a>5){
        console.log("a is greater than 0 and 5");
    }else{
        console.log("a is greater than 0 but less than 5")
    }
}else{
    console.log("a is less than 0 ");
}


// ternary operator
(a>=0) ? (a>5) ? console.log("a is greater than 0 and 5") : console.log("a is greater than 0 but less than 5") : console.log("a is less than 0 ")


// Switch 

var chocolate = "dairy milk"

switch (chocolate) {
    case "kitkat":
        console.log("kitkat found");
        break;

    case "dairy milk":
         console.log("dairy milk found");
          break;
    case "munch":
         console.log("munch found");
          break;
          
    default:
        console.log("nothing found");
        break;
}