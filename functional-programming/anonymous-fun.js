/** Function
 * Anonymous function & function Expression
 
let anonymousFunction = function(){
    console.log("Hello from gfg.");    
}

console.log(typeof anonymousFunction);  
anonymousFunction();

 */


var greet = (name) =>{         //Anonymous function
    console.log(`Hello ${name} to tech zone!!`);
}

greet("Programmers");



setTimeout(function(){          //Using setTimeout to declare a function a delay of 5sec.
    console.log("Welcome to tech zone guys!!!")
}, 5000);