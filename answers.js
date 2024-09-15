//using modulo

const n=4
function isOddIsEven(numbers){
    if(numbers%2===0){
        console.log(nums+" is not even");                                                                                                                 
    } else{
        console.log(nums+"is odd")
    }
}




//it is a list of related itmes
//it is a specual oject with vaues and no keys however the default values are given index 
//index start from zero to the array.length index(n-1) the last item in array.

const numbers=[2333,2443,5,6,76,34,2324,556,57,67,3]


console.log(numbers[0]);

console.log(numbers[1]);

console.log(numbers[10]);

//array methods
//this are functions that allow us to manipulate the data in array 
console.log(numbers);

//push() method : this function allows you to add an element to the end of the array
numbers.push(788);//adding 788 to the end of the array

console.log(numbers);
//some array methods do not immitate /change the original array while others do 
//some array methods have return values some do not have a return value