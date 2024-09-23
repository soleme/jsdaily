function switchJobGrade(input, type = 'code') {

    const jobGradeMapping = {
        code: {
            'B087': 'B086',
            'B086': 'B085'
        },
        name: {
            'G3': 'G2',
            'G2': 'G1'
        }
    };

    if (typeof input !== 'string') {
        console.warn('Input must be a string');
        return null;
    }

    if (type !== 'code' && type !== 'name') {
        console.warn('Invalid type. Must be either "code" or "name"');
        return null;
    }

    return jobGradeMapping[type][input] || null;
}

// 사용 예:
const proJobGradeCode = switchJobGrade('B087', 'code');
const proJobGradeName = switchJobGrade('G3', 'name');

console.log(proJobGradeCode)
console.log(proJobGradeName)