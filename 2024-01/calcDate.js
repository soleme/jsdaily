let basicDate = new Date('2024-02-01');
let promotionDate = new Date('2020-01-01');

// 날짜 차이 계산
let timeDiff = Math.abs(basicDate.getTime() - promotionDate.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

console.log(`basicDate에서 promotionDate까지의 일수는 ${diffDays}일 입니다.`);