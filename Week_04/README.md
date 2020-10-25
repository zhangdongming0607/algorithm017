学习笔记

# 搜索

* DFS

  深度优先从代码实现上非常顺，尽管从流程图上看会复杂一些。

* BFS

  比较适合做一些最短路径的题目。

  广度优先从代码实现上其实是更难一些，DFS 没追求递归就好，但是BFS需要维护一个队列来做。

  ```
  var levelOrder = function(root) {
      // If root is null return an empty array
      if(!root) return []
      
      const queue = [root] // initialize the queue with root
      const levels = [] // declare output array
      
      while(queue.length !== 0){
         const queueLength = queue.length // Get the length prior to dequeueing
         const currLevel = [] // Declare this level
         // loop through to exhaust all options and only to include nodes at currLevel
         for(let i = 0; i < queueLength; i++){
             // Get next node
             const current = queue.shift()
             
             if(current.left){
                 queue.push(current.left)
             }
             if(current.right){
                 queue.push(current.right)
             }
             // After we add left and right for current, we add to currLevel
             currLevel.push(current.val)
         }
         // Level has been finished. Push into output array
         levels.push(currLevel)
     }
      return levels
  }
  ```

  

## 贪心

* 贪心

  对每个子问题的办法做局部最优选择，不能回退

* 动态规划

  保存之前的结果，能回退。

