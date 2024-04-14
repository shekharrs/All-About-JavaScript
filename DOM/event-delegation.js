/*
  Event delegation⚡🚀
  Event Delegation is basically a pattern to handle events efficiently. Instead of adding 
  an event listener to each and every similar element, we can add an event listener to a 
  parent element and call an event on a particular target using the .target property of 
  the event object.
*/



let btnContainer = document.querySelector("#btn-container");

// btnContainer.addEventListener("click", (event) => {  // through event delegation it triggers the child class by use of .target property
//     console.log(event.target.innerText);
// })

btnContainer.addEventListener("click", (event) => {
    let btnText = event.target.innerText;
    if(btnText === "Red"){
        event.target.classList.toggle("red");
    }
})