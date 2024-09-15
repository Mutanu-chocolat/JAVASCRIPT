//arrays are a collection of logically related data
//hosptail,names of cars/types,names of people,fruits,vegetables
//there are three types of arrays:single arrays,two dimension array ,multidimensional arrays
//single array:array of single elements
//two dimensional arrays are matrix in shape (such that they are representesd in rows and colums)
//multidimensional arrays :are arrays that contain arrrays inside the
//(an array of vehicles with sub arrays of type of vehicle,color of vehicle,model of vehicle)

/* structure of an Array\
1.array name
let names =["faith","Mutanu","peter","developer","vehicle",putting]

2.assignment operator 
3.square brackets[] or brackets () 
the unique way of assinging an array to a variable but you jhave to call it as afunction (specify that this is an array with the array keyword)
let number= array(1,2,3,4,5,6)

4.indexing in arrays 
5.length of an array
array methods 
*/
let names = ["faith", "Mutanu", "peter", "developer", "vehicle", "putting"];

/* let number = array(1, 2, 3, 4, 5, 6); */
//array methodsaccessing elements in an array
//indexing of an array starts from zero(counting)
//1.array.length>>tells us the lenght of an array
console.log(names.length);
//accessing elements in an array
//we access elements in an array using the bracket notation

console.log(names[4]); //accessing elements with their index
console.log(names[0]); //accessing elements with their index
console.log(names); //accessing all elements in an array

//adding an elements/item to an array
//we use the  array methos push to add an itme to an array >adds an element at the end of the array
names.push("alice", "kipkeino");
console.log(names);
/* ..adding elements at the first /beginning of an Array
we use the unshift method */
names.unshift("Jumping");
console.log(names);
//adding an element at a specified index>>we use the splice method
//name of Array(indexes ,what yyou want to be added)
names.splice(2, 4, "school ", "homework");
//can also be used to remove items
names.splice(0, 2, "school ", "homework");

console.log(names);
//removing elements from an array
//we use the pop method to remove elements >>at the end of the array
/* names.pop();
console.log(names); */
//create an array of 10 vehicles ,then use this array methods to add ,remove,check lenght of the array
length
pop
push
unshift
splice


//assignments
let vehicles = ["van","bus","motorbike","bicycle","taxi","policecar","scooter","train","tractor","scates"];
console.log(vehicles.length);
console.log(vehicles[7]);
console.log(vehicles);

vehicles.push("caravan");
console.log(vehicles);

vehicles.unshift("minibus");
console.log(vehicles);

vehicles.splice(2, 4, "school bus", "homework");
console.log(vehicles);

vehicles.pop(bus);
console.log(vehicles);



//MDN refrences


//slice ,map,indexof,concat,lastindex,fill,copywithin


//slice
//creates a new arry containing a portion of the original array i.e create a subchild of a child array
//takes two aurguments i.e the start of the slice and the end of the slice index

const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,8,19]
let newArray=number.slice(10,20)



///map method
//clones a new array...creates a new array by applying a function to each element of the parent/original array
//takes callback function as an argument
const number1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,8,19]
let newMapArray=number1.map(function(num){
    return num*2;
})
console.log(newMapArray);


//concert
//is used to join more arrays together
const namesNames=["faith","winnie","peter","stefan"]
const namesTwo=["mutanu","atieno","kariri","salvatore"]
const namesThree=namesnew.concat(namesTwo)//.concat(namesThree)









//1: Question:
//Write a function mergeArrays(arr1, arr2) that takes two arrays arr1 and arr2 and merges them into a single array, with the elements sorted in ascending order.

function mergeArrays(arr1, arr2){
    const combinedArray = [...arr1, ...arr2];

  // Sort the combined array in ascending order
  const sortedArray = combinedArray.sort((a, b) => a - b);

  return sortedArray;  
}
const array1 = [3, 8, 1, 6];
const array2 = [5, 2, 7, 4];

const mergedAndSorted = mergeArrays(array1, array2);
console.log("Merged and sorted array:", mergedAndSorted);   


//Scenario:
//You are building a music playlist app. You have two playlists from different sources. Write a function to merge these playlists into one,
// ensuring that the songs are sorted alphabetically by their titles.

function mergePlaylists(playlist1,playlist2) {
    const combinedPlaylists=[...playlist1,...playlist2];
    //sort playlists alphabetically
    const sortedPlaylists=combinedPlaylists.sort((a,b)=>a-b);
    return sortedPlaylists;
}

const playlist1 = [
  { title: "Song 1", artist: "Artist 1" },
  { title: "Song 2", artist: "Artist 2" },
  { title: "Song 3", artist: "Artist 1" },]
  const playlist2 = [
  { title: "Song 4", artist: "Artist 3" },
  { title: "Song 5", artist: "Artist 2" },
  { title: "Song 6", artist: "Artist 1" },]
  const mergedPlaylists = mergePlaylists(playlist1, playlist2);
  console.log("Merged and sorted playlists:", mergedPlaylists);




//2:
//Question:
//Write a function removeDuplicates(nums) that takes an array of numbers nums and 
//removes any duplicate numbers, returning a new array without duplicates.

function removeDuplicates(nums) {
    //create a set to store unique numbers
    const uniqueSet=new Set(nums);

    //converts the set back to an array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;


}

const inputArray= [1, 1, 5, 6, 7, 2, 2, 3, 3, 4, 5];
const result = removeDuplicates(inputArray);
console.log(result);


