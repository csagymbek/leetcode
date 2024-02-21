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

// var getSortedItems = function (word) {
//     let hashmap = {};
//     for (let ch of word) {
//         hashmap[ch] = (hashmap[ch] || 0) + 1;
//     }
//     return {
//         keys: Object.keys(hashmap).sort(),
//         counts: Object.values(hashmap).sort((a, b) => a - b)
//     };
// };

// var closeStrings = function (word1, word2) {
//     if (word1.length !== word2.length) {
//         return false;
//     }
//     let group1 = getSortedItems(word1);
//     let group2 = getSortedItems(word2);
//     for (let i = 0; i < group1.keys.length; i++) {
//         if (group1.keys[i] !== group2.keys[i] || group1.counts[i] !== group2.counts[i]) {
//             return false;
//         }
//     }
//     return true;
// };

/*
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isPresent = function (word1, word2) {
    for (let key of word1) {
        if (!word2.has(key)) {
            return false;
        }
    }
    return true;
};

var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    let word1Set = new Set(word1);
    let word2Set = new Set(word2);
    console.log(word1Set)
    console.log(word2Set)
    return word1Set.size === word2Set.size && isPresent(word1Set, word2Set);
};

console.log(closeStrings("abc", "bca"));// true
console.log(closeStrings("a", "aa"));// false
console.log(closeStrings("cabbba", "abbccc"));// true