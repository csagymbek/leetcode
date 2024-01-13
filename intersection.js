// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

const intersection = (nums1, nums2) => {
    if (nums1.length < 2) {
        return nums1;
    } else if (nums2.length < 2) {
        return nums2;
    }
    let res = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) > -1) {
            res.add(nums1[i]);
        }
    }
    return Array.from(res);
}

console.log(intersection([1, 2, 2, 1], [2, 2]));// [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));// [9,4] || [4,9]