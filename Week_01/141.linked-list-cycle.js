/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let f = head,
    s = head;
  while (f && f.next) {
    s = s.next;
    f = f.next.next;
    if (f === s) return true;
  }
  return false;
};
// @lc code=end
