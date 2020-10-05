学习笔记

# hash table

哈希函数由一个字符串映射到数字

### Map

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map

和 object 的区别

1. 不会无意遍历到原型
2. key 可以是任意类型
3. key 的顺序是有序的（插入顺序）
4. 有 size
5. 有优化

### Set

#### 二叉树

二维数据结构

其实就是二维的 link list

树是没有环的图

遍历：

前：根左右 中：左根右 后序：左右根

树：递归更简单

#####  二叉搜索树

左子树所有节点小于其根节点，右子树所有节点大于其根节点。（中序遍历是递增的）

查询和插入都是 logn 的，移除时可以用右子树中较小的那个来做



```javascript
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}
```

堆 heap

找最大值或者最小值的数据结构

大小顶堆，大小根堆

自己实现一般基于二叉树

Find-max: O1, delete max O(logn) insert: O(logN) 或者 O(1)

二叉堆：完全二叉树（除了最后一层必须是满的）来实现

满足性质：完全树，任意节点大于子节点值

完全树可以用数组描述：

i 的左孩子是 2i+1 右孩子是 2i+2，父节点是 floor((i-1)/2)

插入：heapifyup，如果大于父亲节点，就交换

删除：heapifydown

