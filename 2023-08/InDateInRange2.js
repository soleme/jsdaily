var data = [
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2023-08-21T01:35:26.342Z",
        "modifiedBy": "anonymous",
        "startDate": "1900-01-01",
        "endDate": "2018-02-28",
        "workYears": 5
    },
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2023-08-21T01:35:26.342Z",
        "modifiedBy": "anonymous",
        "startDate": "2018-03-01",
        "endDate": "9999-12-31",
        "workYears": 10
    }
];

function isDateInRange(dateToCheck, startDate, endDate) {
    return dateToCheck >= startDate && dateToCheck <= endDate;
}

var inputDate = new Date("2020-05-15"); // 예시 입력 날짜

var isDateFound = false;

for (var i = 0; i < data.length; i++) {
    var startDate = new Date(data[i].startDate);
    var endDate = new Date(data[i].endDate);

    if (isDateInRange(inputDate, startDate, endDate)) {
        isDateFound = true;
        break; // 날짜가 한번이라도 범위 내에 속하면 반복 중단
    }
}

if (isDateFound) {
    console.log("입력한 날짜는 배열 내의 기간에 속합니다.");
} else {
    console.log("입력한 날짜는 배열 내의 기간에 속하지 않습니다.");
}