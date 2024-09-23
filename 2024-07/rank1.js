function assignGradesAndRanks(scores, distributionGrade) {
    const sortedScores = scores.sort((a, b) => b.adjustScore - a.adjustScore);

    let gradeIndex = 0;
    let gradeCount = 0;
    let prevScore = null;
    let rank = 0;
    let sameRankCount = 0;

    const grades = Object.keys(distributionGrade);

    return sortedScores.map((person, index) => {
        if (prevScore !== person.adjustScore) {
            rank += 1 + sameRankCount;
            sameRankCount = 0;

            if (gradeCount >= distributionGrade[grades[gradeIndex]]) {
                gradeIndex++;
                gradeCount = 0;

                while (gradeIndex < grades.length && distributionGrade[grades[gradeIndex]] === 0) {
                    gradeIndex++;
                }
            }

            if (gradeIndex >= grades.length) {
                gradeIndex = grades.length - 1;
            }
        } else {
            sameRankCount++;
        }

        gradeCount++;
        prevScore = person.adjustScore;

        return {
            ...person,
            grade: grades[gradeIndex],
            rank: rank
        };
    });
}



let peopleList = [
    {evalCode: "BR2024",empno: "31002736",name: "이소민",adjustScore: 100,},
    {evalCode: "BR2024",empno: "31004514",name: "이정훈",adjustScore: 100,},
    {evalCode: "BR2024",empno: "20531072",name: "배진주",adjustScore: 91.25,},
    {evalCode: "BR2024",empno: "21331124",name: "구민정",adjustScore: 91.25,},
    {evalCode: "BR2024",empno: "31004337",name: "오서현",adjustScore: 90,},
    {evalCode: "BR2024",empno: "20931316",name: "송지혁",adjustScore: 83.75,},
    {evalCode: "BR2024",empno: "31005298",name: "문예원",adjustScore: 80,},
    {evalCode: "BR2024",empno: "31004988",name: "김경호",adjustScore: 80,},
    {evalCode: "BR2024",empno: "31005738",name: "김소영",adjustScore: 70,},
    {evalCode: "BR2024",empno: "9631336",name: "박경호",adjustScore: 68.75,},
    {evalCode: "BR2024",empno: "21031470",name: "박은의",adjustScore: 60,},
];
let distributionList = [ { U: 4, I: 4, M: 3, },]

// Usage example
const result = assignGradesAndRanks(peopleList, distributionList[0]);
console.log(result);