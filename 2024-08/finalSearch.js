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

let finalCode = null;
let finalName = null;

// Check from eval4GradeCode to eval1GradeCode
if (list.eval4GradeCode) {
    finalCode = list.eval4GradeCode;
    finalName = list.eval4GradeName;
} else if (list.eval3GradeCode) {
    finalCode = list.eval3GradeCode;
    finalName = list.eval3GradeName;
} else if (list.eval2GradeCode) {
    finalCode = list.eval2GradeCode;
    finalName = list.eval2GradeName;
} else if (list.eval1GradeCode) {
    finalCode = list.eval1GradeCode;
    finalName = list.eval1GradeName;
}

console.log('finalCode:', finalCode);
console.log('finalName:', finalName);