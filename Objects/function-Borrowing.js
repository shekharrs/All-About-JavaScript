/*
  function borrowing - call, apply & bind
  *function borrowing - Function borrowing is the concept of reusing a method 
  from one object on another object. This can be useful when you have two objects 
  that share similar properties or functionality but are not related through 
  inheritance.

  *call - The call() method allows us to call a function and specify the value 
  of this explicitly.

  *apply - The apply() method is similar to call(), but it accepts an array of 
  arguments instead of individual arguments. This can be useful when you have a 
  dynamic number of arguments to pass to the function.

  *bind - The bind() method creates a new function with this set to a specific 
  value. It returns a new function that we can call later. We can pass in the 
  object we want to borrow the method from as the argument to bind(), which will 
  set this to that object.
*/

const user1 = {
    name: "Shekhar",
    rollNo: 101,
    displayMessage() {
        console.log(this.rollNo);  // Implicit Binding - within a function it is calling by use of this keyword.
    }
};

const user2 = {
    name: "Nishi",
    rollNo: 102
};

const user3 = {
    name: "Om",
    rollNo: 103
};

function sayHello(degree,year) {
    console.log(this.name,degree,year);
}

/* Explicit Binding - call , apply & bind all of these methods are explicit binding */

// call
// sayHello.call(user1,"CS",2021);
// sayHello.call(user2,"ECE",2022);
// sayHello.call(user3,"CE",2024);

// apply
// sayHello.apply(user1,["CS" , 2021]);
// sayHello.apply(user2,["CE" , 2022]);
// sayHello.apply(user3,["EE" , 2024]);

// bind
const resultOfUser1 = sayHello.bind(user1,"CS",2021);
const resultOfUser2 = sayHello.bind(user2,"EC",2022);
const resultOfUser3 = sayHello.bind(user3,"EE",2023);

resultOfUser1();
resultOfUser2();
resultOfUser3();