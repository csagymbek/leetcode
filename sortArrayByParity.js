// 905. Sort Array By Parity
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Example 1:
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

// const sortArrayByParity = (nums) => {
//     let i = 0;
//     let j = 0;
//     while (i < nums.length && j < nums.length) {
//         if (nums[i] % 2 === 0) {
//             let temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             j++;
//         }
//         i++;
//     }
//     return nums;
// }

const sortArrayByParity = (nums) => {
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        if (nums[i] % 2 > nums[j] % 2) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    return nums;
}

console.log(sortArrayByParity([3, 1, 2, 4]));// [2,4,3,1]
console.log(sortArrayByParity([0]));// [0]
console.log(sortArrayByParity([0, 1, 2]));// [0,2,1]