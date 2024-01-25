/**
 * 일자 계산 startDate ~ endDate
 */
function calDiffDay(str, end){
    const timeDiff = Math.abs(str.getTime() - end.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
}

let before = [
    {
        userId: "0910097",
        startDate: "2024-01-01",
        endDate: "2024-07-10",
        event: "35950",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
    {
        userId: "1800917",
        startDate: "2024-02-01",
        endDate: "2024-02-29",
        event: "35950",
        eventReason: "LOAPAR",
        eventReasonName: "육아휴직",
    },
];

// console.log(calDiffDay(new Date('2024-01-01'), new Date('2024-07-10')));
// console.log(calDiffDay(new Date('2024-02-01'), new Date('2024-02-29')));

sum = before.reduce((sum, value) => {
    return sum + calDiffDay(new Date(value.startDate), new Date(value.endDate));
}, 0);
console.log(sum);
