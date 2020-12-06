/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return [[]];
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    const l = intervals[i][0],
      r = intervals[i][1];
    if (merged.length === 0 || merged[merged.length - 1][1] < l) {
      merged.push([l, r]);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], r);
    }
  }
  return merged;
};
// @lc code=end
