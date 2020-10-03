/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 枚举 target，剩下两个做夹逼
  const res = [];
  nums.sort((i, j) => i - j); // js 的 sort 默认是 转字符串之后按位比
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1,
      j = nums.length - 1;
    while (i < j) {
      let sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while (i < j && nums[i] === nums[++i]);
      } else if (sum > 0) {
        while (i < j && nums[j] === nums[--j]);
      } else {
        res.push([nums[k], nums[i], nums[j]]);
        // // 这里两边一起动是没问题的，因为只动一个不可能为 1
        while (i < j && nums[i] === nums[++i]);
        while (i < j && nums[j] === nums[--j]);
      }
    }
  }
  return res;
};
// @lc code=end
