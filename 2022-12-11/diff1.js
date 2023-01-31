function diffDate(date1, date2)
{
    var daysDiff = Math.ceil((Math.abs(date1 - date2)) / (1000 * 60 * 60 * 24));

    var years = Math.floor(daysDiff / 365.25);
    var remainingDays = Math.floor(daysDiff - (years * 365.25));
    var months = Math.floor((remainingDays / 365.25) * 12);
    var days = daysDiff > 30 ? Math.ceil(daysDiff - (years * 365.25 + (months / 12 * 365.25))) : Math.ceil(daysDiff - (years * 365.25 + (months / 12 * 365.25))) + 1;

    return {
        daysAll: daysDiff,
        years: years,
        months: months,
        days:days
    }
}

console.log(diffDate(new Date('2022-01-01'), new Date('2022-12-13')));
console.log(diffDate(new Date('2022-11-29'), new Date('2022-12-13')));
console.log(diffDate(new Date('2022-11-22'), new Date('2022-12-13')));
console.log(diffDate(new Date('2022-11-16'), new Date('2022-12-13')));

console.log(diffDate(new Date('2022-01-01'), new Date(new Date().setHours(0,0,0,0))));
console.log(diffDate(new Date('2022-11-14'), new Date(new Date().setHours(0,0,0,0))));

// 30일이 넘지않으면 그냥 new Date를 사용하고 30일이 넘으면

// Sat Jan 01 2022 09:00:00 GMT+0900 (한국 표준시)
//Tue Dec 13 2022 10:55:26 GMT+0900 (한국 표준시)

//vOneData._hirePeriod = "("+Common._diffDate(oData.results[0].empInfo.originalStartDate, new Date(new Date().setHours(0,0,0,0)))+")";