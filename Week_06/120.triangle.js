/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length === 0) return 0;
  let lib = triangle[0];
  for (let i = 1; i < triangle.length; i++) {
    const nextLib = [];
    const curList = triangle[i];
    nextLib[0] = lib[0] + curList[0];
    for (let j = 1; j < curList.length; j++) {
      const prevMin =
        typeof lib[j] !== "undefined"
          ? Math.min(lib[j], lib[j - 1])
          : lib[j - 1];
      nextLib[j] = prevMin + curList[j];
    }
    lib = nextLib;
  }

  return Math.min(...lib);
};
// @lc code=end
