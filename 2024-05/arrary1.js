let ar = [{
    ar1: 'test',
    ar2: 'test2'
},
    {
        ar1: 'test3',
        ar2: 'test4'
    }]

let ar2 = [{
    ar1: 'test5',
    ar2: 'test6'
}]

let merge = [...ar, ...ar2];

console.log(merge)