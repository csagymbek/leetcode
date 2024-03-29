// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// Example 1:
// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

// Example 2:
// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".

// Example 3:
// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

// const firstPalindrome = (words) => {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === words[i].split("").reverse().join("")) {
//             return words[i];
//         }
//     }
//     return "";
// }

const isPalindrome = (word) => {
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
        if (word[i] !== word[j]) {
            return false;
        }
    }
    return true;
}

const firstPalindrome = (words) => {
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i];
        }
    }
    return "";
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));// "ada"
console.log(firstPalindrome(["notapalindrome", "racecar"]));// "racecar"
console.log(firstPalindrome(["def", "ghi"]));// ""