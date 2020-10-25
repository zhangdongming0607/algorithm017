/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let leftMostIndex = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (leftMostIndex - nums[i] <= i) {
      leftMostIndex = i;
    }
  }
  return leftMostIndex === 0;
};
// @lc code=end
