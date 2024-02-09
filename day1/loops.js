// loops

//for loop

for(var i=0;i<10;i++){
    console.log("hello anurag "+ i);
}


// if we can not increment the value its value will be always 0(zero) and it goes in infinite loop


// for(var i=0;i<=10;){
//     console.log("hello anurag "+ i);
// }


// if not give the condition or not checking also goes into infinite loop.

// for( var i=0;;i++){  
//     console.log("hello anurag ");
// }


//while loop

var i=0

while (i<10) {
    console.log("Hello Great!!! " + i );
    i++
}


// NOTE:- In JS ';' (semicolon) is optional


// if we not increment the loops its value always be 0(zero) and true, and our code goes into loop

while (i<10) {
    console.log("Hello Great!!! " + i );
    // i++
}


/*
 *from while loop or for loop you can use any of loop. but,
 * for loop - you can use for loop when you know hor many time you have to loop the condition
 * while loop - you can use while loop when the execution is based on some condition
 */


 //continue and break

 /**Problem:- Iterate fri=om 1 to 50 and print all the even number in between and ignor all the odd numbers */

 for (let index = 1; index <= 50; index++) {
    if(index%2!=0){
        continue
    }
    console.log(index);
 }

 /*continue :- anything which is after continue keyword won't get executed,but it again continue the loops 
 continue impacts next/immediate foor loop (In nested loops)
*/


//nested for loop

for(var i=0 ; i<10 ; i++){
    for (var j=0 ; j<10 ; j++){
        if(j%2!=0){
            continue
        }
        console.log(j);
    }
}


//break

//break terminates the loop

for(var i=1 ; i<10 ; i++){
    if(i==6){
        break
    }
    console.log("hello " +i);
}


//break also impact just next/immediate loop in nesting

for(var i=1 ; i<3 ; i++){
    for(var j=1 ; j<10 ; j++){
      if(j==6){
        break
      }
      console.log("great " +j);
    }
}
