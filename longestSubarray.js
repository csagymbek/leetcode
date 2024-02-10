// 1493. Longest Subarray of 1's After Deleting One Element
// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

var longestSubarray = function (nums) {
    let i = 0;
    let max = 0;
    let k = 1;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[i] === 0) {
                k++;
            }
            i++;
        }
        max = Math.max(max, j - i);
    }
    return max;
};

console.log(longestSubarray([1, 1, 0, 1]));// 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));// 5
console.log(longestSubarray([1, 1, 1]));// 2