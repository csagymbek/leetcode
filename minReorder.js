// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
// It's guaranteed that each city can reach city 0 after reorder.

var minReorder = function (n, connections) {
    const visited = new Set();
    const graph = Array.from({ length: n }, () => []);
    let count = 0;
    for (let [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
        visited.add(a + ', ' + b);
    }
    function dfs(node, parent) {
        if (visited.has(parent + ', ' + node)) {
            count++;
        }
        for (let n of graph[node]) {
            if (n === parent) {
                continue;
            }
            dfs(n, node);
        }
    }
    dfs(0, n + 1);
    return count;
};

console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]));// 3
console.log(minReorder(5, [[1, 0], [1, 2], [3, 2], [3, 4]]));// 2
console.log(minReorder(3, [[1, 0], [2, 0]]));// 0