let evalPointCalc =
    [
    {
        userId: '0110036',
        year6ago: 80,
        year5ago: 95,
        year4ago: 0,
        year3ago: 0,
        year2ago: 0,
        year1ago: 0,
        count: 2
    },
        {
            userId: '0210010',
            year6ago: 80,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        },
        {
            userId: '0210539',
            year6ago: 100,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        },
        {
            userId: '0410058',
            year6ago: 70,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        },
        {
            userId: '0410430',
            year6ago: 0,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0
        },
        {
            userId: '0410514',
            year6ago: 75,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        },
        {
            userId: '0510565',
            year6ago: 80,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        },
        {
            userId: '0510817',
            year6ago: 95,
            year5ago: 0,
            year4ago: 0,
            year3ago: 0,
            year2ago: 0,
            year1ago: 0,
            count: 1
        }
    ]
;


let yearApplyPercent = [
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "1",
        year6ago: 0,
        year5ago: 0,
        year4ago: 0,
        year3ago: 0,
        year2ago: 50,
        year1ago: 50,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "2",
        year6ago: 5,
        year5ago: 10,
        year4ago: 15,
        year3ago: 20,
        year2ago: 25,
        year1ago: 25,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "3",
        year6ago: 0,
        year5ago: 20,
        year4ago: 20,
        year3ago: 20,
        year2ago: 20,
        year1ago: 20,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "4",
        year6ago: 15,
        year5ago: 15,
        year4ago: 15,
        year3ago: 15,
        year2ago: 15,
        year1ago: 25,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "5",
        year6ago: 10,
        year5ago: 10,
        year4ago: 20,
        year3ago: 20,
        year2ago: 20,
        year1ago: 20,
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-23T05:59:32.958Z",
        modifiedBy: "anonymous",
        year: "2024",
        evalyear: "6",
        year6ago: 20,
        year5ago: 20,
        year4ago: 20,
        year3ago: 20,
        year2ago: 10,
        year1ago: 10,
    },
]

evalPointCalc.forEach((evalPoint) => {
    yearApplyPercent.forEach((yearPercent) => {
        if (evalPoint.count && evalPoint.count === parseInt(yearPercent.evalyear)) {
            evalPoint.year6ago *= (yearPercent.year6ago / 100);
            evalPoint.year5ago *= (yearPercent.year5ago / 100);
            evalPoint.year4ago *= (yearPercent.year4ago / 100);
            evalPoint.year3ago *= (yearPercent.year3ago / 100);
            evalPoint.year2ago *= (yearPercent.year2ago / 100);
            evalPoint.year1ago *= (yearPercent.year1ago / 100);
        }
        evalPoint.result = evalPoint.year6ago + evalPoint.year5ago + evalPoint.year4ago + evalPoint.year3ago + evalPoint.year2ago + evalPoint.year1ago;
    });
});

console.log(evalPointCalc);