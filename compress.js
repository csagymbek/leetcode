// 443. String Compression
// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s. Otherwise, append the character followed by the group's length. The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars. After you are done modifying the input array, return the new length of the array. You must write an algorithm that uses only constant extra space.

// Example 1:
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// Example 2:
// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.

// Example 3:
// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// Constraints:
// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

// const compress = (chars) => {
//     let index = 0;
//     let i = 0;
//     while (i < chars.length) {
//         let j = i;
//         while (j < chars.length && chars[i] === chars[j]) {
//             j++;
//         }
//         chars[index++] = chars[i];
//         if (j - i > 1) {
//             let count = j - i + "";
//             for (let char of count.split("")) {
//                 chars[index++] = char;
//             }
//         }
//         i = j;
//     }
//     return index;
// }

// const compress = (chars) => {
//     let i = 0;
//     let j = 0;
//     while (i < chars.length) {
//         let char = chars[i];
//         let count = 0;
//         chars[j++] = char;
//         while (i < chars.length && char === chars[i]) {
//             count++;
//             i++;
//         }
//         if (count > 1) {
//             count = (count + "").split("");
//             for (let n of count) {
//                 chars[j++] = n;
//             }
//         }
//     }
//     return j;
// }

// const compress = (chars) => {
//     let res = "";
//     let count = 1;
//     for (let i = 0; i < chars.length; i++) {
//         if (chars[i] === chars[i + 1]) {
//             count++;
//         } else {
//             res += chars[i] + count;
//             console.log(res);
//             count = 1;
//         }
//     }
//     return res;
// }

const compress = (chars) => {
    let index = 0;
    let i = 0;
    while (i < chars.length) {
        let j = i;
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }
        chars[index] = chars[i];
        index++;
        if (j - i > 1) {
            let count = j - i + "";
            for (let n of count) {
                chars[index] = n;
                index++;
            }
        }
        i = j;
    }
    return index;
}
// 1
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));// ["a","2","b","2","c","3"] 6
// console.log(compress(["a"]));// ["a"] 1
// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));// ["a","b","1","2"] 4