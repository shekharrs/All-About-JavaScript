let startButton = document.querySelector(".start");
let increaseCountOne = document.querySelector(".increase");
let changeColor = document.querySelector(".reset");
let input = document.querySelector(".input");

/* Regular function way to use event listener🎃

function showMssg() {                    
    console.log("start btn clicked!")
}
startButton.addEventListener("click", showMssg);
*/

// startButton.addEventListener("click", () => {
//   if (startButton.innerText === "Start") {
//     startButton.innerText = "Stop";
//     startButton.innerText = "Lets Start";
//   } else {
//     startButton.innerText = "Start";
//   }
// });

// increaseCountOne.addEventListener("click", () => {
//   let value = 0;
//   value++;
//   console.log("increase by one");
//   if (increaseCountOne.innerText === "Increase") {
//     increaseCountOne.innerText = "value has been increase by one";
//   } else {
//     increaseCountOne.innerText = "Increase";
//   }
// });

// changeColor.addEventListener("click", () => {
//   // changeColor.classList.add("change-colorBtn");
//   changeColor.classList.toggle("change-colorBtn");
// });

/* input event listener method🎃 - change, input, focus, keyup

input.addEventListener("change", () => {    //change - The change event triggers when the element has finished changing.
    console.log(input.value);
})

input.addEventListener("input", () => {     //input - The input event fires every time whenever the value of the <input> , <select> , or <textarea> element changes.
  console.log(input.value);
})

input.addEventListener("focus", () => {       //focus - The focus event fires when an element has received focus    
    console.log(input.value);
})

input.addEventListener("keyup", () => {          //Keyup - The keyup event is fired when a key is released and continuously trigger the value
    console.log(input.value);
})
*/




/* Mouse Event🚀⚡
-In JavaScript, a mouse event refers to an action or interaction that occurs when a user 
interacts with a webpage using their mouse. These events can include actions such as clicking, 
hovering over, dragging, or releasing the mouse button.

-Common mouse events in JavaScript include:

> click: This event occurs when the user clicks the mouse button on an element.
> mousedown: Triggered when the mouse button is pressed down over an element.
> mouseup: Fired when the mouse button is released after it's been pressed down.
> mousemove: Occurs when the mouse pointer moves over an element.
> mouseover: Triggered when the mouse pointer enters the boundaries of an element.
> mouseout: Fired when the mouse pointer leaves the boundaries of an element.
> dblclick: This event occurs when the user double-clicks the mouse button on an element.

-These events are useful for creating interactive web applications, as they allow developers 
to respond to user actions and trigger specific behaviors or functions accordingly. 
They are typically handled using event listeners in JavaScript code.


input.addEventListener("mousedown", (event) => {
  let xcors = event.pageX;
  let ycors = event.pageY;
  let cors = `X cors - ${xcors}, Y cors - ${ycors}`;
  console.log(cors);
})
*/