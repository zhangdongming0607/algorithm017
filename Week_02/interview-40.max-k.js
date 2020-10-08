/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// min binary heap
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class MaxHeap {
  constructor(arr = []) {
    this.container = [];
    if (Array.isArray) {
      arr.forEach((v) => this.insert(v));
    }
  }

  insert(data) {
    const { container } = this;

    container.push(data);
    let index = container.length - 1;
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (container[index] <= container[parent]) {
        break;
      }
      swap(container, index, parent);
      index = parent;
    }
  }
  extract() {
    const { container } = this;
    if (!container.length) {
      return null;
    }

    swap(container, 0, container.length - 1);
    const res = container.pop();
    const length = this.container.length;
    let index = 0, // index 目前的位置
      exchange = index * 2 + 1; // exchange，要换到的位置，默认是左

    while (exchange < length) {
      let right = index * 2 + 2;
      // heapifydown 的时候要换大的那个
      if (right < length && container[right] > container[exchange]) {
        exchange = right;
      }
      if (container[exchange] <= container[index]) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return res;
  }
  top() {
    if (this.container.length) return this.container[0];
    return null;
  }
}
var getLeastNumbers = function (arr, k) {
  const heap = new MaxHeap(arr.slice(0, k));
  for (let i = k; i < arr.length; i++) {
    if (heap.top() > arr[i]) {
      heap.extract();
      heap.insert(arr[i]);
    }
  }
  return heap.container;
};
