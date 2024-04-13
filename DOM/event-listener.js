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

startButton.addEventListener("click", () => {
    if(startButton.innerText === "Start"){
        startButton.innerText = "Stop";
        startButton.innerText = "Lets Start";
    }else{
        startButton.innerText = "Start";
    }
})

increaseCountOne.addEventListener("click", () => {
    let value = 0;
    value ++;
    console.log("increase by one");
    if(increaseCountOne.innerText === "Increase"){
        increaseCountOne.innerText = "value has been increase by one";
    }else{
        increaseCountOne.innerText = "Increase";
    }
})

changeColor.addEventListener("click", () => {
    // changeColor.classList.add("change-colorBtn");
    changeColor.classList.toggle("change-colorBtn")
})

// input.addEventListener("change", () => {    //change - The change event triggers when the element has finished changing.
//     console.log(input.value);
// })

// input.addEventListener("input", () => {     //input - The input event fires every time whenever the value of the <input> , <select> , or <textarea> element changes.
//     console.log(input.value);
// })

// input.addEventListener("focus", () => {       //focus - The focus event fires when an element has received focus    
//     console.log(input.value);
// })

input.addEventListener("keyup", () => {          //Keyup - The keyup event is fired when a key is released and continuously trigger the value
    console.log(input.value);
})