const data = [
    {
        "NEWBS": "50",
        "WRBTR": 33333
    },
    {
        "NEWBS": "40",
        "WRBTR": 33330
    },
    {
        "NEWBS": "40",
        "WRBTR": 3
    }
];

// 각 "NEWBS" 값에 따른 "WRBTR"의 합을 저장할 객체 생성
const sumByNewbs = {};

// 데이터 배열을 순회하면서 합산
data.forEach(entry => {
    const newbs = entry.NEWBS;
    const wrbtr = entry.WRBTR;

    // sumByNewbs 객체에 "NEWBS" 값이 없으면 초기화
    if (!sumByNewbs[newbs]) {
        sumByNewbs[newbs] = 0;
    }

    // "WRBTR" 값을 더함
    sumByNewbs[newbs] += wrbtr;
});

// 결과 출력
console.log("NEWBS '50'의 WRBTR 합계:", sumByNewbs["50"]);
console.log("NEWBS '40'의 WRBTR 합계:", sumByNewbs["40"]);
