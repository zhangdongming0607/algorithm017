/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 转移方程，偷了 i 方案的最大金额 f(i) = Math.max(f(i - 1), f(i - 2) + nums(i))
var rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums, 0);
  const lib = [nums[0], Math.max(nums[1], nums[0])];
  for (let i = 2; i < nums.length; i++) {
    lib[i] = Math.max(lib[i - 1], lib[i - 2] + nums[i]);
  }
  return Math.max(lib[nums.length - 1], lib[nums.length - 2]);
};
// @lc code=end
