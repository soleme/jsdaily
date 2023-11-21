const employmentDate = new Date('2023-05-01');
const comparisonDate = new Date('2018-02-28');

if (employmentDate < comparisonDate) {
    console.log('입사일은 비교하는 일자보다 이전입니다.');
} else if (employmentDate > comparisonDate) {
    console.log('입사일은 비교하는 일자보다 나중입니다.');
} else {
    console.log('입사일과 비교하는 일자는 동일합니다.');
}

let hireYear = 1;

if(hireYear < 1 ){
    console.log('1년이상 아님')
}