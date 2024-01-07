/**
 * 원시값 : Number, String, Boolean, Null, Undefined
 * 참조값 : Object, Symbol
 * @type {number}
 */

// 원시값은 값을 복사 할때 복사된 값을 다른 메모리에 할당하기때문에 원래의 값과 복사된 값 서로에게 영향을 미치지 않는다.
const a = 1;
let b = a;

b = 2;

console.log(a);
console.log(b);

// 하지만 참조값은 변수가 객체의 주소를 가리키는 값이기 때문에 복사된 값(주소)이 같은값을 가리킨다.

const c = { number : 1 };
let d = c;

d.number = 2;

console.log(c);
console.log(d);

// 이러한 객체의 특징 때문에 객체를 복사는 방법은 두가지로 나뉜다.


const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = Object.assign({}, obj);

console.log(obj);
console.log(copiedObj);

copiedObj.b.c = 3;

console.log(obj);
console.log(copiedObj);

console.log( obj === copiedObj );
console.log( obj.b.c === copiedObj.b.c );

// obj === copiedObj // false
// obj.b.c === copiedObj.b.c // true