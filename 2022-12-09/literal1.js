let person = {
    name : 'Lee',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(person);
console.log(person.name);
console.log(person['name']);

/**
 * 문자열은 원시값 이기때문에 변경되지 않는다.
 * 이때 에러가 발생하지 않는다.
 * @type {string}
 */
let str = 'string';
str[0] = 'S';
console.log(str);