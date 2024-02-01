let languageData =  {
        "d": {
        "results": [
            {
                "userId": "0410514",
                "Score": "950",
                "TestnameNav": {
                    "externalCode": "10011"
                }
            },
            {
                "userId": "0410515",
                "Score": "850",
                "TestnameNav": {
                    "externalCode": "10011"
                }
            },
            {
                "userId": "0410515",
                "Score": "7등급",
                "TestnameNav": {
                    "externalCode": "10002"
                }
            }
        ]
    }
}

let languageList =     [
    { year: "2024",gubun: "40",code: "10002",pointType: "G",grade: "7등급",fromScore: 0,toScore: 0,value: "1.70",remark: "", },
    { year: "2024",gubun: "40",code: "10011",pointType: "P",grade: "",fromScore: 900,toScore: 999,value: "2.00",remark: "", },
    { year: "2024",gubun: "40",code: "10011",pointType: "P",grade: "",fromScore: 800,toScore: 899,value: "1.80",remark: "", },
    { year: "2024",gubun: "40",code: "10011",pointType: "P",grade: "",fromScore: 700,toScore: 799,value: "1.60",remark: "", },
    { year: "2024",gubun: "40",code: "10011",pointType: "P",grade: "",fromScore: 600,toScore: 699,value: "1.40",remark: "", },
    ]
/**
languageData의 externalCode와 languageList의 code가 동일한 경우 languageList의 pointType이 "G"일경우에는
languageData의 Score와 languageList의 grade가 매칭될경우 value값을 가져오고, pointType가 "P"일경우에는
languageData의 Score가 languageList의 fromScore와 toScore의 사이에 들어가는 경우 value를 가져온다.
**/

let newValue = [];
let reducedValueArray = [];

for (let i = 0; i < languageData.d.results.length; i++) {
    const item = languageData.d.results[i];
    const userId = item.userId;
    const score = item.Score;
    const code = item.TestnameNav.externalCode;

    const matchedItems = languageList.filter(lang => lang.code === code);
    if (matchedItems.length > 0) {
        matchedItems.forEach(matchedItem => {
            if (matchedItem.pointType === "G" && matchedItem.grade === score) {
                newValue.push({
                    userId: userId,
                    // score: score,
                    code: code,
                    // acquisitionDate: acquisitionDate,
                    value: matchedItem.value
                });
            } else if (matchedItem.pointType === "P" && score >= matchedItem.fromScore && score <= matchedItem.toScore) {
                newValue.push({
                    userId: userId,
                    // score: score,
                    code: code,
                    // acquisitionDate: acquisitionDate,
                    value: matchedItem.value
                });
            }
        });
    } else {
        // languageList에 해당하는 code가 없는 경우에 대한 처리
        console.log(`No matching code found for user ${userId}`);
    }
}

console.log(newValue);

let reducedValue = newValue.reduce((acc, cur) => {
    if (acc[cur.userId]) {
        acc[cur.userId] += Number(cur.value);
    } else {
        acc[cur.userId] = Number(cur.value);
    }
    return acc;
}, {});

reducedValueArray = Object.entries(reducedValue).map(([userId, value]) => ({ userId, value }));

console.log(reducedValueArray);