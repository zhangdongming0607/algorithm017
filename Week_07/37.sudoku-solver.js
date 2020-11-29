/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// ref: https://leetcode-cn.com/problems/sudoku-solver/solution/pythonsethui-su-chao-guo-95-by-mai-mai-mai-mai-zi/
var solveSudoku = function (board) {
  const initalGroup = new Array(9).fill().map((_, index) => String(index + 1));
  const row = new Array(9).fill().map(() => new Set(initalGroup.slice()));
  const col = new Array(9).fill().map(() => new Set(initalGroup.slice()));
  const block = new Array(9).fill().map(() => new Set(initalGroup.slice()));

  const empty = []; //收集需填数字

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        const val = board[i][j];
        col[i].delete(val);
        row[j].delete(val);
        block[Math.floor(i / 3) * 3 + Math.floor(j / 3)].delete(val);
      } else {
        empty.push([i, j]);
      }
    }
  }
  function backtrack(index) {
    if (index === empty.length) {
      return true;
    }
    const [i, j] = empty[index];
    const b = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    const avaiableNums = Array.from(col[i])
      .filter((v) => row[j].has(v))
      .filter((v) => block[b].has(v));
    for (let value of avaiableNums) {
      col[i].delete(value);
      row[j].delete(value);
      block[b].delete(value);
      board[i][j] = value;
      if (backtrack(index + 1)) {
        return true;
      }
      col[i].add(value);
      row[j].add(value);
      block[b].add(value);
    }
    return false;
  }
  backtrack(0);
};
// @lc code=end
