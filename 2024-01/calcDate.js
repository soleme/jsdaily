let startDate = new Date('2024-02-01');
let endDate = new Date('2024-01-31');

// 날짜 차이 계산


//console.log(`basicDate에서 promotionDate까지의 일수는 ${diffDays}일 입니다.`);

function calDiffDay(startDate, endDate){
    let timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
}

const result = calDiffDay(startDate, endDate);
console.log(result)