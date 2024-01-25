let gradeYearBasic = [
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-24T06:15:08.192Z",
        modifiedBy: "anonymous",
        year: "2024",
        grade: "2050",
        eduGrade: "110",
        promotionPeriod: 2,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-24T06:15:08.192Z",
        modifiedBy: "anonymous",
        year: "2024",
        grade: "2050",
        eduGrade: "80",
        promotionPeriod: 4,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-24T06:15:08.192Z",
        modifiedBy: "anonymous",
        year: "2024",
        grade: "3020",
        eduGrade: "0",
        promotionPeriod: 3,
    }
];

let evalPointCalc = [
    {
        userId: "0110036",
        grade: "2050",
        gradeName: "S",
        degreeCode: "110",
        degreeName: "대졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 95,
        year1ago: 80,
        count: 2,
    },
    {
        userId: "0210010",
        grade: "2050",
        gradeName: "S",
        degreeCode: "80",
        degreeName: "대졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 80,
        count: 1,
    },
    {
        userId: "0210539",
        grade: "3020",
        gradeName: "V2급",
        degreeCode: "80",
        degreeName: "고졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 100,
        count: 1,
    },
    {
        userId: "0410058",
        grade: "2010",
        gradeName: "S",
        degreeCode: "150",
        degreeName: "대졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 70,
        count: 1,
    },
    {
        userId: "0410514",
        grade: "3020",
        gradeName: "V2급",
        degreeCode: "80",
        degreeName: "고졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 75,
        count: 1,
    },
    {
        userId: "0510565",
        grade: "2110",
        gradeName: "수석",
        degreeCode: "150",
        degreeName: "대졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 80,
        count: 1,
    },
    {
        userId: "0510817",
        grade: "3020",
        gradeName: "V2급",
        degreeCode: "80",
        degreeName: "고졸",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 95,
        count: 1,
    },
]

// evalPointCalc의 grade와 evalPointCalc의 grade가 동일한 경우 evalPointCalc 데이터에 promotionPeriod를 만들어서 넣어줘
evalPointCalc.forEach((evalPoint) => {
    const matchGrade = gradeYearBasic.find((gradeYear) => gradeYear.grade === evalPoint.grade && gradeYear.eduGrade === '0');
    const matchGradeDegree = gradeYearBasic.find((gradeYear) => gradeYear.grade === evalPoint.grade && gradeYear.eduGrade === evalPoint.degreeCode);
    if (matchGrade) {
        evalPoint.promotionPeriod = matchGrade.promotionPeriod;
    }else if(matchGradeDegree){
        evalPoint.promotionPeriod = matchGradeDegree.promotionPeriod;
    }else{
        evalPoint.promotionPeriod = 0;
    }
});

console.log(evalPointCalc);