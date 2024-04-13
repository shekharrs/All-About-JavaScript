/* 
Hoisting is a process whereby you can access the values
of a variables or function even before it is initialized
*/


// var age = 23;
// console.log(age);

// var getUserName = function() {
//     console.log("userName")
// }

// function showName() {
//     console.log("This Side Shekhar here !!")
// }

// showName();
// getUserName();




/*
 Hoisting - let & const
 [ let & const work same in hoisting ]
*/

/* Temporal Dead Zone Start from here. */
// console.log(x);  
// console.log(y);

// const x = 10;         /* Temporal Dead Zone End here. */
// var y = 20;

