// 942. DI String Match
// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:
// Input: s = "IDID"
// Output: [0,4,1,3,2]

// Example 2:
// Input: s = "III"
// Output: [0,1,2,3]

// Example 3:
// Input: s = "DDI"
// Output: [3,2,0,1]

// Constraints:
// 1 <= s.length <= 105
// s[i] is either 'I' or 'D'.

// const diStringMatch = (s) => {
//     let res = new Array(s.length + 1);
//     let low = 0;
//     let high = s.length;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "I") {
//             res[i] = low++;
//         }
//         if (s[i] === "D") {
//             res[i] = high--;
//         }
//     }
//     console.log(res);
//     res[s.length] = low;
//     return res;
// }

const diStringMatch = (s) => {
    let res = [];
    let i = 0;
    let inc = 0;
    let dec = s.length;
    while (i <= s.length) {
        if (s[i] === "I") {
            res[i] = inc++;
        } else {
            res[i] = dec--;
        }
        i++;
    }
    return res;
}

console.log(diStringMatch("IDID"));// [0,4,1,3,2]
console.log(diStringMatch("DDI"));// [3,2,0,1]
console.log(diStringMatch("III"));// [0,1,2,3]