const title = 'Learning Funtion Composition 1';

const strToArr = str => str.split(' ');
const toLower = arr => arr.map((w=> w.toLowerCase()));
const joinWithDash = arr => arr.join('-');

const result = joinWithDash(toLower(strToArr(title)));
console.log(result);