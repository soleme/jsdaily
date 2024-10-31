// 날짜 문자열에서 밀리초 추출
let dateString = "/Date(1222560000000)/";
let milliseconds = parseInt(dateString.match(/\d+/)[0], 10);

// Date 객체 생성
let date = new Date(milliseconds);

// 날짜 형식으로 변환하여 출력
console.log(date.toString());  // 로컬 시간대 기준
console.log(date.toISOString());  // UTC 기준
