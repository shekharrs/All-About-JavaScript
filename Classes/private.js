/**
 * Private Properties👨‍💻 
 * private properties indicate through # this hastag if this hastag is mention 
 * in any key it's mean it is a private properties 
 */

// class privateProperties{
//     #id = 123;
// }

// const user = new privateProperties();
// user.#id = 321;
// console.log(user);


// Changing the id 👇

class privateProperties{
    #id = 456;

    changeTheId(id) {
        this.#id = id;
    }
}

const user = new privateProperties();
user.changeTheId(654);
console.log(user);
