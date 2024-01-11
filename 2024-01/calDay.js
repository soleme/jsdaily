const data1 = "전문직_선임 : 4년";
const data2 = "일반직_A : 3년";
const data3 = "일반직_M : 6년";
const data4 = "기능직 : 1년";

// 정규표현식을 사용하여 숫자만 추출
const extractYears = (data) => {
    const match = data.match(/\d+/); // 정규표현식을 사용하여 숫자 추출
    if (match) {
        return parseInt(match[0]); // 추출된 숫자를 정수로 변환하여 반환
    }
    return 0; // 숫자가 없는 경우 0을 반환하거나 다른 처리를 수행
};

// 데이터에서 숫자만 추출하여 일수를 구함
const years1 = extractYears(data1);
const years2 = extractYears(data2);
const years3 = extractYears(data3);
const years4 = extractYears(data4);

// 추출된 숫자를 이용하여 일수를 계산
const days1 = years1 * 365; // 1년을 365일로 가정
const days2 = years2 * 365;
const days3 = years3 * 365;
const days4 = years4 * 365;

console.log(days1, days2, days3, days4); // 결과 출력