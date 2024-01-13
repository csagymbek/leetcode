// 344. Reverse String
// Write a function that reverses a string.The input string is given as an array of characters s.
// You must do this by modifying the input array in -place with O(1) extra memory.

// Example 1:
// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]

// Example 2:
// Input: s = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// const reverseString = (s) => {
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j) {
//         let temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//         i++;
//         j--;
//     }
//     return s;
// }

const reverseString = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        // ES6 destructuring assignment
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));// ["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));// ["h","a","n","n","a","H"]