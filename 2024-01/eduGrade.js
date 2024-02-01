let aBasicList = [
    {
        "year": "2024",
        "grade": "2050",
        "tempKey": "1706084086440",
        "eduGrade": [
            "80"
        ],
        "promotionPeriod": 4,
        "_new": false
    },
    {
        "year": "2024",
        "grade": "2050",
        "tempKey": "1706575150167",
        "eduGrade": [
            "110"
        ],
        "promotionPeriod": 2,
        "_new": false
    },
    {
        "modifiedBy": "ws1009",
        "year": "2024",
        "grade": "3020",
        "tempKey": "1706084318890",
        "eduGrade": [
            "0",
            "10"
        ],
        "promotionPeriod": 3,
        "_new": false
    }
]

// aBasicList에서 eduGrade의 배열에 '0'이 있을경우에는 eduGrade 배열이 1이상일 경우 에러 메세지 처리하려면
for (let i = 0; i < aBasicList.length; i++) {
    if (aBasicList[i].eduGrade.includes('0') && aBasicList[i].eduGrade.length > 1) {
        console.log(`0이외에는 포함될수 없습니다.`);
    }
}
