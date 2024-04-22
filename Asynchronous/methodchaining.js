/**
 * Method chaining 🚀
   Method chaining in JavaScript is a technique that allows multiple methods to be 
   called on the same object in a single statement. Instead of writing multiple 
   statements to perform various actions on an object, method chaining enables you 
   to chain together these actions, making your code more concise and readable.
 */


// Without method chaining
let string = "Hello, world!";
let result = string
    .toUpperCase()   // Convert the string to uppercase
    .split(" ")      // Split the string into an array of words
    .reverse()       // Reverse the order of the words in the array
    .join(" ");      // Join the words back into a single string

console.log("Without Method Chaining-",result);  // Output: "WORLD! HELLO,"



// With method chaining
let stringLetter = "Welcome, Back!" .toUpperCase() .split(" ") .reverse() .join(" ");
console.log("Method Chaining-",stringLetter);

