// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

// const isSubsequence = (s, t) => {
//     let i = 0;
//     let j = 0;
//     console.log(s.length);
//     while (i < s.length && j < t.length) {
//         if (s[i] === t[j]) {
//             i++;
//         }
//         j++;
//         console.log(i)
//         console.log(j)
//         if (i === s.length) {
//             return true;
//         }
//     }
//     return false;
// }

// const isSubsequence = (s, t) => {
//     if (!s.length) {
//         return true;
//     }
//     let sPointer = 0;
//     let tPointer = 0;
//     while (tPointer < t.length) {
//         if (t.charAt(tPointer) === s.charAt(sPointer)) {
//             sPointer++;
//             if (sPointer === s.length) {
//                 return true;
//             }
//         }
//         tPointer++
//     }
//     return false;
// }

// const isSubsequence = (s, t) => {
//     let counter = 0;
//     for (let i = 0; i < t.length; i++) {
//         if (s[counter] === t[i]) {
//             counter++;
//         }
//     }
//     return counter === s.length;
// }

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s.charAt(i) === t.charAt(j)) {
            i++;
        }
        j++;
    }
    return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));// true
console.log(isSubsequence("axc", "ahbgdc"));// false
console.log(isSubsequence("ace", "abcde"));// true
console.log(isSubsequence("aec", "abcde"));// false
console.log(isSubsequence("b", "c"));// false
console.log(isSubsequence("", "ahbgdc"));// true
console.log(isSubsequence("", ""));// true

// https://www.youtube.com/watch?v=99RVfqklbCE