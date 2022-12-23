const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce((acc, cur) => acc + cur, initialValue);

console.log(sumWithInitial);