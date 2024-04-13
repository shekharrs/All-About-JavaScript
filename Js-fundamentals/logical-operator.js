/**
 * logical Operator with Conditional Statement
1. AND &&  --> If all the given condition is true then && operator will return true if one of the condition is false it will return false
2. OR ||   --> In OR Operator if one of the condition is true it will retur true otherwise it will return false
3. NOT !   --> In NOT Operator it will reverse the false condition into true and true condition into false
4. NULLISH COALESCING ??  --> In Nullish Coalescing if the condition is null or undefiend then it will return nullish coalescing condition
 */

// const physics = 90;
// const maths = 87;
// const chemistry = 89;
// const biology = 85;

// if (physics > 85 && chemistry > 85 && maths > 85) {      //AND (&&) OPERATOR
//     console.log("You are eligible for Enginering!");
// } else {
//     console.log("You are not eligible for Enginering!")
// }


// if(physics > 90 || chemistry > 90 || biology > 84) {        //OR (||) OPERATOR
//     console.log("You are eligible for Enginering!");
// } else {
//     console.log("You are not eligible for enginering!");
// }


// const isStudentEligible = true;         //NOT (!) OPERATOR

// if(!isStudentEligible) {
//     console.log(!isStudentEligible);
//     console.log("You are eligible");
// } else {
//     console.log(!isStudentEligible);
//     console.log("You are not eligible");
// }


let studentName = undefined;                //NULLISH COALESCING (??)
console.log(studentName ?? "Topper");





























/** Short circuting */

const firstName = "Pro";
const nickName = "Coder";

const userName = firstName || nickName;
console.log(`Name: ${userName}.`);



console.log(3 || 2 || 1);       //true || true || true
console.log("undefined" && "null" && "");   //true && true && false