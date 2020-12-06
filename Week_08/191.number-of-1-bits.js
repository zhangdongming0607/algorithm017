/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// https://leetcode-cn.com/problems/number-of-1-bits/solution/wei-1de-ge-shu-by-leetcode/
var hammingWeight = function (n) {
  let sum = 0;
  while (n !== 0) {
    sum++;
    n &= n - 1;
  }
  return sum;
};
// @lc code=end
