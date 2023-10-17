let twoSum = function (nums, target){
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];

        if (map.has(x)) {
            return [map.get(x), i];
        }

        map.set(nums[i], i);
    }

    return [];
}


//console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([1,2,5,4], 9)); // [0,1]
//console.log(twoSum([3,2,4], 6)); // [1,2]
//console.log(twoSum([3,3], 6)); // [0,1]



// 현재 날짜로부터 1년을 뺀 날짜 계산
let oneYearAgo = new Date();
oneYearAgo.setFullYear(new Date().getFullYear() - 1);
console.log(oneYearAgo);

let oneMonth = new Date();
oneMonth.setMonth(new Date().getMonth() + 1);
console.log(oneMonth);