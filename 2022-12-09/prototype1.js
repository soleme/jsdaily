let student = {
    name : 'Lee',
    score : 90
};

console.log(student.hasOwnProperty('name'));
console.dir(student);

console.log(student.__proto__ === Object.prototype); // true

function Person(name){
    this.name = name;
}

let foo = new Person('Lee');

console.log(Person.__proto__ === Function.prototype);  // true
console.log(Person.prototype === foo.__proto__); // true