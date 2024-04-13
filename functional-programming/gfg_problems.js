/** Given a positive integer, N. Find the factorial of N. 
 
 Explanation: 5 x 4 x 3 x 2 x 1 = 120

 input: 5 
 output: 120


 function factorialNumber(num){        // num is a parameter of function
    if(num === 0 || num === 1){
        return 1;
    } else{
        return num * factorialNumber(num -1);   // 5 x (5-1) = 4 -->5 x 4 x 3 x 2 x 1 = 120
    }
}

const result = factorialNumber(5);     // calling the function and passing argument of parameter
console.log(result);

*/







/** You have to find exact volume of some objects just by knowing the some of their dimensions. 
 Here we will find volume of a cube and a rectangular box by completing the given functions.



 
 // Function to calculate the volume of a cube
function cubeVolume(side) {
    if (side <= 0) {
        return "Side length must be a positive number.";
    }

    return Math.pow(side, 3); // side^3
}

// Function to calculate the volume of a rectangular box
function boxVolume(length, width, height) {
    if (length <= 0 || width <= 0 || height <= 0) {
        return "Dimensions must be positive numbers.";
    }

    return length * width * height;
}

// Example usage:
const cubeSide = 3;
const cubeResult = cubeVolume(cubeSide);
console.log(`Volume of the cube with side length ${cubeSide} is: ${cubeResult}`);

const boxLength = 4;
const boxWidth = 5;
const boxHeight = 6;
const boxResult = boxVolume(boxLength, boxWidth, boxHeight);
console.log(`Volume of the rectangular box with dimensions ${boxLength}x${boxWidth}x${boxHeight} is: ${boxResult}`);




 */









/** Given a Binary Number B, find its decimal equivalent. 
 
function binaryToDecimal(binaryString){         
    const decimalNumber = parseInt(binaryString,2);  //Using parseInt with base 2 to convert binary to decimal
    return decimalNumber;
}

// Example usage
const binaryNumber = "10001000";
const decimalEquivalent = binaryToDecimal(binaryNumber);

console.log(`Binary: ${binaryNumber}`);
console.log(`Decimal: ${decimalEquivalent}`);

*/










/** Given two char c1 and c2.  
 you need to print all the alphabet starting from c1 to c2 in a single line.
 

 function alphabetInRange(c1,c2){
    const startCharCode = c1.charCodeAt(0);
    const endCharCode = c2.charCodeAt(0);

    for(let i=startCharCode; i<=endCharCode; i++){
        const char = String.fromCharCode(i);
        process.stdout.write(char +"");
    }
    console.log();
 }


 const char1 = 'a';
 const char2 = 'z';

alphabetInRange(char1,char2);


 */


 