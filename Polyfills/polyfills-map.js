/**
 * Polyfills for Map⚡
 */



/**                                   👇🎃👇
 
  - **Parameters**:
    - `callback`: The function to call for each element of the array.
    - `thisArg`: Optional. Value to use as `this` when executing `callback`.

- **Functionality**:
    - `let arr = this;`: `this` refers to the array itself.
    - `let newArr = [];`: Create an empty array to store the results.
    - `for (let i = 0; i < arr.length; i++) { ... }`: Iterate over each element of the array.
    - `newArr.push(callback.call(thisArg, arr[i], i, arr));`: Call the `callback` function for 
    each element, passing the element, index, and the original array as arguments, and push the 
    result into the new array.

- **Return**: 
    - `return newArr;`: Return the new array containing the results of calling 
    the provided function on every element in this array.

 */

/*
if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
      let arr = this;
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(callback.call(thisArg, arr[i], i, arr));
      }
      return newArr;
    };
  }
  // To use the map method, simply call it on an array like this:
  let myArray = [1, 2, 3, 4, 5];
  let doubledArray = myArray.map(function(num) {
    return num ** 2;
  });
  console.log(doubledArray); // [2, 4, 6]

*/




// Simplest way to use Polyfills in map
if(!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        let newArr = [];
        for(let i=0; i<this.length; i++){
            newArr.push(callback(this[i]));
        }
        return newArr;
    };
}

let myArray = [1,2,3,4,5,];
let doubledArray = myArray.map(function(num) {
    return num ** 2;
});
console.log(typeof doubledArray);
console.log(doubledArray);



  