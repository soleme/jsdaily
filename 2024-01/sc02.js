const original = [
    [1,1,1,1],
    [0,0,0,0],
    [2,2,2,2],
    [3,3,3,3],
]

const copy = original.slice();

console.log(JSON.stringify(original) === JSON.stringify(copy));

copy[0][0] = 99;
copy[2].push(98);

console.log(JSON.stringify(original) === JSON.stringify(copy));

console.log(original);
console.log(copy);