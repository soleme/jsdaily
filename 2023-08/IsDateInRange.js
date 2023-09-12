function isDateInRange(dateToCheck, startDate, endDate) {
    return dateToCheck >= startDate && dateToCheck <= endDate;
}

// 예시 데이터
var startDate = new Date("2023-01-01");
var endDate = new Date("2023-12-31");

var dateToCheck = new Date("2023-08-15");

if (isDateInRange(dateToCheck, startDate, endDate)) {
    console.log("날짜가 기간 내에 포함됩니다.");
} else {
    console.log("날짜가 기간 밖에 있습니다.");
}