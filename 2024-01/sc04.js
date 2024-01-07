const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = {...obj}

copiedObj.b.c = 3

console.log( obj === copiedObj);
console.log( obj.b.c === copiedObj.b.c);