/*
  Scope and Scope Chain✨🚀
*/
let a = 5;
let b = 10;
let c = 15;
function x() {
    console.log({ a });
    function y() {        // inner function - inside function x
        console.log({ b });
        function z() {    // inner function - inside function y
            console.log({ c });
        }
        z();
    }
    y();
}
x();