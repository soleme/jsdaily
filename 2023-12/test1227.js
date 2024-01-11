function convertTimestampToDateString(timestamp) {
    let date = new Date(timestamp);
    return date.toISOString().slice(0, 10); // YYYY-MM-DD 형식의 문자열 반환
}

let result = convertTimestampToDateString(Date.now());
console.log(result);