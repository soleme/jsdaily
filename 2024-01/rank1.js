let totalTargetList = [
    {
        userId: "0410514",
        grade: "3020",
        gradeName: "V2급",
        totalPoint: "72.10",
    },
    {
        userId: "0510817",
        grade: "3020",
        gradeName: "V2급",
        totalPoint: "76.80",
    },
    {
        userId: "0610429",
        grade: "3020",
        gradeName: "V2급",
        totalPoint: "0.80",
    },
    {
        userId: "0610450",
        grade: "3020",
        gradeName: "V2급",
        totalPoint: "0.80",
    },
    {
        userId: "0910163",
        grade: "3020",
        gradeName: "V2급",
        totalPoint: "0.70",
    }
]

// grade별로 그룹화
const gradeGroups = {};
totalTargetList.forEach(item => {
    if (!gradeGroups[item.grade]) {
        gradeGroups[item.grade] = [];
    }
    gradeGroups[item.grade].push(item);
});

// 각 grade 그룹별로 rank 부여 및 데이터베이스 업데이트
for (const grade in gradeGroups) {
    const group = gradeGroups[grade];
    group.sort((a, b) => parseFloat(b.totalPoint) - parseFloat(a.totalPoint));
    let rank = 1;
    for (let i = 0; i < group.length; i++) {
        group[i].rank = rank;
        rank++;
    }
}

console.log(totalTargetList);