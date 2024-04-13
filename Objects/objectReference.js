/*
  Object Reference && Shallow Copy📚

  A shallow copy indicates that certain values of the 
  new variable are still connected to the original variable, 
  but a deep copy means that all of the values of the 
  new variable are separated from the original variable.
*/

const person1 = {
    Name: "Shekhar",
    address: {
        City: "Mumbai",
        State: "MH",
    }
}

/*

const person2 = person1;
person2.Name = "Om";                
person2.City = "Surat";
person2.State = "Gujrat";

console.log(person1);
console.log(person2);
*/

const person2 = Object.assign({},person1);
person2.Name = "Om";
person2.address.City = "Sirsa";
person2.address.State = "Haryana";

console.log(person1);
console.log(person2);