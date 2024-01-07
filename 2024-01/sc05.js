const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.b.c = 3

console.log(obj);
console.log(copiedObj);

console.log(obj === copiedObj);
console.log(obj.b.c === copiedObj.b.c);