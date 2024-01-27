// 2441. Largest Positive Integer That Exists With Its Negative
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Example 1:
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

// Example 2:
// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

// Example 3:
// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.

// Constraints:
// 1 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// nums[i] != 0

// const findMaxK = (nums) => {
//     nums = nums.sort((a, b) => a - b);
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//         if (-nums[i] === nums[j]) {
//             return nums[j];
//         } else if (-nums[i] < nums[j]) {
//             j--;
//         } else {
//             i++;
//         }
//     }
//     return -1;
// }

// const findMaxK = (nums) => {
//     nums = nums.sort((a, b) => a - b);
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//         if (nums[i] + nums[j] === 0) {
//             return nums[j];
//         }
//         if (nums[i] + nums[j] < 0) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return -1;
// }

const findMaxK = (nums) => {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        for (let j = nums.length - 1; j >= 0; j--) {
            console.log(nums[j])
            if (nums[i] + nums[j] === 0) {
                return nums[j];
            }
        }
    }
    return -1;
}

console.log(findMaxK([-1, 2, -3, 3]));// 3
// console.log(findMaxK([-1, 10, 6, 7, -7, 1]));// 7
// console.log(findMaxK([-10, 8, 6, 7, -2, -3]));// -1