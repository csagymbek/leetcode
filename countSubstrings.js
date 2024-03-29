// 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:
// 1 <= s.length <= 1000
// s consists of lowercase English letters.

// const countSubstrings = (s) => {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         let j = i;
//         let k = i;
//         while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
//             count++;
//             j--;
//             k++;
//         }
//         j = i;
//         k = i + 1;
//         while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
//             count++;
//             j--;
//             k++;
//         }
//     }
//     return count;
// }

const countSubstrings = (s) => {
    let count = 0;
    const isPalindromic = (i, j) => {
        while (i < s.length && j >= 0 && s.charAt(i) === s.charAt(j)) {
            count++;
            i++;
            j--;
        }
    }
    for (let i = 0; i < s.length; i++) {
        let j = i;
        let k = i;
        isPalindromic(k, j);
        isPalindromic(k + 1, j);
    }
    return count;
}

console.log(countSubstrings("abc"));// 3
console.log(countSubstrings("aaa"));// 6