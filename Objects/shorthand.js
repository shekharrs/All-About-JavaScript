/*
  Short Hand✋✋
*/

function getOjects(name , city , course){
    return {
        name,                                // Short hand
        city,                                // Short hand
        course                               // Short hand
    }
}

const student1 = getOjects("Shekhar","Mumbai","DSA");
const student2 = getOjects("Shivansh","New Delhi","DEV");
const student3 = getOjects("Divyansh","Mangroni","React");

console.log({student1,student2,student3});
