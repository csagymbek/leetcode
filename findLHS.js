// 594. Longest Harmonious Subsequence
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 2

// Example 3:
// Input: nums = [1,1,1,1]
// Output: 0

// Constraints:
// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

const findLHS = (nums) => {
    let max = 0;
    let flag = false;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
            if (nums[j] + 1 === nums[i]) {
                count++;
                flag = true;
            }
        }
        if (flag) {
            max = Math.max(max, count);
        }
    }
    return max;
}

// const findLHS = (nums) => {
//     let obj = {};
//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = (obj[nums[i]] || 0) + 1;
//     }
//     console.log(obj);
//     console.log(Object.keys(obj));
//     for (let key of Object.keys(obj)) {
//         console.log(key);
//         console.log(obj[key]);
//         console.log(obj.hasOwnProperty(key + 1));
//         if (obj[key - 1]) {
//             max = Math.max(max, obj[key] + obj[key - 1]);
//         }
//     }
//     return max;
// }

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));// 5
console.log(findLHS([1, 2, 3, 4]));// 2
console.log(findLHS([1, 1, 1, 1]));// 0