/**
 * Callback Functions ♻
 * A callback function is a function that is passed as an argument to another function 
 * and is invoked or called by that function at a certain point in time. 
 */


function greeting(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Passing the function sayGoodbye as a callback
  greeting("Iron Man", sayGoodbye);
  



  
