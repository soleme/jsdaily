let newValue = [
    {
        userId: "0110024",
        startDate: "1988-03-02",
        degreeCode: "50",
        degreeName: "중졸",
    },
    {
        userId: "0110024",
        startDate: "1991-03-02",
        degreeCode: "80",
        degreeName: "고졸",
    },
    {
        userId: "0110024",
        startDate: "1994-03-02",
        degreeCode: "150",
        degreeName: "대졸",
    },
    {
        userId: "0110024",
        startDate: "2019-03-01",
        degreeCode: "200",
        degreeName: "대학원석사",
    },
]

// 동일 userId의 startDate가 가장 최근데이터 한건만 구하기
const latestData = Object.values(newValue.reduce((acc, cur) => {
    if (!acc[cur.userId] || new Date(acc[cur.userId].startDate) < new Date(cur.startDate)) {
        acc[cur.userId] = cur;
    }
    return acc;
}, {}));

console.log(latestData);