// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

// works in an interview 
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    console.log(flowerbed);
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            n--;
            i++;
        }
    }
    return n <= 0;
};

// const canPlaceFlowers = (flowerbed, n) => {
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
//             flowerbed[i] = 1;
//             n--;
//             i++;
//         }
//     }
//     return n <= 0;
// };

// var canPlaceFlowers = function (flowerbed, n) {
//     flowerbed.unshift(0);
//     flowerbed.push(0);
//     for (let i = 0; i < flowerbed.length; i++) {
//         if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
//             n--;
//             flowerbed[i] = 1;
//         }
//     }
//     return n <= 0;
// };

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));// true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));// false
// console.log(canPlaceFlowers([0, 0, 1], 1));// true
// console.log(canPlaceFlowers([1, 0, 1], 1));// false
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));// false
// console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0));// true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 1], 1));// true
// console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1));// false
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));// true
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));// true

// https://www.youtube.com/shorts/_bvVoLJut04