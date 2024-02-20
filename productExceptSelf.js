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

// var productExceptSelf = function (nums) {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let prefix = 1;
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) {
//                 continue;
//             }
//             prefix *= nums[j];
//         }
//         res[i] = prefix;
//     }
//     return res;
// };

// var productExceptSelf = function (nums) {
//     let res = [];
//     let sum = nums.reduce((acc, val) => acc * val);
//     console.log(sum)
//     for (let i = 0; i < nums.length; i++) {
//         res.push(sum / nums[i]);
//     }
//     return res;
// };

// var productExceptSelf = function (nums) {
//     let left = [];
//     left[0] = 1;
//     let right = [];
//     right[nums.length - 1] = 1;
//     let res = [];
//     for (let i = 1; i < nums.length; i++) {
//         left[i] = left[i - 1] * nums[i - 1];
//     }
//     for (let i = nums.length - 2; i >= 0; i--) {
//         right[i] = right[i + 1] * nums[i + 1];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         res[i] = left[i] * right[i];
//     }
//     return res;
// };

var productExceptSelf = function (nums) {
    let res = new Array(nums.length).fill(1);
    let cur = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] *= cur;
        cur *= nums[i];
    }
    cur = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= cur;
        cur *= nums[i];
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));//[24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));//[0,0,9,0,0]
console.log(productExceptSelf([4, 3, 2, 1, 2]));//[12,16,24,48,24]

// https://www.youtube.com/watch?v=bNvIQI2wAjk&t=157s
// https://www.youtube.com/watch?v=G9zKmhybKBM