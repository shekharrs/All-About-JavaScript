/*
  Array - Non-primitive data types

let studentName = ["Shekhar" , "Om" , "Shivansh" , "Divyansh" , "Aman" , "Devin"]

let arrayLength = studentName.length;        // Index Method  

for(let i=0;i<arrayLength;i++){
    console.log(studentName[i])    
}


for(let name of studentName){                // for let of Method - to print the element in the given array 
    console.log(name);
}


for(let index in studentName){               //for let in Method - to print the index number in the given array
    console.log(index);
}

*/





/*
  Array Methods - Push & Concat
  Mutable Object (Changed) OR Immutable Object (Not Changed)

let fruits = ["Apple", "Banana", "Chiki", "Dragon fruit", "Melon"]
console.log(fruits);
fruits.push("Mango", "Gauava")    // push helps to add item in the array
console.log(fruits)

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [9,10,11,12]

let arr4 = arr1.concat(arr2);        // concat helps Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let arr5 = arr1.concat(arr2,arr3)
console.log(arr4)
console.log(arr5)
*/





/** 
  pop , slice , splice

/* pop() - Remove the last element from an array and returns it.

let course = ["HTML" , "CSS" , "JS" , "REACT" , "JQUERY"];
console.log(`Course - ${course}`)
let removeItem = course.pop();
console.log(`Remove Item - ${removeItem}`)
console.log(`Updated Course - ${course}`) 

*/

/* slice() - Remove the specified element (specified the index position from starting point to ending point)

let course = ["html" , "css" , "js" , "react.js" , "jquery"]
let value = course.slice(0,4);
console.log(course)
console.log(value)

let userName = "SHEKHAR";                 // use case of slice() method
let nameDetails = userName[0].toUpperCase();
let formDetails = nameDetails + userName.slice(1).toLowerCase();
console.log(formDetails);

*/

/* splice() - Remove the element and if necessary it will add the element

let course = ["html","css","js","react","jquery","vue.js","python"]
course.splice(4,0,"java");
console.log(course);

*/





/*
  Array - The array.includes() method is used to know either a particular element 
  is present in the array or not and accordingly, it returns true or false 
  i.e, if the element is present, then it returns true otherwise false.

let availableSize = ["S","M","L","XL","XXL"]
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("Which Size of T-Shirt do you want (S,M,L,XL,XXL,XXXL) : ")

const isSizeAvailable = availableSize.includes(userSize)
if(isSizeAvailable){
    console.log("Hey, your size of t-shirt is available")
}else{
    console.log("Sorry , right know your size of t-shirt is not available")
}

let courseForCS = ["html","css","js","react","dsa","python"];       // Practice: Array - includes()
const readlineSync = require("readline-sync");
const courseSection = readlineSync.question("Which tech stack do you want to learn (html,css,js,react,dsa,angular) - ")

const studentCourses = courseForCS.includes(courseSection);
if(studentCourses){
    console.log("Hey, Ninja the selected course of your is there in the learning bucket list")
}else{
    console.log("Hey, Ninja the selected course of your is not available right know")
}
*/





/*
  Array - The arr.sort() method is used to sort the array in place in a given order 
  according to the compare() function. If the method is omitted then the array is sorted 
  in ascending order.

let fruits = ["Apple","Banana","Melon","Cherry","Kiwi","Chiki"]  // Sort in String
fruits.sort();
console.log(fruits)


let studentId = [1,2,3,4,5,6,7,8,9,10]                           // Sort in Number

function sortAsscendingNumber(a,b){
    return a - b
}

function sortDecendingNumber(a,b){
    return b-a;
}

studentId.sort(sortDecendingNumber);
console.log(studentId);

*/





/*
  split and join 🔥⚡
  Madam ---> Madam ---> Palindrome String
  split - str.split() method is used to split the given string into an 
  array of strings by separating it into substrings using a specified separator 
  provided in the argument.

  join - arr.join() method is used to join the elements of an array into a string. 
  The elements of the string will be separated by a specified separator and its default 
  value is a comma(, ).

let inpStr = "Shekhar";
const arrStr = inpStr.split("");  
arrStr.reverse();
const reverseStr = arrStr.join("");
console.log(reverseStr);
*/





/*
  spread array🔥🚀 
   the spread syntax (often referred to as the spread operator) is represented by three 
   consecutive dots ... It allows an iterable such as an array expression or string to be 
   expanded in places where zero or more arguments (for function calls) or elements 
   (for array literals) are expected.

const arr1 = [1,2,3,4]
const arr2 = [7,8]
const arr3 = [...arr1,5,6,...arr2,9,10]
console.log(...arr3);
*/





/*
  Destructuring Array🔥⚡
  provides a shorthand syntax to extract or unpack array 
  elements or properties of an object into distinct variables 
  using a single line of code.

const arr = [["html","css","js"], 1, 2, 3, 4, 5]
const [courses , ...rest] = arr;

console.log(...rest)
console.log(courses)



Swap Numbers 
let a = 10;
let b = 20;

[a,b] = [b,a];
console.log("A - ",a)
console.log("B - ",b)
*/





/*
  Copying an Array --> Array Reference📚📚
  Shallow copy: In the case of shallow copy when we copy the original object 
  into the clone object then the clone object has the copy of the memory address 
  of the original object i.e. both point to the same memory address.

// Shallow Copy  
let arr1 = [1,2,3,4,5]; // It is referring to the memory location to abc123
let arr2 = arr1; // It is also referring the same memory location (arr1) 

console.log("Array of 1 - ",arr1);
console.log("Array of 2 - ",arr2);

arr2.push(6,7,8,9,10);

console.log("Updated the Array of 1 - ",arr1);
console.log("Updated the Array of 2 - ",arr2);


// Spread Operator
let arr1 = [1,2,3,4];  
let arr3 = [...arr1];
console.log("Array of 1 -",arr1);
console.log("Array of 3 -",arr3);

arr3.push(5);
console.log("Array of 1 -",arr1);
console.log("Updated Array of 3 -",arr3);


// For loop
let arr4 = [1,2,3,4];
let arr5 = [];

for(let number of arr4){
  arr5.push(number);
}

console.log("Array of 4 -",arr4);
console.log("Array of 5 -",arr5);

arr5.push(5);

console.log("Array of 4 -",arr4);
console.log("Updated Array of 5 -",arr5);
*/






      


