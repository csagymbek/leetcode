// Let's define a rhombic area frame of size r as the set of all cells exactly r - 1 step away (up, down, left, or right) from a given center cell in a matrix. The number r is called the radius of the rhombic area frame. In the image below, the black cell is the center of the rhombic area, and every cell contains a number representing the distance to the center - the radius. All cells with number 1 in them represent a rhombic area frame of size 1, all cells with number 2 in them represent a rhombic area frame of size 2, etc. Cells with the same radius are colored in the same color. The distance between a center cell (centerX, centerY) and another cell (cellX, cellY) is calculated as follows:
// distance = abs(centerX - cellX) + abs(centerY - cellY) + 1, where abs(x) is an absolute value of x.
// Given a rectangular matrix of integers matrix, and an integer radius, your task is the following:
// For each possible center cell of the matrix, find the sum of all elements of the rhombic area frame of size radius. Note: only consider the rhombic areas whose elements all fit within the bounds of the matrix. From among these sums, find the highest value. Return an integer representing the highest sum.
// Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(matrix.length^2 * matrix[0].length^2) will fit within the execution time limit.

// Example

// matrix = [[10, 9, 4, 2, 7, 3],
// [4, 2, 7, 2, 1, 1],
// [4, 1, 4, 5, 3, 0],
// [4, 5, 2, 5, 4, 4],
// [2, 4, 6, 1, 0, 4],
// [4, 4, 6, 5, 0, 4]]

// and radius = 3, the output should be
// solution(matrix, radius) = 31

// Answer: 31

// [10 0 4 2 7 3]
// [6 2 7 2 1 1]
// [4 1 4 5 3 0]

// [3 5 2 1 4 5]
// [3 4 6 1 0 4]
// [3 4 6 1 0 4]

// As you can see from the animation above, among
// these 6 rhombic areas, there are four distinct sums:
// 27, 18, 31, 27. So the maximum sum among
// them is 31 which is the answer.

// For
// matrix = [[100]]

// and radius = 1, the output should be
// solution(matrix, radius) = 100

// There is a single center, and the rhombic area of size radius = 1 contains a single number 100 as the center.

// Input/Output

// [execution time limit] 4 seconds (js)
// [memory limit] 1 GB
// [Input] array.array.integer matrix
// A rectangular matrix of integers.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 30,
// 1 ≤ matrix[i].length ≤ 30,
// 0 ≤ matrix[i][j] ≤ 100

// [Input] integer radius
// An integer representing the radius of the rhombic

var solution = function (matrix, radius) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxSum = -Infinity;

    // Iterate over each cell in the matrix
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let sum = 0;

            // Iterate over the rhombic area frame around the current cell
            for (let x = Math.max(0, i - radius); x < Math.min(numRows, i + radius + 1); x++) {
                for (let y = Math.max(0, j - radius); y < Math.min(numCols, j + radius + 1); y++) {
                    // Calculate the Manhattan distance from the center cell (i, j)
                    const distance = Math.abs(x - i) + Math.abs(y - j) + 1;

                    // Check if the current cell is within the rhombic area frame
                    if (distance <= radius) {
                        sum += matrix[x][y];
                    }
                }
            }

            // Update the maximum sum
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};

// Test case
console.log(solution([[10, 9, 4, 2, 7, 3], [4, 2, 7, 2, 1, 1], [4, 1, 4, 5, 3, 0], [4, 5, 2, 5, 4, 4], [2, 4, 6, 1, 0, 4], [4, 4, 6, 5, 0, 4]], 3)); // Output: 31