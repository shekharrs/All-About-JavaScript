/**
 * Polyfills for filter🚀
 */

const arr = [1, 2, 3, 4, 5, 6];

function getFilterArr(number) {
  return number > 2;            // returns a boolean value: true or false
}

Array.prototype.myFilter = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {     // index of the array: 0,1,2,3,4,5 - [1,2,3,4,5,6]
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

const result = arr.myFilter(getFilterArr);
console.log(result);
