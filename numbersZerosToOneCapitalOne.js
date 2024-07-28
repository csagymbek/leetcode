// You are given an array of numbers, with each being a 0 or 1. All 1's are arranged at the beginning of the array and 0's stand at the end. A process is executed on this array until it halts. You are given a variable zerosToOne, which represents the number of 0's that can be deleted and exchanged for one.

// Each second, one of the three events happen:
// • Option 1: If there are at least zerosToOne zeros, then the last zerosToOne zeros are removed and one 1 is added at the beginning of the array;
// • Option 2: If there is at least one 1, the last 1 changes to 0;
// • Option 3: If neither Option 1 nor Option 2 can be completed, then the process halts.

// Follow the process and compute how many seconds will pass until the process halts. Refer to the examples below for better understanding.
// Note: You are not expected to provide the most optimal solution, but a solution with time complexity O(numbers.length * zerosToOne) will fit within the execution time limit.

// Example 1:
// • For numbers = [1, 1, 1, 0, 0, 0] and zerosToOne = 2, the output should be
// solution(numbers, zerosToOne) = 13.

// Explanation
// • At the beginning, numbers = [1, 1, 1, 0, 0, 0]
// • After the 1st second, numbers = [1, 1, 1, 1, 0]
// • After the 2nd second, numbers = [1, 1, 1, 0, 0]
// • After the 3rd second, numbers = [1, 1, 1, 1]
// • After the 4th second, numbers = [1, 1, 1, 0]
// • After the 5th second, numbers = [1, 1, 0, 0]
// • After the 6th second, numbers = [1, 1, 1]
// • After the 7th second, numbers = [1, 1, 0]
// • After the 8th second, numbers = [1, 0, 0]
// • After the 9th second, numbers = [1, 1]
// • After the 10th second, numbers = [1, 0]
// • After the 11th second, numbers = [0, 0]
// • After the 12th second, numbers = [1].
// • After the 13th second, numbers = [0].
// • After the 13th second, the process halts, hence the answer is 13.

// Example 2:
// • For numbers = [1, 1] and zerosToOne = 2, the output should be
// solution(numbers, zerosToOne) = 4.

// Explanation
// • At the beginning, numbers = [1, 1]
// • After the 1st second, numbers = [1, 0]
// • After the 2nd second, numbers = [0, 0]
// • After the 3rd second, numbers = [1]
// • After the 4th second, numbers = [0]
// • After the 4th second, the process halts, hence the answer is 4.

// Example 3:
// • For numbers = [0, 0, 0] and zerosToOne = 3, the output should be
// solution(numbers, zerosToOne) = 2.

// Explanation
// • At the beginning, numbers = [0, 0, 0]
// • After the 1st second, numbers = [1]
// • After the 2nd second, numbers = [0]
// • After the 2nd second, the process halts, hence the answer is 2.

function solution(numbers, zerosToOne) {
    let seconds = 0;
    // If there are at least zerosToOne zeros, then the last zerosToOne zeros are removed and one 1 is added at the beginning of the array;
    console.log(numbers);
    while (numbers.length > 1) {
        while (numbers.filter(n => n === 0).length >= zerosToOne) {
            for (let i = 0; i < zerosToOne; i++) {
                numbers.pop();
            }
            numbers.unshift(1);
            seconds++;
        }
        console.log(numbers.filter(n => n === 1).length)
        console.log(numbers.filter(n => n === 0).length)
        // If there is at least one 1, the last 1 changes to 0;
        console.log(numbers);
        while (numbers.filter(n => n === 1).length >= 1) {
            let lastOneIndex = numbers.lastIndexOf(1);
            numbers[lastOneIndex] = 0;
            seconds++;
        }
    }
    console.log(numbers);
    console.log(seconds);
    return seconds;
}

// Test cases
console.log(solution([1, 1, 1, 0, 0, 0], 2)); // Output: 13
console.log(solution([1, 1], 2)); // Output: 4
console.log(solution([0, 0, 0], 3)); // Output: 2
