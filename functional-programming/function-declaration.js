/** function declaration / function statement 
 
 function greetMessage(name , city){        //name is called as a parameter
    console.log(`Welcome ${name} from ${city} to gfg`);
}

//Calling the function
greetMessage("Shekhar" , "Mumbai");        //Shekhar & Mumbai is called as an argument
greetMessage("Ram" , "Ayodhya");
greetMessage("Hanuman" , "Ayodhya");


*/



/** Excersise for function declaration or function statement
 
 function calculateSum(min , max){
    console.log(`The ${min} is min value and ${max} is the max value `);
}

calculateSum(1 , 10);

 */




/** Function Excerise 
 
 function calculateSum(min , max){      //parameter of function
    let total = 0;
    for(let i=min;i<=max;i++){
        total = total + i;             //total is equal to 0 and 0 is added to min which is 1 [0+1+2.......]
    }
    return total;                      //return total 
}

const result = calculateSum(1 , 20);   //calling the function / passing argument of parameter
console.log(result);

*/





/*
  functional revision :

  
  function loginUserName(num1 , num2) {
    return num1 + num2;
}

const value = loginUserName(5,5);
console.log(value);
*/






