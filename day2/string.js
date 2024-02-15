/**
 * String - Sequence of character
 * It is Immutable (can't be changed)
 */

//define a string

 let name = "Great"

 let city = 'Delhi'

 console.log(name, city); //Great Delhi
 console.log(typeof name); //string

 //Accessing character based on index

 console.log(name[0]); //G        indexing from zero(0) -> (G:0,r:1,e:2,a:3,t:4)
 console.log(name[10]); //undefined 

 //Now if we want to change the character by using indexing of string

 city[0]="B"  //-> strings are immutable (not be changed)

 console.log(city);  //Delhi


 /**
  * Why String is Immutable?
  * 
  * -> String is immutable so if we store the sensitive data inside the string it 
  * can't be changed, its applications are to store the 'username' and 'password'
  */


 /**
  * Methods
  */

 //length of the string

 console.log(name.length); //5

 //Concat

 let init = "Great"
 let final = "Anurag"

 console.log(init.concat(final)); //GreatAnurag

 //or use '+'

 console.log(init + final); //GreatAnurag

 //Upper case

 console.log(city.toUpperCase()); //DELHI

 let food = "LITTI CHOKHA"

 console.log(food.toLowerCase()); //litti chokha

 //char at any index

 console.log(food.charAt(6)); //C


 //slicing

 let fullName = "Anurag Verma"
 /**A:0,n:1,u:2,r:3,a:4,g:5, :6,V:7,e:8,r:9,m:10,a:11
  * or
  * A:-12,n:-11,u:-10,r:-9,a:-8,g:-7, :-6,V:-5,e:-4,r:-3,m:-2,a:-1
 */

 console.log(fullName); //Anurag verma
 console.log(fullName.slice(2)); //urag Verma
 console.log(fullName.slice(2,5)); //ura
 console.log(fullName.slice(-5)); //Verma
 console.log(fullName.slice(-5,-1)); //Verm


 //inexOf

 let laptop = "Hewlett-Packard"

 console.log(laptop.indexOf("-")); //7

 //trim 

 let frnd = " Suraj "

console.log(frnd); // " Suraj "
console.log(frnd.trim()); // "Suraj"

//split 

let nameFull = "Vishal Singh Rawat"
console.log(nameFull.split(" ")); //[ 'Vishal', 'Singh', 'Rawat' ]
console.log(nameFull.split("")); 
/**
 * [
  'V', 'i', 's', 'h', 'a',
  'l', ' ', 'S', 'i', 'n',
  'g', 'h', ' ', 'R', 'a',
  'w', 'a', 't'
  ]
 */
