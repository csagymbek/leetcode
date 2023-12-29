// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// const reverseVowels = (str) => {
//     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     let i = 0;
//     let j = str.length - 1;
//     let charAr = str.split("");
//     console.log(str);
//     console.log(charAr);
//     while (i < j) {
//         console.log(charAr[i]);
//         while (i < j && !vowels.includes(charAr[i])) {
//             i++;
//         }
//         while (j > i && !vowels.includes(charAr[j])) {
//             j--;
//         }
//         let temp = charAr[i];
//         charAr[i++] = charAr[j];
//         charAr[j--] = temp;
//     }

//     console.log(charAr);
//     return charAr.join("");
// }

const reverseVowels = (str) => {
    let vowels = "aeiouAEIOU";
    let strCopyAr = str.split("");
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        while (i < j && !vowels.includes(strCopyAr[i])) {
            i++;
        }
        while (i < j && !vowels.includes(strCopyAr[j])) {
            j--;
        }
        let temp = strCopyAr[i];
        strCopyAr[i++] = strCopyAr[j];
        strCopyAr[j--] = temp;
    }
    return strCopyAr.join("");
}

console.log(reverseVowels("hello"));// holle
console.log(reverseVowels("leetcode"));// leotcede