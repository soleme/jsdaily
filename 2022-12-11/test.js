var array = [
    { seqNumber: "1", paycompvalue: 10000, date:'2022-12-19', annualizationFactor: 1 },
    { seqNumber: "1", paycompvalue: 3000002, date:'2022-12-19', annualizationFactor: 12 },
    { seqNumber: "2", paycompvalue: 100000, date:'2022-12-19', annualizationFactor: 12 },
    { seqNumber: "2", paycompvalue: 3000002 , date:'2022-12-19', annualizationFactor: 12},
    { seqNumber: "1", paycompvalue: 3000001, date:'2022-11-01', annualizationFactor: 12 }
];

const result2 = [...array.reduce((r, o) => {
    const key = o.seqNumber + '-' + o.date;

    const item = r.get(key) || Object.assign({}, o, {
        paycompvalue: 0
    });

    item.paycompvalue += o.paycompvalue * o.annualizationFactor;

    return r.set(key, item);
}, new Map).values()];

console.log(result2);

var arr = [
    {shape: 'square', color: 'red', used: 1, instances: 1},
    {shape: 'square', color: 'red', used: 2, instances: 1},
    {shape: 'circle', color: 'blue', used: 0, instances: 0},
    {shape: 'square', color: 'blue', used: 4, instances: 4},
    {shape: 'circle', color: 'red', used: 1, instances: 1},
    {shape: 'circle', color: 'red', used: 1, instances: 0},
    {shape: 'square', color: 'red', used: 4, instances: 4},
    {shape: 'square', color: 'red', used: 2, instances: 2}
];

const result = [...arr.reduce((r, o) => {
    const key = o.shape + '-' + o.color;

    const item = r.get(key) || Object.assign({}, o, {
        used: 0,
        instances: 0
    });

    item.used += o.used;
    item.instances += o.instances;

    return r.set(key, item);
}, new Map).values()];

console.log(result);