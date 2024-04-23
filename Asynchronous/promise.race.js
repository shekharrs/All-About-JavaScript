/**
 * Promise.race()  //  Promise.any()
 
   Promise.race - This function is like Promise.all, but instead of waiting for all 
   promises to settle, it only waits for the first one to settle and retrieves its 
   result or error.

   Promise.any - It returns a single promise that fulfills as soon as one of the 
   promises in the iterable fulfills, with the value from that promise. If all of 
   the given promises are rejected, it will reject with an AggregateError, a new 
   subclass of Error that groups together individual errors.
 */

let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise One is resolve");
    }, );
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise Two is reject");
    }, );
});

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Three is resolve");
    },);
});

// Promise.race([promiseOne, promiseTwo, promiseThree])            // Promise.race()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));




Promise.any([promiseOne, promiseTwo, promiseThree])          // Promise.any()
   .then((res) => console.log(res));  
