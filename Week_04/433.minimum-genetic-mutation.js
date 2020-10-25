/*
 * @lc app=leetcode id=433 lang=javascript
 *
 * [433] Minimum Genetic Mutation
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// cur 当前基因，target 基因库中的一个目标基因
const createIsNeighbour = (cur) => (target) => {
  let dis = 0;
  for (let i = 0; i < 8; i++) {
    if (cur[i] !== target[i]) {
      dis++;
      if (dis > 1) return false;
    }
  }
  return true;
};

var minMutation = function (start, end, bank) {
  if (start === end) return 0;
  // 其实就是算最短路径，用 BFS，基因库就是个额外的过滤条件，然后记录访问过的避免重复计算
  let levels = 0;
  const visited = new Set();
  const queue = [start];
  const pushFn = (val) => queue.push(val);
  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const cur = queue.shift();
      if (visited.has(cur)) continue;
      visited.add(cur);
      if (cur === end) return levels;
      const getIsNeighbour = createIsNeighbour(cur);
      bank.filter(getIsNeighbour).forEach(pushFn);
    }
    levels++;
  }
  return -1;
};
// @lc code=end
