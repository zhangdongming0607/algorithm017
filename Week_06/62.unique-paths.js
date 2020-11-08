/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const lib = [[]];
  for (let i = 0; i < n; i++) lib[0][i] = 1;
  for (let i = 1; i < m; i++) {
    lib[i] = [];
    lib[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      lib[i][j] = lib[i - 1][j] + lib[i][j - 1];
    }
  }
  return lib[m - 1][n - 1];
};
// @lc code=end
