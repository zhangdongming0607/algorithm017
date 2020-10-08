/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  function countInRange(nums, num, lo, hi) {
    let count = 0;
    for (let i = lo; i <= hi; i++) {
      if (nums[i] === num) count++;
    }
    return count;
  }
  function majorityElementRec(nums, lo, hi) {
    if (lo === hi) {
      return nums[lo];
    }

    const mid = Math.floor((hi - lo) / 2) + lo;
    const left = majorityElementRec(nums, lo, mid);
    const right = majorityElementRec(nums, mid + 1, hi);

    if (left === right) {
      return left;
    }

    const leftCount = countInRange(nums, left, lo, hi);
    const rightCount = countInRange(nums, right, lo, hi);

    return leftCount > rightCount ? left : right;
  }
  return majorityElementRec(nums, 0, nums.length - 1);
};
// @lc code=end
