//what is a function
/* a function is anything that can be reused
 over and oiver and in code function 
 a fuction can be declared in three ways namely :function Declaration ,function expression and fat arrow function//
 arrow function
 */ //methods are components that can be reused
/* the only special charcters that can be used in naming variables and function are _ and $
 function declaration>>this is where the function
  is declared and given a function name ,brackets where the parameters go 
 and curly brackets where the code goes
 parameters>>are placeholders for any argumentr that will be used in a function 
 <this is where the arguments are passed to by reference or value .
 arguments>>are the actual values passed to the the parameters */
/*  function name(parameters){
    code to be executed
} */

/* the return statement is used to return any value specified in its path and also terminates the function 
and also it is used to solve the scoping issue

calling a function:
a function can be called in two ways namely :function call and function invocation
function call>>is when a function is called using the function name
function createNumberOne(){
    console.log("this is where the code goes to ");
}
createNumberOne();

function invocation>>is when a function is called using the function reference */

/* function calcSum(num1,num2){
    return(num1*num2) ;
    
}
console.log(calcSum(3,4)); //calls the function block
console.log(calcSum(6,4)); 
calcSum(9,4)
calcSum(12,4) */
/* 
function expression>>this is where a function is assignmned a variable  */
//we don't need a function name but when we need the function to be used we call the variable
/* let sumNumber = function (num1, num2) {
  return num1 * num2;
};
console.log(sumNumber(6, 4 ))*/

/* fat arrow function>>this is where a function is declared using the arrow operator */
//it is used to declare a function in a single line

/* start with the brackets then the fat arrow then the curly brackets(eliminate the function and the function name
    the fat arrow replaces the function name
    )

    you  */
    let SumNumber=(num1,num2)=>{
        return num1 * num2;
    }
    console.log(SumNumber(10,15));
    /* callback functions
    recursion*/











function getrate(principal,rate,time){
   let rate=(principal*0.05*time)/100;
   return rate;
}

let principalAmount=100;
let timeInYears=4;
let rate=0.5;

let calculatedRate = getRate(principalAmount, timeInYears);
console.log("Calculated rate:", calculatedRate);

//question
 tempConversion(celsius,fahrenhit)




//function calling

function calcSum(num1,num2){
      console.log(calcSum(num1*num2));
}
//function invocation

function calcSum(num1,num2){
    return(4 * 2);

}
console.log("Calculated sum:", calcSum(4,2))

//function expression

let sumNumber=function(num1,num2){
    return num1+num2
}
console.log("summation:",sumNumber(4,7))



//void function
function firstCode(){
    let age=100
    console.log(age/4);
}
//with stored arguments:could be an array ,string,function,bool
function getAge(yob){
 let age= 2024 - yob
 console.log("you are now" ," ", + age + " years old")
}
/* getAge(1990);
getAge(2003);
getAge(2001);

firstCode()
firstCode()
firstCode();
*/
function squareNumber(x,user){
console.log("hello " + user);
 console.log("the square of " + x + " is " + x*x);
 //the return keyword is used to indicate the result of a functions operation.you need
 //to store the result in a varible for use of return
 return x*x
}
let result1=squareNumber(2,"peter");
let result2=squareNumber(98, "spectre");

console.log(result2);