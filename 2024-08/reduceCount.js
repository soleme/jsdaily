const data = [
    {
        userId: "2090054",
        langExamCode: "OLD00001",
        langExamName: "TOEIC (구)",
        score: "805",
        certiSubTypeCode: "LANG02",
        certiSubTypeName: "영어",
        certiGradeCode: undefined,
        certiGradeName: undefined,
    },
    {
        userId: "2090054",
        langExamCode: "10033",
        langExamName: "TOEIC SPEAKING(신)",
        score: "110",
        certiSubTypeCode: "LANG02",
        certiSubTypeName: "영어",
        certiGradeCode: undefined,
        certiGradeName: undefined,
    }
];

// userId의 발생 횟수를 계산
const userIdCount = data.reduce((acc, item) => {
    acc[item.userId] = (acc[item.userId] || 0) + 1;
    return acc;
}, {});

// 두 번 이상 등장한 userId를 찾음
const duplicateUserIds = Object.keys(userIdCount).filter(userId => userIdCount[userId] > 1);

console.log(duplicateUserIds); // ["2090054"]가 출력됨
