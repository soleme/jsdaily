let promotionEvalPointData = {
    EVAL_POINT: {
        S: 100,
        A: 95,
        "B+": 90,
        B: 85,
        "B-": 80,
        C: 75,
        D: 70,
    },
};

let pointTarget = [
    {
        userId: "0110036",
        year6ago: "B-",
        year5ago: "A",
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0210010",
        year6ago: "B-",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0210539",
        year6ago: "S",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0410058",
        year6ago: "D",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0410430",
        year6ago: null,
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0410514",
        year6ago: "C",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0510565",
        year6ago: "B-",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
    {
        userId: "0510817",
        year6ago: "A",
        year5ago: null,
        year4ago: null,
        year3ago: null,
        year2ago: null,
        year1ago: null,
    },
];

// pointTarget의 year6ago부터 year1ago까지의 값과 매칭하여 EVAL_POINT를 집어넣기
pointTarget.forEach((target) => {
    for (let i = 6; i > 0; i--) {
        const yearKey = `year${i}ago`;
        const evalPoint = promotionEvalPointData.EVAL_POINT[target[yearKey]];
        if (evalPoint) {
            target[`year${i}ago`] = evalPoint;
            target.count = (target.count || 0) + 1;
        }else{
            target[`year${i}ago`] = 0;
        }
    }
});

console.log(pointTarget);
