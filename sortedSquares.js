// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// const sortedSquares = (nums) => {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         res.push(nums[i] * nums[i]);
//     }
//     return res.sort((a, b) => a - b);
// }

const sortedSquares = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    let res = [];
    while (i <= j) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            res.push(nums[i] * nums[i]);
            i++;
        } else {
            res.push(nums[j] * nums[j]);
            j--;
        }
    }
    return res.reverse();
}


console.log(sortedSquares([-4, -1, 0, 3, 10]));// [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11]));// [4,9,9,49,121]