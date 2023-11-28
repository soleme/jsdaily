// 출산일이 2023-05-01이면
// 출산일 이후 12개월 , 2023-05-01 + 12개월 => 2024-05-01
// 출산일 이전 1개월  , 2023-05-01 - 1개월  =? 2023-04-01

function calculateDates(birthDate) {
    const birth = new Date(birthDate);
    const birth2 = new Date(birthDate);
    const afterTwelveMonths = new Date(birth.setMonth(birth.getMonth() + 12));
    const beforeOneMonth = new Date(birth2.setMonth(birth.getMonth() - 1));

    return {
        afterTwelveMonths: afterTwelveMonths.toISOString().split('T')[0],
        beforeOneMonth: beforeOneMonth.toISOString().split('T')[0]
    };
}

const dates = calculateDates('2023-05-01');
console.log(dates);