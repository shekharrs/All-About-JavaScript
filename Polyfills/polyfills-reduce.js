/**
 * Polyfills for Reduce🔥
 */

const arr = [1,2,3,4,5,6];

function getSum(acc, cur) {
    return acc + cur;
}

Array.prototype.myReduce = function(callback, initalValue){
    let acc = initalValue ? initalValue : this[0];            // acc = index 0(1);
    for(let i= initalValue ? 0 : 1; i<this.length ; i++){
        acc = callback.call(this, acc, this[i], i, this);
    }
    return acc;
}

const total = arr.myReduce(getSum,9);
console.log(total);

