console.log(...[1,2,3]);
console.log(...'Hello');
console.log(...new Map([['a','1'],['b','2']]));
console.log(...new Set(['1','2','3']));

const arr = [1,2,3];
console.log(Math.max.apply(null, arr));

const max = Math.max(...arr);
console.log(`max : ${max}`);

function sum(a, b, ...rest) {
    let result = a + b;
    for (let i = 0; i < rest.length; i++) {
        result += rest[i];
    }
    return result;
}

console.log(sum(1,2,3,4,5));

function foo(...rest){
    console.log(rest);
}

foo(...[1,2,3]);