// 735. Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Constraints:
// 2 <= asteroids.length <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

// var asteroidCollision = function (asteroids) {
//     let stack = [];
//     for (let i = 0; i < asteroids.length; i++) {
//         while (stack.length && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
//             if (asteroids[i] + stack[stack.length - 1] < 0) {
//                 stack.pop();
//             } else if (asteroids[i] + stack[stack.length - 1] > 0) {
//                 asteroids[i] = 0;
//             } else {
//                 asteroids[i] = 0;
//                 stack.pop();
//             }
//         }
//         if (asteroids[i] !== 0) {
//             stack.push(asteroids[i]);
//         }
//     }
//     return stack;
// };

var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (!stack.length || stack[stack.length - 1] < 0 || asteroids[i] > 0) {
            stack.push(asteroids[i]);
        } else if (asteroids[i] + stack[stack.length - 1] === 0) {
            stack.pop();
        } else if (Math.abs(stack[stack.length - 1] < Math.abs(asteroids[i]))) {
            stack.pop();
            i--;
        }
    }
    return stack;
};

console.log(asteroidCollision([5, 10, -5]));// [5,10]
console.log(asteroidCollision([8, -8]));// []
console.log(asteroidCollision([10, 2, -5]));// [10]
console.log(asteroidCollision([-2, -2, 1, -2]));// [-2,-2,-2]

// https://www.youtube.com/watch?v=LN7KjRszjk4