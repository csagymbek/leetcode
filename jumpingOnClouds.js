// There is a new mobile game that starts with consecutively numbered clouds, where some of the clouds are thunderheads and others are cumulus, and the player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2, but must avoid the thunderheads; determine the minimum number of jumps it will take to jump from the starting position to the last cloud, and it is always possible to win the game; for each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided; complete the jumpingOnClouds function that has the following parameter: int c[n], an array of binary integers, and returns the minimum number of jumps required; the first line contains an integer n, the total number of clouds, and the second line contains n space-separated binary integers describing clouds c[i] where 0 ≤ i < n.

const jumpingOnClouds = (c) => {
    let count = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] === 0) {
            i += 2;
        } else {
            i++;
        }
        count++;
    }
    return count;
};

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));// 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));// 4