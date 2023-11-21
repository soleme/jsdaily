// let 현재날짜 = new Date();
//
// let 년도 = 현재날짜.getFullYear().toString().slice(-2);
// let 월 = (현재날짜.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고, 두 자리로 패딩합니다.
// let 일 = 현재날짜.getDate().toString().padStart(2, '0'); // 두 자리로 패딩합니다.
//
// let result = `${년도}/${월}/${일}`;
//
// console.log(result);

const year = '2023';

console.log(year.substring(2,4));

//
// let 현재날짜 = new Date();
// let 현재년도 = 현재날짜.getFullYear();
//
// // 현재 년도의 12월 31일을 설정한 후 하루를 빼서 마지막 날짜를 구합니다.
// let 마지막일자 = new Date(현재년도, 11, 31);
// 마지막일자.setDate(마지막일자.getDate() - 1);
//
// // 마지막일자를 포맷에 맞게 표시합니다.
// let 년도 = 마지막일자.getFullYear().toString().slice(-2);
// let 월 = (마지막일자.getMonth() + 1).toString().padStart(2, '0');
// let 일 = 마지막일자.getDate().toString().padStart(2, '0');
//
// let 포맷된날짜 = `${년도}/${월}/${일}`;
// console.log(포맷된날짜);