/*
  this keyword 
  Refers to the Object that is executing the function
*/

// const obj = {
//     name: "Loop",
//     displayMessage: function(){
//         console.log(this);            // Implicit Binding
//     }
// }

// obj.displayMessage();


// function calculateSum () {
//   console.log(this);      // this ---> In calculateSum function it directly execute the global scope
// }

// calculateSum();


/* Exercise for practice "this" keyword */

// Exercise-01
// function displayMessage () {
//   console.log(this);
// }

// const user1 = {
//   name: "Shekhar",
//   showMessage: displayMessage,
// }
// console.log(user1);
// user1.showMessage();

// Exercise-02
// function displayMessage () {
//   console.log(this);
// }

// const user1 = {
//   name: "Shekhar",
//   showMessage: function () {
//     displayMessage();
//   }
// }

// user1.showMessage();

// Exercise-03
// const displayMessage = () => {
//   console.log(this);
// };

// const user1 = {
//   name: "Shekhar",
// };

// displayMessage.apply(user1);

// Exercise-04
// function User() {
//   console.log(this);
// }

// const user1 = new User();

// Exercise-05
// const person = {
//   name: "Shekhar",
//   sayHi: function() {
//     console.log(`Welcome ${this.name} to the tech world!`);
//   }
// };

// person.sayHi();

// Exercise-06
const person = {
  name: "Shekhar",
  sayHi: function() {
    console.log(`Welcome ${this.name}`);
  }
};

const person2 = person.sayHi;
// console.log(person2);
person2();

