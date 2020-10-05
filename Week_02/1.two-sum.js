/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 数字不重复，只有一组数满足条件，假设很强了
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] > -1) {
      return [i, obj[target - nums[i]]];
    }
    obj[nums[i]] = i;
  }
  return [];
};
// @lc code=end
