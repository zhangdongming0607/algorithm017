/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 2 left and right boundary
var maxArea = function (a) {
  let i = 0,
    j = a.length - 1;
  let max = 0;
  while (i < j) {
    // 当前情形下的面积
    let minHeight = Math.min(a[i], a[j]);
    let area = (j - i) * minHeight;
    max = Math.max(area, max);
    // 缩小一格，都是缩小一个，缩窄的比较合理
    a[i] < a[j] ? i++ : j--;
  }
  return max;
};
// @lc code=end
