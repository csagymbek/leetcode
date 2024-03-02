// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?


function Node(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};

function LinkedList() {
    var length = 0;
    var head = null;

    // O(n) - space and time
    var isPalindrome = function (head) {
        let ar = [];
        while (head) {
            ar.push(head.val);
            head = head.next;
        }
        return ar.join("") === ar.reverse().join("");
    };
}   




