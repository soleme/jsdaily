let list = {
    "createdAt": "2024-08-07T07:59:51.381Z",
    "createdBy": "anonymous",
    "modifiedAt": "2024-08-08T04:36:28.819Z",
    "modifiedBy": "anonymous",
    "evalCode": "TEST",
    "empno": "2100007",
    "name": "김종한",
    "departmentCode": "33001529",
    "departmentName": "경동물류팀",
    "eval1GradeCode": "004",
    "eval1GradeName": "G",
    "eval2Score": 85.67,
    "eval2GradeCode": "005",
    "eval2GradeName": "E",
    "eval3Score": 85.67,
    "eval3GradeCode": "004",
    "eval3GradeName": "F",
    "eval4Score": null,
    "eval4GradeCode": null,
    "eval4GradeName": null,
};

function getFinalGrade(list) {
    const gradeCodes = [
        list.eval1GradeCode,
        list.eval2GradeCode,
        list.eval3GradeCode,
        list.eval4GradeCode
    ];

    const gradeNames = [
        list.eval1GradeName,
        list.eval2GradeName,
        list.eval3GradeName,
        list.eval4GradeName
    ];

    let finalCode = null;
    let finalName = null;

    for (let i = gradeCodes.length - 1; i >= 0; i--) {
        if (gradeCodes[i]) {
            finalCode = gradeCodes[i];
            finalName = gradeNames[i];
            break;
        }
    }

    return [finalCode, finalName];
}

// 예시 사용
const result = getFinalGrade(list);
console.log('finalCode:', result[0]);
console.log('finalName:', result[1]);