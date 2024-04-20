/**
 * Prototype🚀
 * What is a Prototype?
 * Prototype Chaining?
 * Same Methods?
 * Value of this?
 * For in v/s Object.keys?
 */

const loginStatus = {
  isLogin: false,
};

const adminStatus = {
  isAdmin: true,
  __proto__: loginStatus,
  showMessage() {
    console.log("Admin Message");
  },
};

const user = {
  Name: "Shekhar",
  Role: "Mentor",
  __proto__: adminStatus,
  showMessage() {
    console.log("User Message");
  },
};

console.log(user);
user.showMessage();
adminStatus.showMessage();

