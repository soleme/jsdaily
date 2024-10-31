function extractLastNumberInBrackets(str, option) {
    // option이 '1'이면 앞부분(괄호 앞 텍스트)을 반환
    if (option === '1') {
        let match = str.match(/^[^\(]+/);  // 괄호 전까지의 텍스트 추출
        return match ? match[0].trim() : null;  // 추출된 텍스트 반환
    }
    // option이 '2'이면 마지막 괄호 안의 숫자를 반환
    else if (option === '2') {
        let match = str.match(/\((\d+)\)/g);  // 마지막 괄호 안의 숫자 추출
        if (match) {
            return match.pop().match(/\d+/)[0];  // 마지막 숫자 반환
        } else {
            return null;  // 매칭되는 숫자가 없으면 null 반환
        }
    }
    // 잘못된 옵션 값이 들어오면 null 반환
    else {
        return null;
    }
}

// 예시 테스트
let str1 = "영업부문(서울) (80000001)";
let str2 = "영업부문(80000001)";
let str3 = "영업부문(서울)";
let str4 = "영업부문(서울) (90000002) (80000001)";

console.log(extractLastNumberInBrackets(str1, '1')); // 영업부문
console.log(extractLastNumberInBrackets(str1, '2')); // 80000001

console.log(extractLastNumberInBrackets(str2, '1')); // 영업부문
console.log(extractLastNumberInBrackets(str2, '2')); // 80000001

console.log(extractLastNumberInBrackets(str3, '1')); // 영업부문
console.log(extractLastNumberInBrackets(str3, '2')); // null (숫자가 없는 경우)

console.log(extractLastNumberInBrackets(str4, '1')); // 영업부문
console.log(extractLastNumberInBrackets(str4, '2')); // 80000001 (마지막 괄호 안의 숫자 추출)
