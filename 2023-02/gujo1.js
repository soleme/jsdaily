let users = "Adwin-Bdwin-Cdwin";
let [user1, user2] = users.split('-');
console.log([user1, user2]);

let student = {name : "Adwin", age : 20};
let {name : studentName, age : studentAge} = student;
console.log(studentName);