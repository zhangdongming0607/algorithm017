/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let i = 1;
  let bb = 0;
  while (i < prices.length) {
    const b = prices[i] - prices[i - 1];
    if (b > 0) {
      bb += b;
    }
    i++;
  }
  return bb;
};
// @lc code=end
