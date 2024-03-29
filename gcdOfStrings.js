// 1071. Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// const gcdOfStrings = (str1, str2) => {
//     let long = str1.length > str2.length ? str1 : str2;
//     let short = str1.length > str2.length ? str2 : str1;
//     if (str1.length === str2.length && str1 === str2) {
//         return str1;
//     }
//     if (!long.startsWith(short)) {
//         return "";
//     }
//     return gcdOfStrings(long.substring(short.length), short);
// }

// const gcdOfStrings = (str1, str2) => {
//     let long = str1.length > str2.length ? str1 : str2;
//     let short = str1.length > str2.length ? str2 : str1;
//     if (str1.length === str2.length && str1 === str2) {
//         return str1;
//     }
//     if (long.startsWith(short)) {
//         return gcdOfStrings(long.substring(short.length), short);
//     } else {
//         return "";
//     }
// }

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let min = Math.min(str1.length, str2.length);
    console.log(min);
    for (let i = min; i >= 0; i--) {
        console.log(i);
        console.log(str1.length % i);
        console.log(str2.length % i);
        console.log(str1.substring(0, i))
        if (str1.length % i === 0 && str2.length % i === 0) {
            return str1.substring(0, i);
        }
    }
};

// console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
// console.log(gcdOfStrings("LEET", "CODE")); // ""