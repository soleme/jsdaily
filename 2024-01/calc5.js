let awardsData = [
    {
        year: "2024",
        userId: "0110036",
        issueDate: "2023-11-28",
        name: "모범사원",
    },
    {
        year: "2024",
        userId: "0210010",
        issueDate: "2023-11-17",
        name: "참잘햇어요",
    },
    {
        year: "2024",
        userId: "0210010",
        issueDate: "2023-11-28",
        name: "참잘햇어요",
    },
    {
        year: "2024",
        userId: "0210539",
        issueDate: "2023-11-17",
        name: "수상한 수상",
    },
];

let rewardList = [
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-22T06:06:56.102Z",
        modifiedBy: "anonymous",
        year: "2024",
        gubun: "20",
        code: "참잘햇어요",
        value: "1.80",
        remark: "",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-22T06:06:56.102Z",
        modifiedBy: "anonymous",
        year: "2024",
        gubun: "20",
        code: "모범사원",
        value: "1.20",
        remark: "",
    },
    {
        createdAt: null,
        createdBy: null,
        modifiedAt: "2024-01-22T06:06:56.102Z",
        modifiedBy: "anonymous",
        year: "2024",
        gubun: "20",
        code: "수상한 수상",
        value: "1.50",
        remark: "",
    },
];

let result = {};

awardsData.forEach(award => {
    const matchingReward = rewardList.find(reward => award.name === reward.code);
    if (matchingReward) {
        result[award.userId] = (result[award.userId] || 0) + parseFloat(matchingReward.value);
    }
});

console.log(result);