//Scenario:
//You are developing a survey application where users can select multiple options.
// Write a function to remove duplicate selections from the user's responses to ensure accurate data analysis.
function removeDuplicates(options){
  //convert arrays to a set to remove duplicates
  const uniqueSet=new Set(options);
  const uniqueArray=Array .from(uniqueSet);
  return uniqueArray;
}

const availableOptions=["yes","no","not sure"]
const results=removeDuplicates(availableOptions)
console.log(results)






//3:Question:

//Write a function capitalizeWords(sentence) that takes a sentence sentence and capitalizes the first letter of each word in the sentence.

function capitalizedWords(sentence){
  //split the sentence into words
  const words=sentence.split("");

  //capitalize the first letter of each word
  const capitalizedWords=words.map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  } );


  //jion the capitalised words back to a sentence
  const capitalizedSentence=capitalizedWords.join("");
  return capitalizedSentence;
}
const theSentence="this sentence is a test sentence hope it works!"
const results2 = capitalizedWords(theSentence)
console.log(results2)


Scenario:
//You are developing a blog platform where users can submit articles. Write a function to automatically 
//capitalize the titles of submitted articles for consistent formatting and readability.


function capitalisedTitles(sentences){
  //split the sentences into words
  const words=sentences.split(" ");
  //capitalise the titles
  const capitalisedWords=words.map((word)=>{
    if(word.toLowerCase().startsWith("the ") || word.toLowerCase().startsWith("a ")) return word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  } );
  //join the capitalised words back to a sentence
  const capitalisedSentence=capitalisedWords.join(" ");
  return capitalisedSentence;
}

const theSentences=["this is a test sentence", "hope it works!"]

const result3 = capitalisedTitles(theSentences)

console.log(result3)




//4:
Question:
//Write a function rotateArray(arr, k) that rotates an array arr by k positions to the right. 
//For example, if arr = [1, 2, 3, 4, 5] and k = 2, the output should be [4, 5, 1, 2, 3].



function rotateArray(arr, k) {
    // Calculate the effective rotation (in case k > arr.length)
    const effectiveRotation = k % arr.length;

    // Slice the array into two parts and rearrange them
    const rotatedPart = arr.slice(-effectiveRotation);
    const remainingPart = arr.slice(0, arr.length - effectiveRotation);

    // Concatenate the rotated part with the remaining part
    return rotatedPart.concat(remainingPart);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const k = 2;
const rotatedResult = rotateArray(originalArray, k);
console.log(rotatedResult); // Output: [4, 5, 1, 2, 3]



/*
Scenario:
You are building a calendar application. Write a function to rotate the weeks displayed in the calendar by a specified number of days, allowing users to view upcoming events with flexibility.

5:
Question:
Write a function findMissingNumber(nums) that takes an array of numbers nums containing unique integers from 1 to n (inclusive) and returns the missing number in the sequence. [1,2,3,5,6,7,8]

Scenario:
You are designing an inventory management system for a warehouse. Write a function to identify any missing product IDs in the inventory list, helping warehouse staff maintain accurate stock records.

6:
Question:
Write a function flattenArray(arr) that takes a nested array arr and returns a flattened array containing all the elements in the nested arrays.

Scenario:
You are developing a data visualization tool. Write a function to flatten a nested dataset of sales reports, making it easier to generate comprehensive charts and graphs for analysis.

7:
Question:
Write a function validateEmail(email) that takes an email address email and returns true if it is a valid email address format, false otherwise.

Scenario:
You are creating a user registration system for a website. Write a function to validate email addresses entered by users during the registration process, ensuring they meet the required format criteria.

8:
Question:
Write a function sumOfSquares(nums) that takes an array of numbers nums and returns the sum of the squares of all the numbers.

Scenario:
You are building a budgeting application. Write a function to calculate the total expenses for a month, where each expense category's spending is represented by the square of the amount spent.

9:
Question:
Write a function groupAnagrams(words) that takes an array of strings words and groups anagrams together. Anagrams are words that have the same characters but in a different order.

Scenario:
You are developing a language learning app with vocabulary exercises. Write a function to group words entered by users into anagrams, helping them recognize common patterns and improve their language skills.

10:
Question:
Write a function deepClone(obj) that deep clones a given object obj, meaning all nested objects and arrays are also cloned, not referenced.

Scenario:
You are working on a project management tool. Write a function to create a deep copy of a project task, including all subtasks and associated details, ensuring accurate task delegation and tracking.

11:
Question:
Write a function binarySearch(arr, target) that implements the binary search algorithm to find the index of target in a sorted array arr. Return -1 if target is not found.

Scenario:
You are developing a dictionary application. Write a function to implement binary search to efficiently locate word definitions, improving the app's responsiveness and user experience.

12:
Question:
Write a function fibonacci(n) that generates the first n numbers of the Fibonacci sequence and returns them as an array.

Scenario:
You are designing a tool for calculating compound interest. Write a function to generate the first n terms of the Fibonacci sequence, aiding users in predicting future investment growth.

13:
Question:
Write a function shuffleArray(arr) that shuffles the elements of an array arr in-place, so that every permutation is equally likely.

Scenario:
You are creating a quiz app with multiple-choice questions. Write a function to shuffle the order of answer options for each question, preventing users from predicting correct answers based on their position.

14:
Question:
Write a function longestSubstringWithoutRepeating(str) that takes a string str and returns the length of the longest substring without repeating characters.

Scenario:
You are developing a text editor with syntax highlighting. Write a function to determine the longest substring of code without any syntax errors, ensuring accurate highlighting for better code readability.*/