let arr = [1,2,3,4,5,6]

console.log(arr); // 배열을 리턴
console.log(...arr); // 배열이 아닌 내부의 값을 풀어 리턴한다.

let obj = {a:1, b:2};
let obj2 = {...obj, c:3};

console.log(obj);
//console.log(...obj); // 오류발생
console.log(obj2);

// spread 연산자가 적용된 객체는 console.log로 출력할수 없다.