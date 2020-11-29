/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Friend Circles
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = [];
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  union(i, j) {
    let parent1 = this.findParent(i);
    let parent2 = this.findParent(j);
    this.parent[parent1] = parent2;
  }

  findParent(i) {
    let root = i;
    while (this.parent[root] !== root) {
      root = this.parent[root];
    }
    while (this.parent[i] !== i) {
      let x = i;
      i = this.parent[i];
      this.parent[x] = root;
    }
    return root;
  }
}
var findCircleNum = function (M) {
  const unionFind = new UnionFind(M.length);
  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      if (M[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }
  const parentSet = new Set(
    unionFind.parent.map((i) => unionFind.findParent(i))
  );
  return parentSet.size;
};
// @lc code=end
