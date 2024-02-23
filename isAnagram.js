// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let mapS = {};
    let mapT = {};
    for (let char of s) {
        mapS[char] = (mapS[char] || 0) + 1;
    }
    console.log(mapS);
    for (let char of t) {
        mapT[char] = (mapT[char] || 0) + 1;
    }
    console.log(mapT);
    for (let key in mapS) {
        if (mapS[key] !== mapT[key]) {
            return false;
        }
    }
    return true;
};

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let mapS = {};
    let mapT = {};
    for (let i = 0; i < s.length; i++) {
        mapS[s.charAt(i)] = (mapS[s.charAt(i)] || 0) + 1;
        mapT[t.charAt(i)] = (mapT[t.charAt(i)] || 0) + 1;
    }
    for (let key in mapS) {
        if (mapS[key] !== mapT[key]) {
            return false;
        }
    }
    return true;
};

// console.log(isAnagram("rat", "car"));// false
// console.log(isAnagram("anagram", "nagaram"));// true
console.log(isAnagram("aacc", "ccac"));// false