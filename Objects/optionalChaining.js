/*
  Optional Chaining✌😎
  it does not report the error, instead it returns a 
  value which is undefined.
*/

const user = {
    name: "Shekhar",
    course: "DSA",
    address: {
        city: "Mumbai",
        street: "one way",
    },
    likes: "Eat Sleep Code Repeat♻",
    getDisplayMessage: function(){
        console.log("Welcome, Shekhar in the kiddo world!");
    }
}

// Soln 1
// if(user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("address not found👀")
// }


// Soln 2 ---> Optional Chaining (?.)
// console.log(user.address?.city)


user.getDisplayMessage();
console.log(user.getUserName?.());
