// an arrow fxn is a different way of writting functions
//normal function:
function taskOne(num){
    console.log(num+3);
    console.log("my function");
}

const taskTwo =(num) => {
    console.log(num+9);
    console.log("my function");
};

taskOne(8);
taskTwo(9);

const mainFunction= (another) =>{
    console.log("i am the main func");
    another()
}

function cbFunc(){
   console.log("i am the callback function");
}

mainFunction(cbFunc);
mainFunction(function cb2Func(){
    console.log("i am the cb2 function(named)");
})

mainFunction(function(){
    console.log(" i am an anonymous function");
});
//anonymous function(fat arrow function) dont have names (often used in callback function)