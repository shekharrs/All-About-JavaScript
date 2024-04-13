/*
  Rest Parameter🔥 ---> ...rest / ...args
*/

function calculateTotalSum(a,b,c,...args) {
    console.log(a,b,c);
    console.log(args);
}

calculateTotalSum(1,4,7,3,9,2,6,8)




// Adding the sum of all the number by use of rest parameter or args parameter
function calculateTotal(...rest) {
    let total = 0;
    for(let value of rest){
        total += value; // total = total + value;
    }
    console.log(total);
}

calculateTotal(2,4,5,6,8,1,9,3);



