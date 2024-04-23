/**
 * Promise.all( [arrOfPromise] ) 😎
   Promise.all() is a built-in JavaScript method used to handle multiple promises 
   at once. It takes an array of promises as input and returns a single Promise. 
   This single Promise is fulfilled when all of the promises in the array passed 
   to Promise.all() have been fulfilled. If any of the promises in the array are 
   rejected, the Promise returned by Promise.all() is rejected with the reason of 
   the first promise that was rejected.
   
 */

// let promiseOne = new Promise((resolve) => {
//     setTimeout(() => resolve("Promise One is resolved!"), 3000)
// });

// let promiseTwo = new Promise((_, reject) => {
//     setTimeout(() => reject("Promise Two is rejected!"), 2000)
// });

// let promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Promise Three is rejected!"), 1000)
// });

// Without using Promise.all()
// promiseOne.then((res) => console.log(res));
// promiseTwo.then((res) => console.log(res));
// promiseThree.then((res) => console.log(res));


// Using Promise.all()
// let arrOfPromise = [promiseOne, promiseTwo, promiseThree];
// let promise = Promise.all(arrOfPromise);
// promise.then((res) => console.log(res)).catch((err) => console.log(err));








// Practical implementation of Promise.all()

let users = ["sambolt234", "patcum656"];

let arrayOfPromise = users.map((user) => 
    fetch(`https://api.github.com/users/${user}`)
);

let promise = new Promise.all(arrayOfPromise);
promise
   .then((respnse) => respnse.forEach((data) => console.log(data)))
   .catch((err) => console.log(err.message));




  