/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let max = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - deque[0] >= k) deque.shift();
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      max.push(nums[deque[0]]);
    }
  }
  return max;
};
// @lc code=end
