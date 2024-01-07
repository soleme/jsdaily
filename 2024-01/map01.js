
const arr = [15, 30, 100];

//arr.map((item) =>  item.toString());

//console.log(arr);

const result = arr.map((item) => {
    return item.toFixed(2);
})

console.log(result);

/**
 * map 사용이점
 * 1. for loop, while loop을 사용하지 않는다.
 * 2. arr[1], arr[0] 사용하지 않는다.
 * 3. 원형 배열 수정을 하지 않는다.
 */

const location = [
    {city: 'seoul', temp:86},
    {city: 'london', temp:85},
    {city: 'toronto', temp:72},
];

// 5/9 * ( f-32 )
//const cal = 5/9 * (number - 32);

// const cal = location.map((value) => {
//     ...value
// })
const toCelcius = obj => {
    return {
        ...obj,
        temp: Math.floor(5/9 * (obj.temp - 32))
    }
}

const mapped = location.map(toCelcius);
console.log(mapped);



const hrUser = [
    {name : '홍길동', gender: 'M'},
    {name : '김길동', gender: 'F'},
    {name : '이길동', gender: 'F'},
]

const mapped2 = hrUser.map((value)=>{
    return {
        ...value,
        gender: value.gender === 'M' ? '남' : '여'
    }
});

console.log(mapped2);