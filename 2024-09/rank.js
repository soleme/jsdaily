function calculateGradeRanges(gradeLimits) {
    let cumulative = 0;
    let gradeRanges = {};

    // 각 등급의 최소값과 최대값을 계산
    for (let [grade, count] of Object.entries(gradeLimits)) {
        const min = cumulative + 1;  // 최소값: 상위 등급 가능한 인원 수 누계 + 1
        const max = cumulative + count;  // 최대값: 상위 등급 가능한 인원 수 누계 + 해당 등급 인원 수
        gradeRanges[grade] = { min, max };
        cumulative = max;  // 상위 등급 가능한 인원 수 누계 업데이트
    }

    return gradeRanges;
}

// 평가에서 순위/등급
function assignGradesAndRanks(scores, gradeLimits) {
    // 등급별 최소값과 최대값 계산
    const gradeRanges = calculateGradeRanges(gradeLimits);

    // 점수를 내림차순으로 정렬
    const sortedScores = scores.sort((a, b) => b.adjustScore - a.adjustScore);

    let rank = 0;
    let skipRank = 0;
    let prevScore = null;
    let prevGrade = null; // 이전 등급 저장 변수

    // 등급 인원 수 카운터 초기화
    let gradeCounts = { E:0, G: 0, M: 0, I: 0, U: 0 };

    return sortedScores.map((person, index) => {
        if (prevScore !== person.adjustScore) {
            // 새로운 점수일 경우 순위를 1씩 증가
            rank += 1 + skipRank;
            skipRank = 0;  // 동일한 점수가 아닌 경우 skipRank 초기화
            prevGrade = null;  // 새로운 점수일 때는 이전 등급 초기화
        } else {
            // 동일한 점수일 경우 순위를 건너뜀
            skipRank++;
        }

        prevScore = person.adjustScore;

        // 등급을 할당 (이전 등급이 있으면 그 등급을 유지)
        const grade = prevGrade || assignGradeWithLimit(rank, gradeRanges, gradeCounts);

        prevGrade = grade;  // 이번에 할당한 등급을 다음 사람에게도 적용할 수 있도록 저장

        return {
            ...person,
            rank: rank,
            grade: grade  // 계산된 등급 반환
        };
    });
}

// 등급을 인원수 제한에 맞춰 할당하는 함수
function assignGradeWithLimit(rank, gradeRanges, gradeCounts) {
    // 각 등급에 대해 최소값과 최대값 범위 내에 순위(rank)가 있는지 확인
    for (let [grade, range] of Object.entries(gradeRanges)) {
        // 순위가 등급 범위 내에 있고 해당 등급에 할당할 수 있으면 등급 부여
        if (rank >= range.min && rank <= range.max) {
            // 인원수 제한 체크
            if (gradeCounts[grade] < (range.max - range.min + 1)) {
                gradeCounts[grade]++;
                return grade;
            }
        }
    }
    return null; // 해당하는 등급이 없을 경우
}

const gradeLimits = { E: 0, G: 4, M: 7, I: 2, U: 0 };
const peopleList = [
    {
        evalCode: "BR-0001",
        empno: "31000121",
        name: "외계인",
        adjustScore: 100,
    },
    {
        evalCode: "BR-0001",
        empno: "20631022",
        name: "손희봉",
        adjustScore: 92.5,
    },
    {
        evalCode: "BR-0001",
        empno: "31000119",
        name: "민초단",
        adjustScore: 86.67,
    },
    {
        evalCode: "BR-0001",
        empno: "20731278",
        name: "박종철",
        adjustScore: 85,
    },
    {
        evalCode: "BR-0001",
        empno: "31000007",
        name: "박혜정",
        adjustScore: 85,
    },
    {
        evalCode: "BR-0001",
        empno: "20931423",
        name: "이창용",
        adjustScore: 84,
    },
    {
        evalCode: "BR-0001",
        empno: "31000004",
        name: "정지원",
        adjustScore: 83.33,
    },
    {
        evalCode: "BR-0001",
        empno: "21031375",
        name: "백영휘",
        adjustScore: 80,
    },
    {
        evalCode: "BR-0001",
        empno: "21031488",
        name: "장평화",
        adjustScore: 80,
    },
    {
        evalCode: "BR-0001",
        empno: "21131142",
        name: "김수연",
        adjustScore: 80,
    },
    {
        evalCode: "BR-0001",
        empno: "31000017",
        name: "송강",
        adjustScore: 80,
    },
    {
        evalCode: "BR-0001",
        empno: "21031414",
        name: "김은영",
        adjustScore: 70,
    },
    {
        evalCode: "BR-0001",
        empno: "31002981",
        name: "신윤하",
        adjustScore: 70,
    },
]

const rankData = assignGradesAndRanks(peopleList, gradeLimits);
console.log(rankData);