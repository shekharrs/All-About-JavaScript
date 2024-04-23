/**
 * Async - Await🔥
 
   async and await are features in JavaScript used to work with promises more easily. 
   They provide a more concise and synchronous-looking way to write asynchronous code. 
   async functions always return a promise, and the await keyword is used to wait for 
   a promise to resolve.
   
 */

// async function showResponse() {
//   try {
//     let promise = new Promise((resolve, reject) => {
//       reject("Promise is rejected");
//     });
//     let result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log("Error Occured:",error);
//   }
// }

// showResponse();

// Practical implementaion of asyn-await with use of ES6 (arrow function)

const getUserData = async () => {
  try {
    const promise = await fetch("https://fakestoreapi.com/products");
    const response = await promise.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

getUserData();