const a = {
    one: 1,
    two: 2
};

let b = a;

b.one = 3;

console.log(a);
console.log(b);

// 기존 값에 영향을 끼친다.
// 객체의 참조값(주소값)을 복사하는것을 얕은 복사라고 한다.

/**
 * Array.prototype.slice()
 * 얇은 복사 방법의 대표적인 방법
 * @type {(string|number|boolean)[]}
 */

const original = ['a',2,true,4,'hi']
const copy = original.slice();

console.log(JSON.stringify(original) === JSON.stringify(copy));

copy.push(10);

console.log(JSON.stringify(original) === JSON.stringify(copy));

console.log(original);
console.log(copy);
