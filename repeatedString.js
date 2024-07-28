// There is a string, "s", of lowercase English letters that is repeated infinitely many times.Given an integer, "n", find and print the number of letter "a"'s in the first "n" letters of the infinite string.

// Example
// s = "abcac"
// n = 10

// The substring we consider is "abcacabcac", the first  characters of the infinite string.There are  occurrences of "a" in the substring.

// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider
// returns int: the frequency of "a"s in the substring

const repeatedString = (s, n) => {
    let count = 0;
    for (let char of s) {
        if (char === "a") {
            count++;
        }
    }
    count *= Math.floor(n / s.length);
    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === "a") {
            count++;
        }
    }
    return count;
};

console.log(repeatedString("abcac", 10));// 4
console.log(repeatedString("aba", 10));// 7

// https://www.youtube.com/watch?v=-PbKDdyo3VY