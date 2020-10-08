/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const map = new Map();
map.set("2", "abc");
map.set("3", "def");
map.set("4", "ghi");
map.set("5", "jkl");
map.set("6", "mno");
map.set("7", "pqrs");
map.set("8", "tuv");
map.set("9", "wxyz");
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const result = [];
  function letterCombinationsRec(s, index) {
    if (s.length === digits.length) return result.push(s);
    const letters = map.get(digits[index]);
    for (let letter of letters) {
      letterCombinationsRec(s + letter, index + 1);
    }
  }
  letterCombinationsRec("", 0);
  return result;
};
// @lc code=end
