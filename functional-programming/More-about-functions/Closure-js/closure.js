/*
 Closure🔥⚡
 * A Closure is the combination of a function bundled together with references to 
 its lexical environment.

 * In other words, a closure is a function that remembers its outer variables 
 and can acess them
*/

function x() {
  let a = 10;
  function y() {
    let b = 20;
    console.log(a);
    function z() {
      console.log(b);
    }
    z();
  }
  y();
}
x();






// Practical use case of closure in JavaScript to increment the value by one
// const myName = document.getElementById("topic-title");
// const clickBtn = document.getElementById("click-me");

// function textSizer() {
//   let count = 1;

//   function increment() {
//     console.log(count++);
//   } 
//   return increment;
// }

// const counter1 = textSizer(); // Removed parameter since it's not used
// counter1(); // Logs 1

// clickBtn.addEventListener("click", counter1); // Changed event name to "click" and passed counter1 directly


