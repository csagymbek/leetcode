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

// This problem, We are given a binary array nums, where each element can be either 0 or 1. Our main goal is to delete exactly one element from the array in order to obtain the longest possible subarray consisting only of 1's. We need to determine the size (length) of this longest subarray.
// Since the problem has asked us to remove at most one element from the subarray, we can set k = 1 to ensure that when using sliding window approach, we are only removing at most one element while finding the longest subarray consisting only of 1's. This will allow us to handle the scenario where we need to delete a single element to maximize the length of the subarray.
// Thus, the main idea behind this solution is to use a sliding window approach to find the longest subarray consisting of only 1s while considering the removal of at most one element. When k becomes negative, this represents that we have encountered more 0s than allowed. Therefore, we shrink the window from the left side by moving left pointer by 1
// After each movement right pointer, we will update max length to keep track of the maximum length of the subarray found so far.

// Initialize:
// left = 0 to represent the start of the sliding window
// k = 1 to represents we can only remove at most one element from the subarray
// max length = 0 to help store the length of the longest subarray found

// Traverse through nums till the end of the nums array
// 1. If we encounter a 0 at our current element, we decrement k by 1
// 2. Once k becomes negative, this means we have encountered more 0s than allowed (k=1)
// If nums[left] is 0, we increment k by 1 to remove a zero from the current window
// We then shrink the window by moving left pointer to the right until k becomes a non negative
// 3. Update max length if the current subarray length is greater than the previous max length
// 4. return max length as this represents the longest subarray consisting only of 1s after removing at most one element

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
        console.log(j)
        console.log(i)
        console.log(j - i)
        max = Math.max(max, j - i);
    }
    return max;
};

console.log(longestSubarray([1, 1, 0, 1]));// 3
// console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));// 5
// console.log(longestSubarray([1, 1, 1]));// 2