/**
 * Polyfills for bind⚡
   
   In JavaScript, the bind() method is used to create a new function with a fixed 
   this value and some of its arguments pre-specified. When a function is called with 
   bind(), a new function is returned with the this value bound to the argument passed 
   to bind() and any additional arguments passed to bind() are pre-specified as the 
   first arguments of the new function.
   
 */

const obj = {
    name: "John",
    city: "mumbai",
};

function getUserInfo(state) {
    console.log(`Hie, My name is ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myBind = function(context, ...args) {
    context.wrapperFun = this;
    // console.log(args);
    return function(...rest) {
        // console.log(rest);
        context.wrapperFun(...args, ...rest);
        delete context.wrapperFun;
    }
}

const bindFun = getUserInfo.myBind(obj, "maharashtra");
bindFun();