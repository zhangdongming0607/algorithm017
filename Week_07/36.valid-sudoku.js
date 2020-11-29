/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //行
  function isValidGroup(group) {
    const datas = group.filter((v) => v !== ".");
    return datas.length === new Set(datas).size;
  }
  for (let i = 0; i < 9; i++) {
    if (!isValidGroup(board[i])) return false;
    if (!isValidGroup(board.map((b) => b[i]))) return false;
    const smallGroups = [];
    let m = Math.floor(i / 3) * 3; // 起始行
    let n = (i % 3) * 3; // 起始列
    for (let j = 0; j < 9; j++) {
      smallGroups.push(board[m + (j % 3)][n + Math.floor(j / 3)]);
    }
    if (!isValidGroup(smallGroups)) return false;
  }

  return true;
};
// @lc code=end
