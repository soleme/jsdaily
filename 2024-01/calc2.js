const inputStrings = [
    "[전문직_선임] : 2년 11개월",
    "[영업전문직_V3급] : 3년",
    "[전문직_선임] 4년",
    "[영업전문직_V5급] 1년 7개월",
    "[영업전문직_V5급] 1년 7개월",
    "[영업전문직_V3급] 2년 12개월"
];

const pattern = /(\d+)년/g;
inputStrings.forEach(inputString => {
    const match = inputString.match(pattern);
    if (match) {
        const years = match[0].replace('년', '');
        console.log(years);
    }
});