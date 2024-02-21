// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:
// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    var mapper = function (word) {
        let map = {};
        for (let char of word) {
            map[char] = (map[char] || 0) + 1;
        }
        return {
            keys: Object.keys(map).sort(),
            values: Object.values(map).sort((a, b) => a - b)
        };
    }
    let word1Map = mapper(word1);
    let word2Map = mapper(word2);
    for (let i = 0; i < word1Map.keys.length; i++) {
        if (word1Map.keys[i] !== word2Map.keys[i] || word1Map.values[i] !== word2Map.values[i]) {
            return false;
        }
    }
    return true;
};

console.log(closeStrings("abc", "bca"));// true
console.log(closeStrings("a", "aa"));// false
console.log(closeStrings("cabbba", "abbccc"));// true
console.log(closeStrings("abbzzca", "babzzcz"));// false

// https://blog.petefowler.dev/how-to-solve-the-leetcode-1657-determine-if-two-strings-are-close-problem-in-javascript