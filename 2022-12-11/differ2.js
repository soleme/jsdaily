//const hireDate = new Date('2010-01-01');
const hireDate = new Date('2023-05-22');
const currentDate = new Date('2023-06-23');

// 년도 차이 계산
const yearDiff = currentDate.getFullYear() - hireDate.getFullYear();

// 월 차이 계산
const monthDiff = currentDate.getMonth() - hireDate.getMonth();

// 일 차이 계산
const dayDiff = currentDate.getDate() - hireDate.getDate();

// 만 나이 계산
const years = yearDiff + (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? -1 : 0);
const months = ((monthDiff + 12) % 12 + (dayDiff < 0 ? -1 : 0) + 12) % 12;

console.log(years + '년 ' + months + '개월');