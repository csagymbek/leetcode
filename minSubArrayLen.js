// 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

var minSubArrayLen = function (target, nums) {
    nums = nums.sort((a, b) => a - b);
    let ar = [];
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] === target || nums[j] === target) {
            return 1;
        } else if (nums[i] + nums[j] === target) {
            ar.push(nums[i]);
            ar.push(nums[j]);
            return ar.length;
        } else if (nums[i] + nums[j] < target) {
            i++;
        } else {
            j++;
        }
    }
    console.log(ar);
    return ar.length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));// 2
console.log(minSubArrayLen(4, [1, 4, 4]));// 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));// 0