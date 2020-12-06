/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;

  if (n * m === 0) {
    return n + m;
  }
  const lib = [];
  for (let i = 0; i < n + 1; i++) {
    lib[i] = [i];
  }
  for (let j = 0; j < m + 1; j++) {
    lib[0][j] = [j];
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = lib[i - 1][j] + 1;
      let down = lib[i][j - 1] + 1;
      let left_down = lib[i - 1][j - 1];
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        left_down += 1;
      }

      lib[i][j] = Math.min(left, down, left_down);
    }
  }
  return lib[n][m];
};
// @lc code=end
