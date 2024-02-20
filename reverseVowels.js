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

var reverseVowels = function (s) {
    let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        while (i < j && !vowels.has(s[i])) {
            i++;
        }
        while (i < j && !vowels.has(s[j])) {
            j--;
        }
        [s[i++], [s[j--]]] = [s[j], s[i]];
    }
    return s.join("");
};

console.log(reverseVowels("hello"));// holle
console.log(reverseVowels("leetcode"));// leotcede