const gradeLimits = [
    {
        E: 0,
        G: 4,
        M: 7,
        I: 2,
        U: 0,
    },
]

//let objGradeLimits = Object.entries(gradeLimits);
//console.log(objGradeLimits);

let cumlative = 0;
let gradeRanges = [];
for(let [grade, count] of Object.entries(gradeLimits)) {
    const min = cumlative + 1;
    gradeRanges[grade] = { min };
}

console.log(gradeRanges);