// 1004. Max Consecutive Ones III
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// var longestOnes = function (nums, k) {
//     let i = 0;
//     let j = 0;
//     while (j < nums.length) {
//         if (nums[j++] === 0) {
//             k--;
//         }
//         if (k < 0) {
//             if (nums[i++] === 0) {
//                 k++;
//             }
//         }
//     }
//     return j - i;
// };

// var longestOnes = function (nums, k) {
//     let i = 0;
//     let count = 0;
//     let max = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] === 0) {
//             count++;
//         }
//         if (count > k) {
//             if (nums[i] === 0) {
//                 count--;
//             }
//             i++;
//         }
//         max = Math.max(max, j - i + 1);
//     }
//     return max;
// }

// var longestOnes = function (nums, k) {
//     let i = 0;
//     let j = 0;
//     while (j < nums.length) {
//         if (nums[j] === 0) {
//             k--;
//         }
//         if (k < 0) {
//             if (nums[i] === 0) {
//                 k++;
//             }
//             i++;
//         }
//         j++;
//     }
//     return j - i;
// }

var longestOnes = function (nums, k) {
    let i = 0;
    let count = 0;
    let max = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) {
            count++;
        }
        if (count > k) {
            if (nums[i] === 0) {
                count--;
            }
            i++;
        }
        max = Math.max(max, j - i + 1);
    }
    return max;
};
// k = 0
//                 i                 j
// [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));// 6
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));// 10