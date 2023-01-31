const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const today = `${year}-${month}-${day}`;

console.log(today); // "2022-12-22" (현재 날짜)
