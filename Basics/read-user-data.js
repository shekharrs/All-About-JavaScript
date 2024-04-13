/**
 * Read data from user
 */

const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I know your name? ");
console.log(`Welcome ${userName} to GFG`);
