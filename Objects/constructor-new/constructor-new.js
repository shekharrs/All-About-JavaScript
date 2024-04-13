/* 
  new keyword and constructor function
  
  *constructor functions are typically are regular functions
  They have 2 conventions though - 
  They are named with first Capital letter.
  They should be executed only with "new" operator.
*/



function User(name , courseNo) {
    (this.name = name), 
    (this.courseNo = courseNo)
}
const user1 = new User("Shekhar",101);
const user2 = new User("Om",102);
const user3 = new User("Nishi",103);

console.log(user1);
console.log(user2);
console.log(user3);