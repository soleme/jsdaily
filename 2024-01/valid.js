function isValidCalYear(calYear) {
    // 입력값이 1부터 6까지의 문자열인지 확인
    return /^[1-6]$/.test(calYear);
}

// 예시
const userInput = "7";
if (isValidCalYear(userInput)) {
    console.log("유효한 cal_year 값입니다.");
} else {
    console.log("유효하지 않은 cal_year 값입니다.");
}