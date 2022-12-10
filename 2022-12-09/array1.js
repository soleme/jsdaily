let arr = [1,2,3,4];

let newArr = arr.map((data)=>{
    return data * 2
});

console.log(newArr);

let arr2 = [1, 5, 8, 10, 12, 15, 16, 20];
let newArr2 = arr2.filter((data)=>{
   return data % 5 === 0 ? true : false;
});

console.log(newArr2);