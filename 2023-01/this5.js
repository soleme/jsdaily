var numbers = [10,20,3,16,45];
var max = min = numbers[0];

numbers.forEach(function(number){
    if(number > max){
        // console.log(number, max);
        max = number;
    }
    if(number < min){
        min = number;
    }
})

console.log(min, max);

var min1 = Math.min.apply(null, numbers);
var max1 = Math.max.apply(null, numbers);
console.log(min1, max1);

const min2 = Math.min(...numbers);
const max2 = Math.max(...numbers);
console.log(min2, max2);