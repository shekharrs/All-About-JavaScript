/**
 * Polyfills for bind⚡
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