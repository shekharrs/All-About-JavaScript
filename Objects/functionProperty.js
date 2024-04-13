/*
  Function as Object Property⚡🚀
*/

const personalData = {
    Name: "Shekhar Thakur",
    greetMessage: function() {
        console.log("hello, Shekhar welcome to the gfg🎶😎");
    },
    Bye() {
        console.log("Tata Bye Bye✌😎")
    }
}

console.log(personalData);
personalData.greetMessage();
personalData.Bye();