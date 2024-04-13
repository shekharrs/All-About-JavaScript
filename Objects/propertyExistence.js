/*
  Property Existence🔥
  for in - by using for in we can check the property 
  is exist or not
*/

const obj = {
  Name: "Shekhar",
  City: "Mumbai"
}

const isPropertyFound = "age" in obj;    // using in we can check the property is exist or not
// console.log(isPropertyFound);

for(let key in obj){          // for loop ---> in 
  console.log(key,obj[key]);
}