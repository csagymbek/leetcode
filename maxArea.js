// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store. Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// const maxArea = (height) => {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let min = Math.min(height[i], height[j]);
//             max = Math.max(max, min * (j - i));
//         }
//     }
//     return max;
// }

// const maxArea = (height) => {
//     let max = Number.MIN_SAFE_INTEGER;
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         let min = Math.min(height[i], height[j]);
//         max = Math.max(max, min * (j - i));
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return max;
// }

// var maxArea = function (height) {
//     let most = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             most = Math.max(most, (j - i) * Math.min(height[i], height[j]));
//         }
//     }
//     return most;
// };

// const maxArea = (height) => {
//     let res = 0;
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         let area = (j - i) * Math.min(height[i], height[j]);
//         res = Math.max(res, area);
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return res;
// }



// We can see that the area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations
// The area of a container is (right - left) multiplied by the smallestSide.
// If the area is greater than our result, we have a new result
// When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side
// With this we can do the problem in O(n) time and constant space by having a left and right pointer, and moving these pointers inward.

// const maxArea = (height) => {
//     let res = 0;
//     let i = 0;
//     let j = height.length - 1;
//     while (i < j) {
//         let min = Math.min(height[i], height[j]);
//         let area = (j - i) * min;
//         if (area > res) {
//             res = area;
//         }
//         if (height[i] < height[j]) {
//             i++;
//         } else {
//             j--;
//         }
//     }
//     return res;
// }

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));// 49
console.log(maxArea([1, 1]));// 1