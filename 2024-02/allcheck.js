const aBasicList = [
    {
        "tempKey": "1708308825261",
        "code": "10011",
        "pointType": "P",
        "grade": "",
        "fromScore": "500",
        "toScore": "699",
        "eduGrade": "0",
        "value": "1",
        "remark": "",
        "_new": true
    },
    {
        "tempKey": "1708308811529",
        "code": "10011",
        "pointType": "P",
        "grade": "",
        "fromScore": "700",
        "toScore": "799",
        "eduGrade": "0",
        "value": "3",
        "remark": "",
        "_new": true
    },
    {
        "tempKey": "1708308793935",
        "code": "10011",
        "pointType": "P",
        "grade": "",
        "fromScore": "800",
        "toScore": "999",
        "eduGrade": "0",
        "value": "5",
        "remark": "",
        "_new": true
    },
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2024-02-16T06:04:25.184Z",
        "modifiedBy": "anonymous",
        "year": "2024",
        "gubun": "40",
        "tempKey": "1708063223448",
        "code": "10000",
        "pointType": "P",
        "grade": "",
        "fromScore": 50,
        "toScore": 100,
        "value": 3,
        "eduGrade": [
            "2030",
            "2040",
            "2050"
        ],
        "remark": "",
        "_new": false
    },
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2024-02-16T06:04:25.184Z",
        "modifiedBy": "anonymous",
        "year": "2024",
        "gubun": "40",
        "tempKey": "1708063324031",
        "code": "10031",
        "pointType": "G",
        "grade": "3등급",
        "fromScore": 0,
        "toScore": 0,
        "value": 6,
        "eduGrade": [
            "0"
        ],
        "remark": "",
        "_new": false
    },
    {
        "createdAt": null,
        "createdBy": null,
        "modifiedAt": "2024-02-16T06:04:25.184Z",
        "modifiedBy": "anonymous",
        "year": "2024",
        "gubun": "40",
        "tempKey": "1708063451758",
        "code": "10000",
        "pointType": "P",
        "grade": "",
        "fromScore": 150,
        "toScore": 200,
        "value": 3,
        "eduGrade": [
            "3110",
            "3120"
        ],
        "remark": "",
        "_new": false
    }
];


const filteredList = aBasicList.filter(item => {
    if (Array.isArray(item.eduGrade)) {
        return !item.eduGrade.includes('0');
    } else {
        return item.eduGrade !== '0';
    }
});

console.log(filteredList);