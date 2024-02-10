// 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:
// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

// const maxVowels = (s, k) => {
//     let vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     let max = 0;
//     for (let i = 0; i < k; i++) {
//         if (vowels.includes(s[i])) {
//             count++;
//         }
//     }
//     max = count;
//     let j = 0;
//     for (let i = k; i < s.length; i++) {
//         console.log(s[i - k]);
//         console.log(s[j]);
//         j++;
//         if (vowels.includes(s[j])) {
//             count--;
//         }
//         if (vowels.includes(s[i])) {
//             count++;
//         }
//         max = Math.max(max, count);
//     }
//     return max;
// }

// const maxVowels = (s, k) => {
//     let vowels = "aeiou";
//     let max = 0;
//     let count = 0;
//     let j = 0;
//     for (let i = 0; i < k; i++) {
//         if (vowels.includes(s[i])) {
//             count++;
//         }
//     }
//     max = count;
//     for (let i = k; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             count++;
//         }
//         if (vowels.includes(s[j])) {
//             count--;
//         }
//         j++;
//         max = Math.max(max, count);
//     }
//     return max;
// }

var maxVowels = function (s, k) {
    let vowels = "aeiou";
    let max = 0;
    let count = 0;
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) > -1) {
            count++;
        }
        if ((i - j + 1) > k) {
            console.log((i - j) + 1);
            if (vowels.indexOf(s[j]) > -1) {
                count--;
            }
            j++;
        }
        max = Math.max(max, count);
    }
    return max;
};

console.log(maxVowels("abciiidef", 3));// 3
// console.log(maxVowels("aeiou", 2));// 2
// console.log(maxVowels("leetcode", 3));// 2
// console.log(maxVowels("tryhard", 4));// 1