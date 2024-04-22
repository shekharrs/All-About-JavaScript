/**
 * Promises - Promises is an object that has the status
 * of an async operation, and its corresponding value.
 
 Request ---> pending / fulfilled / rejected
 response ---> (fulfilled --> value) / (rejected --> error)
 */

const URL = "https://fakestoreapi.com/products";

let promise = fetch(URL);
promise
   .then(function (response) {
    return response.json();
   })
   .then(function (data) {
    console.log({data});
   })
   .catch(function (error) {
    console.log("Error Occured", error);
   })