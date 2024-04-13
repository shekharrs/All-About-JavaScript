/*
  Iterating over strings :

simply use for(let char of message) to iterate through every character of the string.
let displayMessage = "Hello Geeks"

for(let char of displayMessage){
    console.log(char);
}


Problem: Find the number of times the letter 'e' occurs in our message.
let displayMessage = "Hello Geeks"
let count = 0;

for(let char of displayMessage){
    if(char === "e"){
        count++;
    }
}
console.log("e occurs "+count+" times");

*/





/*
  String Method
  charAt() |  charCodeAt()

  charAt()
const displayMessage = "Hellow Geeks"; 
const index = 5;
const char = displayMessage.charAt(index);
console.log(`The index of ${index} is : ${char}`);

  charCodeAt() --> ASCII 
const displayMessage = "Hellow Geeks";
const index = 0;
const char = displayMessage.charAt(index);
const asciiCode = displayMessage.charCodeAt(index);
console.log(`The ASCII Code of ${char} is ${asciiCode}`);


exercise ---> // print: geeks -->  Output : iffmu
*/





/*
  String Method - indexOf

  function findCharacter(text, char){
    const index = text.indexOf(char, "3")
    if(index === -1){
        return "Character not found"
    }else{
        return "Character found"
    }
}
const result = findCharacter("Hellow Geeks" , "w")
console.log(result);

Arrow function() => {}
const findCharacter = (text , char) => text.indexOf(char) === -1 ? "Character not found" : "Character found";
const result = findCharacter("Hellow Geeks" , "j")
console.log(result)
*/





/*
  String Method - string.includes()

const displayMessage ="xyz";
const vowels = "aeiouAEIOU";
let flag = false;

for(let char of displayMessage){
    if(vowels.includes(char)){
        flag = true;
        break
    }else{
        flag = false;
    }
}

if(flag){
    console.log("String have vowels in it!!")
}else{
    console.log("String does not have vowels in it!!")
}
*/




/*
  uppercase() & lowercase()

const displayMessage = "Hellow Geeks !!!";
console.log(displayMessage.toLowerCase());  // Converting the String in Lower Case
console.log(displayMessage);                // Displaying the String in which it is
console.log(displayMessage.toUpperCase());  // Converting the String in Upper Case

*/





/*
  subString() : The substring() is an inbuilt function in 
  JavaScript which is used to return the part of the given
  string from start index to end index. Indexing start from zero (0).

const userName = "Hellow Geeks to the programming era !!";
const subString = userName.substring(0,12); // subString method()
console.log(subString + "...");

const userName = "Hey, everyone to the new show";
const result = userName.slice(0,3);      // slice method()
console.log(result + "...");
*/





/*
  String.trim()

const text = "         Hellow dosto chalye shuru karte hai         ";

console.log(text.trim()); // in trim it remove the extra space in string
console.log(text.trim().substring(0,6));
*/





/*
  GFG Problems Question:
  
  Given a string S and
  two integers L and R. Print the characters in the range L to R of the string.
*/

// const subString = "cdbkdub";
// console.log(subString.substring(0,6));


// function countWords(str) {
//   // Split the string into an array of words using whitespace as the delimiter
//   let wordsArray = str.split(/\s+/);
  
//   // Return the number of elements in the array, which represents the count of words
//   return wordsArray.length;
// }

// // Example usage:
// let sentence = "This is a sample.";
// console.log(countWords(sentence)); // Output: 5









 






















