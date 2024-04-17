/**
 * Class⚡
 */

class User{
    constructor(name, role, isAdmin, isLoggedIn) {
        (this.name= name),
        (this.role= role),
        (this.isAdmin= isAdmin),
        (this.isLoggedIn= isLoggedIn);
    }
    showMessage() {
        console.log(`${this.name} is a ${this.role}`);
    }
}

const User1 = new User("Shekhar", "Mentor", true, false);
console.log(User1.showMessage());

const User2 = new User("Coder", "Mentor", true, false);
console.log(User2);