async function assignGradesAndRanks(scores, distributionGrade) {
    // 조정점수에 따른 내림차순 정렬
    const sortedScores = scores.sort((a, b) => b.adjustScore - a.adjustScore);

    let gradeIndex = 0;  // 현재 등급을 추적하는 인덱스
    let gradeCount = 0;  // 현재 등급에 할당된 사람 수
    let prevScore = null;  // 이전 사람의 점수
    let rank = 0;  // 현재 순위
    let skipRank = 0;  // 동점자에 의해 건너뛸 순위 수
    let currentGradeCapacity = distributionGrade[Object.keys(distributionGrade)[gradeIndex]]; // 현재 등급의 할당 인원 수

    const grades = Object.keys(distributionGrade);

    return sortedScores.map((person, index) => {
        // 새로운 점수일 경우 순위 갱신
        if (prevScore !== person.adjustScore) {
            rank += 1 + skipRank;  // 동점자 수만큼 순위를 건너뜀
            skipRank = 0;  // 건너뛸 순위 초기화
        } else {
            // 동점자의 경우, 순위는 같게 하고 건너뛸 순위를 증가시킴
            skipRank++;
        }

        // 현재 등급이 다 찼을 경우, 다음 등급으로 넘어감
        if (gradeCount >= currentGradeCapacity) {
            gradeIndex++;
            gradeCount = 0;  // 새로운 등급에 대한 카운트 초기화

            // 다음 등급으로 넘어갔을 때, 분포가 0인 등급을 건너뛰기
            while (distributionGrade[grades[gradeIndex]] === 0 && gradeIndex < grades.length) {
                gradeIndex++;
            }

            // 새로운 등급의 인원 수 갱신
            currentGradeCapacity = distributionGrade[grades[gradeIndex]];
        }

        // 현재 등급에 사람 수 추가
        gradeCount++;
        prevScore = person.adjustScore;  // 현재 사람의 점수를 저장

        // 각 사람에게 등급과 순위를 부여
        return {
            ...person,
            grade: grades[gradeIndex],  // 현재 등급을 부여
            rank: rank  // 순위를 부여
        };
    });
}

const scores = [
    { adjustScore: 100 },
    { adjustScore: 92.5 },
    { adjustScore: 86.67 },
    { adjustScore: 85 },
    { adjustScore: 85 },
    { adjustScore: 84 },
    { adjustScore: 83.33 },
    { adjustScore: 80 },
    { adjustScore: 80 },
    { adjustScore: 80 },
    { adjustScore: 80 },
    { adjustScore: 70 },
    { adjustScore: 70 }
];

const distributionGrade = {
    'E': 0,
    'G': 4,
    'M': 7,
    'I': 2,
    'U': 0
};

const result = assignGradesAndRanks(scores, distributionGrade);
console.log(result);

