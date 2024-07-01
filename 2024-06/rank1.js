function assignGrades(targets) {
    // 등급 배분표 (S, A, B, C, D 각각 1명씩)
    const gradeDistribution = {
        S: 1,
        A: 1,
        B: 1,
        C: 1,
        D: 1
    };

    // 점수 내림차순으로 정렬
    targets.sort((a, b) => b.adjustedScore - a.adjustedScore);

    // 등급 할당을 위한 초기 설정
    const grades = Object.keys(gradeDistribution);
    let gradeIndex = 0;
    let currentGrade = grades[gradeIndex];
    let remainingCount = gradeDistribution[currentGrade];
    let previousScore = null;
    let currentRank = 1;
    let sameRankCount = 0;

    targets.forEach((target, index) => {
        // 동점자가 있는 경우 동일한 순위 및 등급 부여
        if (previousScore !== null && target.adjustedScore === previousScore) {
            target.rank = currentRank;
            target.grade = currentGrade;
            sameRankCount++;
        } else {
            // 다음 등급으로 넘어갈 때 처리
            if (remainingCount === 0) {
                gradeIndex++;
                currentGrade = grades[gradeIndex] || 'D'; // 등급이 없으면 기본으로 'D'
                remainingCount = gradeDistribution[currentGrade];
            }

            currentRank = index + 1;
            target.rank = currentRank;
            target.grade = currentGrade;
            sameRankCount = 1;
        }

        remainingCount--;
        previousScore = target.adjustedScore;
    });

    return targets;
}

// 예제 데이터
const targets = [
    { name: '대상자 1', adjustedScore: 85.50 },
    { name: '대상자 2', adjustedScore: 92.62 },
    { name: '대상자 3', adjustedScore: 88.42 },
    { name: '대상자 4', adjustedScore: 89.24 },
    { name: '대상자 5', adjustedScore: 90.25 },
    { name: '대상자 6', adjustedScore: 92.62 } // 동점자 예시 추가
];

// 등급 배분 함수 호출
const result = assignGrades(targets);
console.log(result);
