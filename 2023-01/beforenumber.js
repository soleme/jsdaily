const currentDate = new Date();
const lastYear = currentDate.getFullYear() - 1;
currentDate.setFullYear(lastYear);
const dateString = Number(currentDate.toISOString().substring(0, 10).replaceAll('-',''));
console.log(dateString);