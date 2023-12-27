// let [a, b, ... rest] = [1,2,3,4,5,6];
//
// console.log(a);
// console.log(b);
// console.log(rest);

let {a, bb, ...rest} = {a: 1, b:2, c:3, d:4};
console.log(a);
console.log(bb);
console.log(rest);