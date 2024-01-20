// 917. Reverse Only Letters
// Given a string s, reverse the string according to the following rules:
// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:
// Input: s = "ab-cd"
// Output: "dc-ba"

// Example 2:
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

// Example 3:
// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Constraints:
// 1 <= s.length <= 100
// s consists of characters with ASCII values in the range [33, 122].
// s does not contain '\"' or '\\'.

const reverseOnlyLetters = (s) => {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    let regex = /[a-zA-Z]+$/;
    while (i < j) {
        if (!s[i].match(regex)) {
            i++;
            continue;
        }
        if (!s[j].match(regex)) {
            j--;
            continue;
        }
        [s[i++], s[j--]] = [s[j], s[i]];
    }
    return s.join("");
}

// console.log(reverseOnlyLetters("ab-cd"));// "dc-ba"
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));// "j-Ih-gfE-dCba"
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));// "Qedo1ct-eeLg=ntse-T!"
console.log(reverseOnlyLetters("7_28]"));// "7_28]"