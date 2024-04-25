/**
 * Polyfills for Call & Apply🚀
 */

/* for call 👇

The call method is a built-in function in JavaScript that allows you to call a function 
with a specific this context and arguments. When you call a function using the call 
method, you pass the object that you want to use as the this context for the function 
as the first argument, and any arguments that you want to pass to the function as 
subsequent arguments. Here's an example:


const obj = {
    name: "Sam",
    city: "Mumbai",
};

function displayUserInfo(state) {
    console.log(`Hi, My name is ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myCall = function(context, ...args) { 
    context.showMessage = this;            // created a showMessage function in obj;
    context.showMessage(...args);          // executed the function with the given argumnets;
    delete context.showMessage;            // deleted the function from obj, when the user is done;
}

displayUserInfo.myCall(obj, "Maharashtra");
console.log(obj);

*/








/* for apply 👇

The apply() method is used to call a function with a given this value and arguments 
provided as an array (or an array-like object). If you're using an older version of 
JavaScript that doesn't support this method, you can create a polyfill to add this 
functionality.


const obj = {
    name: "Elie",
    city: "mumbai",
};

function displayUserInfo(state) {
    console.log(`Hie, My name is ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myApply = function(context, args) {
    context.showMssg = this;
    context.showMssg(...args);
    delete context.showMssg;
}

displayUserInfo.myApply(obj, ["maharashtra"]);
console.log(obj);

*/