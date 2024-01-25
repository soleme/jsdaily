let awardData = [
    { userId: "0110036", value: 1.2, },
    { userId: "0210010", value: 3.6, },
    { userId: "0210539", value: 1.5, },
];

let disciplinaryData = [
    { userId: "1600424", value: 0, },
    { userId: "0110024", value: -1.3, },
    { userId: "0410058", value: -1.3, },
    { userId: "0410430", value: -1.1, },
    { userId: "0210010", value: -1.5, },
];

let combinedData = [];

awardData.forEach(award => {
    let matchingDisciplinary = disciplinaryData.find(disciplinary => disciplinary.userId === award.userId);
    if (matchingDisciplinary) {
        combinedData.push({
            userId: award.userId,
            value: award.value + matchingDisciplinary.value
        });
    } else {
        combinedData.push({
            userId: award.userId,
            value: award.value
        });
    }
});

disciplinaryData.forEach(disciplinary => {
    let matchingAward = awardData.find(award => award.userId === disciplinary.userId);
    if (!matchingAward) {
        combinedData.push({
            userId: disciplinary.userId,
            value: disciplinary.value
        });
    }
});

console.log(combinedData);