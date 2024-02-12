// 1838. Frequency of the Most Frequent Element
// The frequency of an element is the number of times it occurs in an array.
// You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.
// Return the maximum possible frequency of an element after performing at most k operations.

// Example 1:
// Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.

// Example 2:
// Input: nums = [1,4,8,13], k = 5
// Output: 2
// Explanation: There are multiple optimal solutions:
// - Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
// - Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
// - Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

// Example 3:
// Input: nums = [3,9,6], k = 2
// Output: 1

// Constraints:
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 1 <= k <= 105

// var maxFrequency = function (nums, k) {
//     nums = nums.sort((a, b) => a - b);
//     let i = 0;
//     let j = 0;
//     let max = 0;
//     let sum = 0;
//     while (j < nums.length) {
//         sum += nums[j];
//         if (nums[j] * (j - i + 1) > sum + k) {
//             sum -= nums[i];
//             i++;
//         }
//         max = Math.max(max, (j - i + 1));
//         j++;
//     }
//     console.log(sum);
//     return max;
// }

const maxFrequency = (nums, k) => {
    nums = nums.sort((a, b) => a - b);
    let max = 0;
    let sum = 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        if (nums[j] * (j - i + 1) > sum + k) {
            sum -= nums[i++];
        }
        max = Math.max(max, (j - i + 1));
    }
    return max;
}

console.log(maxFrequency([1, 2, 4], 5));// 3
console.log(maxFrequency([1, 4, 8, 13], 5));// 2
console.log(maxFrequency([3, 9, 6], 2));// 1