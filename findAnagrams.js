// 438. Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Example 2:
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:
// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

var findAnagrams = function (s, p) {
    let res = [];
    let pMap = {};
    let count = p.length;
    for (let char of p) {
        pMap[char] = (pMap[char] || 0) + 1;
    }
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        if (pMap[s[j]] > 0) {
            count--;
        }
        pMap[s[j]]--;
        if (count === 0) {
            res.push(i);
        }
        if (j - i + 1 === p.length) {
            if (pMap[s[i]] >= 0) {
                count++;
            }
            pMap[s[i]]++;
            i++;
        }
    }
    return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));// [0,6]
console.log(findAnagrams("abab", "ab"));// [0,1,2]