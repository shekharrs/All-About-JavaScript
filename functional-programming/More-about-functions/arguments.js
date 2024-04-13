/*
 Arguments Object⚡⚡
 *Arguments Object is Non-Arrow Function
  arguments object is an array like object present locally inside a function
  and it contains value of all the arguments passed to a function
*/
function calculateTheTotal() {
    let sum = 0;
    for(let value of arguments){
        sum += value;  // sum = sum + value
    }
    // console.log(sum);
    const arr = [...arguments];   // spread operator
    console.log(arguments);
    console.log(arr);
}

calculateTheTotal(1,2,3,4,5);






// Explaination for arguments object✔
function calculateTotal(a=10) {
    a = 100;
    console.log(a);
    console.log(arguments);
    arguments[0] = 9;
    console.log(arguments);
    console.log(a);
}

calculateTotal(5);