/*
  Destructuring Objects🔥
  Destructuring objects in JavaScript involves unpacking properties 
  from objects into separate variables.
*/

// let obj = {
//     name: "Shekhar",
//     address: {
//         state: "MH",
//         city: "Mumbai",
//         locality: "Powai"
//     },
//     courses: ["html","css","js","react","redux"]
// }

// let {name, ...rest} = obj;
// console.log(name);
// console.log(rest);

// let {name: userName , address: userAddress} = obj;
// console.log(userName);
// console.log(userAddress);

const employees = {
  engineers: {
    em1: {
      id: 1,
      name: "Shekhar",
      occupation: "Data engineer",
    },
    em2: {
      id: 2,
      name: "Yo",
      occupation: "Frontend engineer",
    },
  },
  placement: {
    em3: {
      id: 3,
      name: "Honey",
      occupation: "Backend engineer",
      acchivement: {
        first: "learning Dev",
        second: "exploring the new tech stack",
        third: "building new things"
      }
    },
  },
  youtube: {
    em4: {
      id: 4,
      name: "Paaji",
      occupation: "Full stack engineer",
    },
  },
};


// let {engineers: {em2: {name,occupation}}} = employees;
// console.log(name , occupation);


// let {youtube: {em4: {name,occupation}}} = employees;
// console.log(name, occupation);


// let {placement: {em3: {acchivement: {first,second}}}} = employees;
// console.log(first, second);

