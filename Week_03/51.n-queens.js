/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  function dfs(queens, xyDiff, xySum) {
    const x = queens.length; // 被占用的行
    if (x === n) {
      return result.push(queens);
    }
    for (let y = 0; y < n; y++) {
      // 被占用的列
      if (
        !queens.includes(y) &&
        !xyDiff.includes(x - y) &&
        !xySum.includes(x + y)
      ) {
        dfs([...queens, y], [...xyDiff, x - y], [...xySum, x + y]);
      }
    }
  }
  dfs([], [], []);
  for (let i = 0; i < result.length; i++) {
    const ans = [];
    for (let j = 0; j < n; j++) {
      ansCol = new Array(n).fill(".");
      ansCol[result[i][j]] = "Q";
      ans.push(ansCol.join(""));
    }
    result[i] = ans;
  }
  return result;
};
// @lc code=end
