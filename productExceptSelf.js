// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// var productExceptSelf = function (nums) {
//     let res = [];
//     let start1 = 1, start2 = 1;
//     for (let i = 0; i < nums.length; i++) {
//         console.log(res);
//         res.push(start1);
//         start1 *= nums[i];
//         console.log(res);
//     }
//     for (let i = nums.length - 1; i >= 0; i--) {
//         console.log(res);
//         res[i] *= start2;
//         start2 *= nums[i];
//         console.log(res);
//     }
//     console.log(res);
//     return res;
// };

// const productExceptSelf = (nums) => {
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         res[i] = nums.reduce((acc, val, idx) => {
//             if (idx !== i) {
//                 acc *= val;
//             }
//             return acc;
//         }, 1);
//     }
//     return res;
// }

// using division 
// const productExceptSelf = (nums) => {
//     let left = new Array(nums.length).fill(0);
//     left[0] = 1;
//     let right = new Array(nums.length).fill(0);
//     right[right.length - 1] = 1;
//     for (let i = 1; i < nums.length; i++) {
//         left[i] = nums[i - 1] * left[i - 1];
//     }
//     for (let i = right.length - 2; i >= 0; i--) {
//         right[i] = nums[i + 1] * right[i + 1];
//     }
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = left[i] * right[i];
//     }
//     return nums;
// }

// const productExceptSelf = (nums) => {
//     let leftAr = new Array(nums.length);
//     leftAr[0] = 1;
//     let rightAr = new Array(nums.length);
//     rightAr[rightAr.length - 1] = 1;
//     let res = [];
//     console.log(leftAr);
//     console.log(rightAr);
//     for (let i = 1; i < nums.length; i++) {
//         leftAr[i] = nums[i - 1] * leftAr[i - 1];
//         console.log(leftAr);
//     }

//     for (let i = rightAr.length - 2; i >= 0; i--) {
//         rightAr[i] = nums[i + 1] * rightAr[i + 1];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         res.push(leftAr[i] * rightAr[i]);
//     }
//     return res;
// }

// const productExceptSelf = (nums) => {
//     let res = [];
//     res[0] = 1;
//     for (let i = 1; i < nums.length; i++) {
//         res[i] = nums[i - 1] * res[i - 1];
//     }
//     let r = 1;
//     for (let i = nums.length - 1; i >= 0; i--) {
//         res[i] = res[i] * r;
//         r *= nums[i];
//     }
//     return res;
// }

// const productExceptSelf = (nums) => {
//     let res = [];
//     let product;
//     for (let i = 0; i < nums.length; i++) {
//         product = 1;
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//                 product *= nums[j];
//             }
//         }
//         res.push(product);
//     }
//     return res;
// }

const productExceptSelf = (nums) => {
    let res = [];
    let prefix = 1;
    let postfix = 1;
    console.log(res);
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;
        console.log(res);
        postfix *= nums[i];
    }
    console.log(res);
    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));//[24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));//[0,0,9,0,0]
// console.log(productExceptSelf([4, 3, 2, 1, 2]));//[12,16,24,48,24]