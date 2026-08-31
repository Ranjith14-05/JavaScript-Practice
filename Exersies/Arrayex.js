nums = [];

function doubleArr(nums){
    arrDoubled =[];

    for(let i = 0;i<nums.length;i++){
        let val = nums[i];
        arrDoubled.push(val*2);
    }
    return arrDoubled;
}

console.log(doubleArr([1,2,3]))