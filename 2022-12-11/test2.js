var array = [
    { seqNumber: "1", date:'2022-12-22',paycompvalue: 75000000 },
    { seqNumber: "2", date:'2022-12-22',paycompvalue: 75000000 },
    { seqNumber: "1", date:'2022-12-21',paycompvalue: 50000000 },
    { seqNumber: "2", date:'2022-12-19',paycompvalue: 30000000 },
    { seqNumber: "3", date:'2022-12-19',paycompvalue: 40000000 }
];

//const arr = [{"name":"bathroom","value":54,"timeStamp":1562318089713},{"name":"bathroom","value":55,"timeStamp":1562318090807},{"name":"bedroom","value":48,"timeStamp":1562318092084},{"name":"bedroom","value":49,"timeStamp":1562318092223},{"name":"room","value":41,"timeStamp":1562318093467}]

const result = Object.values(array.reduce((r, o) => {
    r[o.date] = (r[o.date] && r[o.date].seqNumber > o.seqNumber) ? r[o.date] : o

    return r
}, {}))

console.log(result)

// const result2 = [...array.reduce((r, o) => {
//     const key = o.seqNumber + '-' + o.date;
//
//     const item = r.get(key) || Object.assign({}, o, {
//         paycompvalue: 0
//     });
//
//     item.paycompvalue += o.paycompvalue * o.annualizationFactor;
//
//     return r.set(key, item);
// }, new Map).values()];
//
// console.log(result2);
//
// var arr = [
//     {shape: 'square', color: 'red', used: 1, instances: 1},
//     {shape: 'square', color: 'red', used: 2, instances: 1},
//     {shape: 'circle', color: 'blue', used: 0, instances: 0},
//     {shape: 'square', color: 'blue', used: 4, instances: 4},
//     {shape: 'circle', color: 'red', used: 1, instances: 1},
//     {shape: 'circle', color: 'red', used: 1, instances: 0},
//     {shape: 'square', color: 'red', used: 4, instances: 4},
//     {shape: 'square', color: 'red', used: 2, instances: 2}
// ];
//
// const result = [...arr.reduce((r, o) => {
//     const key = o.shape + '-' + o.color;
//
//     const item = r.get(key) || Object.assign({}, o, {
//         used: 0,
//         instances: 0
//     });
//
//     item.used += o.used;
//     item.instances += o.instances;
//
//     return r.set(key, item);
// }, new Map).values()];
//
// console.log(result);