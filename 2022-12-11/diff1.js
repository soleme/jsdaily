function diffDate(d1, d2) {
    let sReturnData = "";
    let dif = d2 - d1; // Calculate the difference in days
    let elapsedDays = Math.floor(dif / 1000 / 60 / 60 / 24); // Calculate the number of years, months, and days

    let years = Math.floor(elapsedDays / 365);
    let months = Math.floor((elapsedDays - (years * 365)) / 30);
    let days = elapsedDays - (years * 365) - (months * 30); // Format the result as a string

    sReturnData = `${years}년${months}개월${days}일`;

    return sReturnData;
}

let d1 = new Date('2022-01-01');
let d2 = new Date('2022-01-29');

console.log(diffDate(d1, d2));