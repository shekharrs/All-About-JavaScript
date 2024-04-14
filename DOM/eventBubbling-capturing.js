/*
  Event bubbling & Capturing🔥⚡
  *event bubbling triggers from innermost element to outermost [child to parent]

  *Event bubbling is a method of event propagation in the HTML DOM API when an event 
  is in an element inside another element, and both elements have registered a handle 
  to that event. It is a process that starts with the element that triggered the event 
  and then bubbles up to the containing elements in the hierarchy. In event bubbling, 
  the event is first captured and handled by the innermost element and then propagated 
  to outer elements.

  *Capturing triggers from the topmost element to innermost element [parent to child]
   and it define through boolean value by default it false so by mentioned true it triggers
   capturing
*/

let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

// Capturing
para.addEventListener("click", () => {  
    alert("P tag clicked");
}, true)

div.addEventListener("click", () => {
    alert("Div tag clicked");
}, true)

form.addEventListener("click", () => {
    alert("Form tag clicked");
}, true)

// Bubbling
para.addEventListener("click", () => {
    alert("P tag clicked");
})

div.addEventListener("click", () => {
    alert("Div tag clicked");
})

form.addEventListener("click", () => {
    alert("Form tag clicked");
})