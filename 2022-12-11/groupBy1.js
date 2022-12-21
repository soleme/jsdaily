const groupBy = function (data, key) {
    return data.reduce(function (carry, el) {
        var group = el[key];

        if (carry[group] === undefined) {
            carry[group] = []
        }

        carry[group].push(el)
        return carry
    }, {})
}

const results = [
    { seqNumber: "1", paycompvalue: 10000, date:'2022-12-19' },
    { seqNumber: "1", paycompvalue: 3000002, date:'2022-12-19' },
    { seqNumber: "2", paycompvalue: 100000, date:'2022-12-19' },
    { seqNumber: "2", paycompvalue: 3000002 , date:'2022-12-19'},
    { seqNumber: "1", paycompvalue: 3000001, date:'2022-11-01' }
];

const result = groupBy(results, 'date');
console.log(result);

let r = _.chain(results)