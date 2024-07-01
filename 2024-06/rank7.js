function assignGradesAndRanks(scores, distributionGrade) {
    const sortedScores = scores.sort((a, b) => b.score - a.score);

    let gradeIndex = 0;
    let gradeCount = 0;
    let prevScore = null;
    let rank = 0;
    let skipRank = 0;

    const grades = Object.keys(distributionGrade);

    return sortedScores.map((person, index) => {
        if (prevScore !== person.score) {
            rank += 1 + skipRank;
            skipRank = 0;

            if (gradeCount >= distributionGrade[grades[gradeIndex]]) {
                gradeIndex++;
                // 다음 등급으로 넘어갈 때, 분포가 0인 등급은 건너뛰기
                while (gradeIndex < grades.length && distributionGrade[grades[gradeIndex]] === 0) {
                    gradeIndex++;
                }
            }

            // 만약 모든 등급이 할당되었다면, 남은 사람들은 마지막 등급으로 처리
            if (gradeIndex >= grades.length) {
                gradeIndex = grades.length - 1;
            }

            gradeCount = 0;
        } else {
            skipRank++;
        }

        gradeCount++;
        prevScore = person.score;

        return {
            ...person,
            grade: grades[gradeIndex],
            rank: rank
        };
    });
}

// 테스트 데이터
const scoresCase1 = [
    { name: "대상자 1", score: 85.50 },
    { name: "대상자 2", score: 92.62 },
    { name: "대상자 3", score: 88.42 },
    { name: "대상자 4", score: 89.24 },
    { name: "대상자 5", score: 90.25 }
];

const scoresCase2 = [
    { name: "대상자 1", score: 85.50 },
    { name: "대상자 2", score: 92.62 },
    { name: "대상자 3", score: 88.42 },
    { name: "대상자 4", score: 89.56 },
    { name: "대상자 5", score: 89.56 }
];

const distributionGrade = { 'S': 1, 'A': 1, 'B': 1, 'C': 1, 'D': 1 };

console.log("Case 1 결과:");
console.log(assignGradesAndRanks(scoresCase1, distributionGrade));

console.log("\nCase 2 결과:");
console.log(assignGradesAndRanks(scoresCase2, distributionGrade));