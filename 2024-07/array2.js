let oSelectList = [
    {
        "rater1Empno": "20600010",
        "rater1Name": "김용건",
        "eval1OrgCode": "33000065",
        "eval1OrgName": "CSM팀",
        "peopleCount": 10,
        "subDepartmentCount": 7,
        "eva1Avg": 67.75,
        "eva1AvgSd": 4.362084109434134
    },
    {
        "rater1Empno": "21401120",
        "rater1Name": "은기형",
        "eval1OrgCode": "33000727",
        "eval1OrgName": "연구분석팀",
        "peopleCount": 6,
        "subDepartmentCount": 6,
        "eva1Avg": 70.20833333333333,
        "eva1AvgSd": 5.025974200756175
    }
]

let oSelectListMerge = oSelectList.map(o=>{
    return{
        rater1Empno: o.rater1Empno,
    }
})

console.log(oSelectListMerge);