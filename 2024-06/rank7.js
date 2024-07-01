function assignGradesAndRanks(scores, distribution) {
    // 점수 내림차순 정렬
    const sortedScores = scores.sort((a, b) => b.score - a.score);

    let gradeIndex = 0;
    let gradeCount = 0;
    let prevScore = null;
    let rank = 0;
    let skipRank = 0;

    const grades = ['S', 'A', 'B', 'C', 'D'];

    return sortedScores.map((person, index) => {
        if (prevScore !== person.score) {
            rank += 1 + skipRank;
            skipRank = 0;

            if (gradeCount >= distribution[gradeIndex]) {
                gradeIndex++;
                // B 등급을 건너뛰고 C로 가기 위한 조정
                if (gradeIndex === 2 && gradeCount > distribution[1]) {
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

const distribution = [1, 1, 1, 1, 1]; // S, A, B, C, D 각각 1명씩

console.log("Case 1 결과:");
console.log(assignGradesAndRanks(scoresCase1, distribution));

console.log("\nCase 2 결과:");
console.log(assignGradesAndRanks(scoresCase2, distribution));