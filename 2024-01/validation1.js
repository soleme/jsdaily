let aBasicList = [
    {
        "grade": "2050",
        "tempKey": "1706141817256",
        "eduGrade": [
            "110",
            "150"
        ],
        "promotionPeriod": 0,
        "_new": true
    },
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2024-01-24T08:18:48.416Z",
        "modifiedBy": "anonymous",
        "year": "2024",
        "grade": "2050",
        "tempKey": "1706084076614",
        "eduGrade": [
            "110"
        ],
        "promotionPeriod": 2,
        "_new": false
    }
];

// for (let i = 0; i < aBasicList.length; i++) {
//     for (let j = i + 1; j < aBasicList.length; j++) {
//         if (aBasicList[i].grade === aBasicList[j].grade &&
//             aBasicList[i].eduGrade) {
//             console.log(`Duplicate values found for items at index ${i} and ${j}`);
//         }
//     }
// }
// for (let i = 0; i < aBasicList.length; i++) {
//     for (let j = i + 1; j < aBasicList.length; j++) {
//         console.log('i 의 ' + aBasicList[i].eduGrade);
//         console.log('j 의 ' + aBasicList[j].eduGrade);
//         if (aBasicList[i].grade === aBasicList[j].grade &&
//             aBasicList[i].eduGrade.length === aBasicList[j].eduGrade.length &&
//             aBasicList[i].eduGrade.every(val => aBasicList[j].eduGrade.includes(val))) {
//             console.log(`Duplicate values found for items at index ${i} and ${j}`);
//         }
//     }
// }
//console.log(aBasicList);

// aBasicList의 grade가 서로 동일하고 eduGrade가 동일한 값을 가지고 있으면 동일한 값이 있다는 메시지 발생
// for (let i = 0; i < aBasicList.length; i++) {
//     for (let j = i + 1; j < aBasicList.length; j++) {
//         const eduGradeArr1 = aBasicList[i].eduGrade;
//         const eduGradeArr2 = aBasicList[j].eduGrade;
//         if (aBasicList[i].grade === aBasicList[j].grade && (eduGradeArr1.some(val => eduGradeArr2.includes(val)))) {
//             console.log(`Duplicate values found for items at index ${i} and ${j}`);
//         }
//     }
// }

// aBasicList의 grade가 서로 동일하고 eduGrade가 동일한 값을 가지고 있으면 동일한 값이 있다는 메시지 발생
for (let i = 0; i < aBasicList.length; i++) {
    for (let j = i + 1; j < aBasicList.length; j++) {
        const eduGradeArr1 = aBasicList[i].eduGrade;
        const eduGradeArr2 = aBasicList[j].eduGrade;
        if (aBasicList[i].grade === aBasicList[j].grade && (eduGradeArr1.some(val => eduGradeArr2.includes(val)))) {
            console.log(`Duplicate values found for items at index ${i} and ${j}`);
        }
    }
}

//console.log(aBasicList);

// let eduGradeArr1 = ['110', '120'];
// let eduGradeArr2 = ['110'];
//
// // a 배열의 모든 요소가 b 배열에 포함되는지 확인
// let isSubset = eduGradeArr1.every(val => eduGradeArr2.includes(val));
//
// console.log(isSubset); // false


let eduGradeArr1 = ['110', '120'];
let eduGradeArr2 = ['110'];

// eduGradeArr1의 요소 중 하나라도 eduGradeArr2에 포함되는지 확인
let isSubset = eduGradeArr1.some(val => eduGradeArr2.includes(val));

console.log(isSubset); // true

//console.log(aBasicList);

// let data = [{"eduGrade": ["110","150"]}]
// let data2 = [{"eduGrade": ["110"]}]
//
// // data와 data2의 eduGrade 중복 체크
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data2.length; j++) {
//         if (data[i].eduGrade.length === data2[j].eduGrade.length && data[i].eduGrade.every(val => data2[j].eduGrade.includes(val))) {
//             console.log(`Duplicate values found for items at index ${i} and ${j}`);
//         }
//     }
// }