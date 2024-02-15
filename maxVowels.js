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

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let max = 0;
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s.charAt(i))) {
            count++;
        }
    }
    max = count;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s.charAt(i - k))) {
            count--;
        }
        if (vowels.has(s.charAt(i))) {
            count++;
        }
        max = Math.max(max, count);
    }
    return max;
};

var maxVowels = function (s, k) {
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let max = 0;
    let count = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (vowels.has(s.charAt(j))) {
            count++;
        }
        if (j - i + 1 > k) {
            if (vowels.has(s.charAt(i))) {
                count--;
            }
            i++;
        }
        max = Math.max(max, count);
    }
    return max;
};

// var maxVowels = function (s, k) {
//     let vowels = new Set(["a", "e", "i", "o", "u"]);
//     let max = 0;
//     let count = 0;
//     for (let i = 0; i < k; i++) {
//         if (vowels.has(s.charAt(i))) {
//             count++;
//         }
//     }
//     max = count;
//     for (let i = k; i < s.length; i++) {
//         if (vowels.has(s.charAt(i - k))) {
//             count--;
//         }
//         if (vowels.has(s.charAt(i))) {
//             count++;
//         }
//         max = Math.max(max, count);
//     }
//     return max;
// };

console.log(maxVowels("abciiidef", 3));// 3
console.log(maxVowels("aeiou", 2));// 2
console.log(maxVowels("leetcode", 3));// 2
console.log(maxVowels("tryhard", 4));// 1

// https://www.youtube.com/watch?v=kEfPSzgL-Ss
// https://www.youtube.com/watch?v=FEXJGn19u7Y