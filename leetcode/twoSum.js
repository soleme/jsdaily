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