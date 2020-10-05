/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const ss = {},
    tt = {};
  for (let i = 0; i < s.length; i++) {
    ss[s[i]] = (ss[s[i]] || 0) + 1;
    tt[t[i]] = (tt[t[i]] || 0) + 1;
  }
  console.log(ss, tt);
  for (let k in ss) {
    if (ss[k] !== tt[k]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
