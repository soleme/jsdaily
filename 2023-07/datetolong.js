// const date = new Date(); // 현재 일자를 나타내는 Date 객체 생성
// const timestamp = date.getTime(); // 일자를 long(타임스탬프)으로 변환
// const strTimestamp = timestamp.toString();
//
// console.log(strTimestamp);

// const filename = '선물지급1.PNG';
// const extension = filename.split('.').pop().toLowerCase();
//
// console.log(extension); // 'png'


// const filename = '선물지급1.PNG';
// const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i;
// const extension = regex.exec(filename)[1].toLowerCase();

// console.log(extension); // 'png'

const phoneNumber = "(KOR (+82)) 010-5698-1453";
const regex = /0\d{2}-\d{4}-\d{4}/g;
const matches = phoneNumber.match(regex);
const result = matches ? matches[0].replace(/-/g, '-') : '';

console.log(result); // 출력 결과: 01056981453