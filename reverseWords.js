// 557. Reverse Words in a String III
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

// const reverseWords = (str) => {
//     let ar = str.split(" ");
//     let res = [];
//     for (let i = 0; i < ar.length; i++) {
//         res.push(ar[i].split("").reverse().join(""));
//     }
//     return res.join(" ");
// };

// const reverseWords = (s) => s.split(" ").map(word => word.split("").reverse().join("")).join(" ");

// const reverse = (word) => {
//     word = word.split("");
//     for (let i = 0, j = word.length - 1; i < j; i++, j--) {
//         [word[i], word[j]] = [word[j], word[i]];
//     }
//     return word.join("");
// }

// const reverseWords = (s) => {
//     s = s.split(" ");
//     for (let i = 0; i < s.length; i++) {
//         s[i] = reverse(s[i]);
//     }
//     return s.join(" ");
// };

const reverseWords = (s) => {
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split("");
        for (let start = 0, end = s[i].length - 1; start < end; start++, end--) {
            [s[i][start], s[i][end]] = [s[i][end], s[i][start]];
        }
        s[i] = s[i].join("");
    }
    return s.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));// "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding"));// "rM gniD"