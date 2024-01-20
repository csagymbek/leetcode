// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

// var backspaceCompare = function (s, t) {
//     return build(s) === build(t);
// };

// const build = (s) => {
//     s = s.split("");
//     console.log(s);
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== "#") {
//             res.push(s[i]);
//         } else if (res.length) {
//             res.pop();
//         }
//     }
//     return res.join("");
// }

// const backspaceCompare = (s, t) => {
//     let i = s.length - 1;
//     let j = t.length - 1;
//     let skipS = 0;
//     let skipT = 0;
//     while (i >= 0 || j >= 0) {
//         while (i >= 0) {
//             if (s.charAt(i) === "#") {
//                 skipS++;
//                 i--;
//             } else if (skipS > 0) {
//                 skipS--;
//                 i--;
//             } else {
//                 break;
//             }
//         }
//         while (j >= 0) {
//             if (t.charAt(j) === "#") {
//                 skipT++;
//                 j--;
//             } else if (skipT > 0) {
//                 skipT--;
//                 j--;
//             } else {
//                 break;
//             }
//         }
//         if (i >= 0 && j >= 0 && s.charAt(i) !== t.charAt(j)) {
//             return false;
//         }
//         if ((i >= 0) !== (j >= 0)) {
//             return false;
//         }
//         i--;
//         j--;
//     }
//     return true;
// }

const backspaceCompare = (s, t) => {
    let resS = [];
    let resT = [];
    for (let i = 0; i < Math.max(s.length, t.length); i++) {
        if (s[i] !== "#") {
            console.log(s[i]);
            resS.push(s[i]);
        } else {
            console.log(s[i]);
            console.log(resS);
            resS.pop(s[i]);
            console.log(resS);
        }
        if (t[i] !== "#") {
            resT.push(t[i]);
        } else {
            resT.pop(t[i]);
        }
    }
    console.log(resS.join(""));
    console.log(resT.join(""));
    return resS.join("") === resT.join("");
}

console.log(backspaceCompare("ab#c", "ad#c"));// true
// console.log(backspaceCompare("ab##", "c#d#"));// true
// console.log(backspaceCompare("a#c", "b"));// false