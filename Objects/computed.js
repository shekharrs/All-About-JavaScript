/*
  Adding property to Object🚀🔥
  Computed Property⚡🔥
*/

const readlineSync = require("readline-sync");
const key = readlineSync.question("What do want to know about the object (name/course/city/state) - ");
const courses = readlineSync.question("What do you want to learn (html/css/js/dsa/python/java/react) - ")
const obj = {
    name: "Shekhar",
    greetMessage: "Hello geeks!!",
    [courses]: "You added the best course in this courses series⚡"
}

obj.city = "Mumbai";     // Added the property to the object
obj.state = "MH";        // Added the property to the object

console.log(obj[courses]);