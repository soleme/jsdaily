const dateString = "/Date(1311379200000)/";

// 정규식을 사용해 타임스탬프 추출
const timestamp = parseInt(dateString.match(/\d+/)[0], 10);

// 타임스탬프를 Date 객체로 변환
const date = new Date(timestamp);

// Date 객체를 YYYY-MM-DD 형식으로 변환
const formattedDate = date.toISOString().split('T')[0];

console.log(formattedDate); // 출력: "2011-07-23"