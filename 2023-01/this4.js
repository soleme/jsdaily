var obj = {
    0:'a',
    1:'b',
    2:'c',
    length:3
};

var arr = Array.from(obj);
console.log(arr);

/**
 * 생성자 내부에서 다른 생성자를 호출
 * @param name
 * @param gender
 * @constructor
 */
function Person(name, gender){
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school){
    Person.call(this, name, gender);
    this.school = school;
}

function Employee(name, gender, company){
    Person.call(this, name, gender);
    this.company = company;
}

var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난', 'male', '구골');

console.log(by, jn);
