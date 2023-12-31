// 334. Increasing Triplet Subsequence
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.

// Example 3:
// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// Constraints:
// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

// const increasingTriplet = (nums) => {
//     if (nums.length < 3) {
//         return false;
//     }
//     let j = Number.MAX_SAFE_INTEGER;
//     let k = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] <= j) {
//             j = nums[i];
//         } else if (nums[i] <= k) {
//             k = nums[i];
//         } else {
//             return true;
//         }
//     }
//     return false;
// }

// O(n3)
// const increasingTriplet = (nums) => {
//     if (nums.length < 3) {
//         return false;
//     }
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 console.log(nums[i])
//                 console.log(nums[j])
//                 console.log(nums[k])
//                 if (nums[i] < nums[j] && nums[j] < nums[k]) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// const increasingTriplet = (nums) => {
//     if (nums.length < 3) {
//         return false;
//     }
//     let n1 = Number.MAX_SAFE_INTEGER;
//     let n2 = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums[i])
//         console.log(n1);
//         if (nums[i] <= n1) {
//             n1 = nums[i];
//         } else if (nums[i] <= n2) {
//             console.log(nums[i] <= n2)
//             console.log(nums[i]);
//             console.log(n2);
//             n2 = nums[i];
//         } if (nums[i] > n2) {
//             console.log(nums[i] > n2)
//             console.log(n1);
//             console.log(n2);
//             console.log(nums[i]);
//             return true;
//         }
//     }
//     return false;
// }

const increasingTriplet = (nums) => {
    if (nums.length < 3) {
        return false;
    }
    let maxNumOne = Number.MAX_SAFE_INTEGER;
    let maxNumTwo = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < maxNumOne) {
            maxNumOne = nums[i];
        }
        if (nums[i] > maxNumOne) {
            maxNumTwo = Math.min(nums[i], maxNumTwo);
        }
        if (nums[i] > maxNumTwo) {
            return true;
        }
    }

    return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));// true
// console.log(increasingTriplet([5, 4, 3, 2, 1]));// false
// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));// true 