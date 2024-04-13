/* Ternary Operator */

let totalMarksSocred = 74;

// (totalMarksSocred < 40) ? console.log("You need to work hard") : console.log("You cleared the exam. Great!");

// const result = totalMarksSocred < 40 ? "You need to work hard" : "You cleared the exam. Great!";    //ternary operator 
// console.log(result);

// if(totalMarksSocred < 40){                   
//     console.log("You need to work hard!");
// } else if(totalMarksSocred < 60){
//     console.log("B Grade");
// } else if(totalMarksSocred < 75){
//     console.log("A Grade");
// } else if(totalMarksSocred < 85){
//     console.log(A+ Grade);
// } else{
//     console.log("Genius");
// }


const result = totalMarksSocred < 40 ? "You need to work hard!" : totalMarksSocred < 60 ? "B Grade" : totalMarksSocred < 75 ? "A Grade" : totalMarksSocred < 85 ? "A+ Grade" : "Genius";    //ternary operator
console.log(result);