// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// var lengthOfLongestSubstring = function (s) {
//     let set = new Set();
//     let max = 0;
//     let j = 0;
//     for (let i = 0; i < s.length; i++) {
//         while (set.has(s[i])) {
//             set.delete(s[j]);
//             j++;
//         }
//         set.add(s[i]);
//         max = Math.max(max, set.size);
//     }
//     return max;
// };

// var lengthOfLongestSubstring = function (s) {
//     let set = new Set();
//     let max = 0;
//     let i = 0;
//     let j = 0;
//     while (j < s.length) {
//         if (!set.has(s[j])) {
//             set.add(s[j]);
//             j++;
//             max = Math.max(max, set.size);
//         } else {
//             set.delete(s[i]);
//             i++;
//         }
//     }
//     return max;
// };

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let max = 0;
    let i = 0;
    let j = 0;
    while (j < s.length) {
        if (!set.has(s.charAt(j))) {
            set.add(s.charAt(j));
            j++;
            max = Math.max(max, set.size);
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));// 3
console.log(lengthOfLongestSubstring("bbbbb"));// 1
console.log(lengthOfLongestSubstring("pwwkew"));// 3