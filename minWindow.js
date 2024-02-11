// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
// Follow up: Could you find an algorithm that runs in O(m + n) time?

const minWindow = (s, t) => {
    if (s.length < t.length) {
        return "";
    }
    let countT = {};
    let window = {};
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        countT[char] = (countT[char] || 0) + 1;
    }
    let have = 0;
    let need = Object.keys(countT).length;
    console.log(need);
    console.log(countT);
    let i = 0;
    let res = [];
    let resLength = Infinity;
    for (let j = 0; j < s.length; j++) {
        let char = s[j];
        window[char] = (window[char] || 0) + 1;
        if (countT[char] !== undefined && window[char] === countT[char]) {
            have++;
        }
        while (have === need) {
            if ((j - i + 1) < resLength) {
                res = [i, j];
                resLength = j - i + 1;
            }
            console.log(window[s.charAt(i)]);
            window[s.charAt(i)]--;
            if (countT[s.charAt(i)] !== undefined && window[s.charAt(i)] < countT[s.charAt(i)]) {
                have--;
            }
            i++;
        }
    }
    console.log(window);
    [i, j] = res;
    if (resLength === Infinity) {
        return "";
    }
    return s.substring(i, j + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));// "BANC"
console.log(minWindow("a", "a"));// "a"
console.log(minWindow("a", "aa"));// ""