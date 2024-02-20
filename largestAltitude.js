// 1732. Find the Highest Altitude

// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

// Constraints:
// n == gain.length
// 1 <= n <= 100
// -100 <= gain[i] <= 100

// Imagine there's a biker who is going on a road trip. The biker starts at a point on the road where the altitude (height) is zero. During the road trip, the biker will pass through several points on the road, each at a different altitude.
// To make it easier to understand, let's call the starting point "Point 0," and there are a total of "n + 1" points on the road trip. So, there are n segments or sections between these points. The net gain in altitude between consecutive points is given in an integer array called "gain." The value of gain[i] represents the difference in altitude between points i and i+1.
// For example, if gain[i] is positive, it means the biker is going uphill, gaining altitude from point i to point i+1. If gain[i] is negative, it means the biker is going downhill, losing altitude from point i to point i+1.
// The task is to find out what is the highest altitude the biker reaches during the road trip. In other words, we need to determine the maximum height the biker reaches from all the points on the trip.
// To solve this, we can start at point 0, which has an altitude of 0, and then follow the net gain in altitude given in the "gain" array for each segment. By adding the net gains consecutively, we can keep track of the biker's altitude as they move along the road. The highest altitude reached during the journey will be the answer to the problem.

// And here the explanation of first testcase
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// To find the altitudes at each point, we start at Point 0 with an altitude of 0 and apply the altitude changes given in the "gain" array:

// Starting point: Altitude = 0.
// Transition from Point 0 to Point 1: Altitude = 0 + (-5) = -5.
// Transition from Point 1 to Point 2: Altitude = -5 + 1 = -4.
// Transition from Point 2 to Point 3: Altitude = -4 + 5 = 1.
// Transition from Point 3 to Point 4: Altitude = 1 + 0 = 1.
// Transition from Point 4 to Point 5: Altitude = 1 + (-7) = -6.
// Now we have the correct list of altitudes: [0,-5,-4,1,1,-6]. The highest altitude reached by the biker is 1. Therefore, the correct output for this problem is 1.

// The maximum altitude is reached after the third point, where the altitude becomes 1. Despite having more transitions after that, the altitude remains 1 since those transitions do not change the height (1 + 0, 1 + (-7) equals 1).

var largestAltitude = function (gain) {
    let prefix = 0;
    let max = 0;
    for (let i = 0; i < gain.length; i++) {
        prefix += gain[i];
        max = Math.max(max, prefix);
    }
    return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));// 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));// 0