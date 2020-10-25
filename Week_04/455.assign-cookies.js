/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let ss = 0,
    gg = 0;
  let o = 0;
  g.sort((i, j) => i - j);
  s.sort((i, j) => i - j);
  while (gg <= g.length && ss <= s.length) {
    if (g[gg] <= s[ss]) {
      gg++;
      o++;
    }
    ss++;
  }
  return o;
};
// @lc code=end
