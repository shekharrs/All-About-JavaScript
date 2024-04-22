/**
 * Creating a promise👇
 */

const reqStatus = true;

let db = [
    { id: 1, name: "Sam"},
    { id: 2, name: "karan"}
]

let promise = new Promise((resolve, reject) => {
    if(reqStatus){
        setTimeout(() => resolve(db), 2000);
    }else{
        const error = new Error("oops! something went wrong");
        reject(error.message);  
    }
})

promise.then((response) => console.log(response));
