/*
  Map - Filter⚡🔥 

  *map() method: It applies a given function on all the elements of the array 
  and returns the updated array. It is the simpler and shorter code instead 
  of a loop. 

  *filter() method: It filters the elements of the array that return false for 
  the applied condition and returns the array which contains elements that 
  satisfy the applied condition. It is a simpler and shorter code instead of 
  the below code using a loop: 
*/


/* 
map() method🔥

const arr = [1,2,3,4,5];

function getSquare(arr) {
    let temArr = [];
    for(let number of arr) {
        temArr.push(number ** 2);
    }
    return temArr;
}

const output = getSquare(arr);
console.log(output);

[ All the loop and making tempArr are all handle by the use of Map method👇]
*/
const arr = [1,2,3,4,5];

function getSquare(number) {
    return number ** 2;
}

const result = arr.map(getSquare);
// console.log(typeof result);

const output = arr.map(number => number ** 2);
console.log(output);












/*
filter() method🔥

const arrNum = [1,2,3,4,5,6,7,8];

function filterOfNum(arrNum) {
    let tempArr = [];
    for(let number of arrNum) {
        if(number > 5){
            tempArr.push(number);
        }
    }
    return tempArr;
}

const resultOutput = filterOfNum(arrNum);
console.log(resultOutput);

[ With use of filter method using loop concept are replaced simpliy👇]
*/
const arrOfNum = [1,2,3,4,5,6,7,8];

const resultOutput = arrOfNum.filter(number => number > 5);
console.log(resultOutput);



