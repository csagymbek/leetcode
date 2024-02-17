// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

var productExceptSelf = function (nums) {
    let res = [];
    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));//[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));//[0,0,9,0,0]
console.log(productExceptSelf([4, 3, 2, 1, 2]));//[12,16,24,48,24]

// https://www.youtube.com/watch?v=bNvIQI2wAjk&t=157s
// https://www.youtube.com/watch?v=G9zKmhybKBM