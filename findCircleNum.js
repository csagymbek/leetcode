// 547. Number of Provinces
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
// Return the total number of provinces.

// https://www.youtube.com/watch?v=jKv_W-YMqsk

const findCircleNum = (isConnected) => {
    let count = 0;
    const visited = new Set();
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            dfs(isConnected, i, visited);
            count++;
        }
    }
    return count;
};

const dfs = (isConnected, i, visited) => {
    visited.add(i);
    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[i][j] === 1 && !visited.has(j)) {
            dfs(isConnected, j, visited);
        }
    }
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));// 2
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));// 3