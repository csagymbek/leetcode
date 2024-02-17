// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// const moveZeroes = (nums) => {
//     let zero = [];
//     let ar = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zero.push(nums[i]);
//         } else if (nums[i] !== 0) {
//             ar.push(nums[i]);
//         }
//     }
//     console.log(zero);
//     console.log(ar);
//     return [...ar, ...zero];
// }

// var moveZeroes = function(nums) {
//     let j = 0;
//    for(let i = 0; i < nums.length; i++) {
//        if(nums[i] !== 0) {
//            nums[j++] = nums[i];
//        }
//    }
//    for(let i = j; i < nums.length; i++) {
//        nums[i] = 0;
//    }
//    return nums;
// };

// const moveZeroes = (nums) => {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         console.log(nums[i]);
//         console.log(nums[j]);
//         if (nums[j] !== 0) {
//             let temp = nums[j];
//             nums[j] = nums[i];
//             nums[i] = temp;
//             i++;
//         }
//     }
//     return nums;
// }

const moveZeroes = (nums) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
        }
    }
    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));// [1,3,12,0,0]
console.log(moveZeroes([0]));// [0]