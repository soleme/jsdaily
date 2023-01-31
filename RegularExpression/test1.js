const regex = /\d{3}-\d{4}-\d{4}/;

let test1 = regex.test('010-2222-3333');
let test2 = regex.test('01-34-44');

console.log(test1);
console.log(test2);

const regex1 = /apple/;

let test3 = regex1.test("Hello banna and apple hahaha");
console.log(test3);

let txt = "Hello banna and apple hahaha";
let test4 = txt.match(regex1);
console.log(test4);

let replaceText = txt.replace(regex1, 'watermelon');
console.log(replaceText);