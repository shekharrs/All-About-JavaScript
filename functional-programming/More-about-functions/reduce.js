/*
 Reduce() method🚀
 *reduce() method: It reduces all the elements of the array to a single value 
 by repeatedly applying a function. It is an alternative of using a loop and 
 updating the result for every scanned element. 
*/

// 1st way
const arr = [1,2,3,4,5];

const output = arr.reduce((pre,cur) => {
    return pre + cur;
});
console.log(output);





// 2nd way
const arrOfNum = [1,2,3,4,5];

const reducerFun = (pre,cur) => pre + cur;
// 0 + 1 = 1 --> pre
// 1 + 2 = 3 --> pre
// 3 + 3 = 6 --> pre
// 6 + 4 = 10 --> pre
// 10 + 5 = 15 --> pre

const result = arrOfNum.reduce(reducerFun,0);
console.log(result);


