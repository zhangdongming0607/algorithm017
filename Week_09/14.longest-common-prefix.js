/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;
  loop1: for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (const str of strs) {
      if (str[i] !== char) break loop1;
    }
    prefix += char;
  }
  return prefix;
};
// @lc code=end
