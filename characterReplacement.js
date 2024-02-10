// 424. Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:
// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

// var characterReplacement = function (s, k) {
//     let obj = {};
//     let max = 0;
//     let i = 0;
//     for (let j = 0; j < s.length; j++) {
//         obj[s[j]] = (obj[s[j]] || 0) + 1;
//         if ((j - i + 1) - Math.max(...Object.values(obj)) > k) {
//             obj[s[i]]--;
//             i++;
//         }
//         max = Math.max(max, j - i + 1);
//     }
//     return max;
// };

// var characterReplacement = function (s, k) {
//     let obj = {};
//     let max = 0;
//     let i = 0;
//     for (let j = 0; j < s.length; j++) {
//         obj[s.charAt(j)] = (obj[s.charAt(j)] || 0) + 1;
//         if ((j - i + 1) - Math.max(...Object.values(obj)) > k) {
//             obj[s.charAt(i)]--;
//             i++;
//         }
//         max = Math.max(max, (j - i + 1));
//     }
//     console.log(obj);
//     console.log(max);
//     return max;
// }

var characterReplacement = function (s, k) {
    let i = 0;
    let count = 0;
    let max = 0;
    let map = {};
    for (let j = 0; j < s.length; j++) {
        map[s.charAt(j)] = map[s.charAt(j)] + 1 || 1;
        count = Math.max(count, map[s.charAt(j)]);
        console.log(count);
        if ((j - i + 1) - count > k) {
            map[s.charAt(i)]--;
            i++;
        }
        max = Math.max(max, (j - i + 1));
    }
    console.log(map)
    return max;
}

console.log(characterReplacement("ABAB", 2));// 4
console.log(characterReplacement("AABABBA", 1));// 4