const data = [
    [
        "신청ID",
        "사번",
        "성명",
        "발송일",
        "운송장번호",
        ""
    ],
    [
        "GT1693270383909",
        "11009997",
        "문동은",
        "8/29/23",
        "12345-678910",
        ""
    ]
];

// 첫 번째 행을 속성 이름으로 사용
const headers = data[0];
const result = data.slice(1).map(row => {
    const rowData = {};
    row.forEach((value, index) => {
        const header = headers[index];
        if (header && value !== "") {
            if (header === "발송일") {
                // "8/29/23" 형식의 날짜를 "yyyy-mm-dd" 형식으로 변환
                const [month, day, year] = value.split("/");
                value = `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
                value = new Date(value).toISOString();
            }
            rowData[header] = value;
        }
    });
    return rowData;
});

console.log(result);