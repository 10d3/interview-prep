Perfect! Here’s your **TikTok Frontend CodeSignal Cheat Sheet** for today—designed so you can **memorize templates and patterns** and handle almost any likely question.

---

## **1️⃣ Matrix / Spiral Traversal**

**Use `top, bottom, left, right` boundaries**

```js
function spiralOrder(matrix) {
  let res = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
}
```

---

## **2️⃣ LRU Cache**

**Use Map + Doubly Linked List**

```js
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value = value;
      this._moveToHead(node);
    } else {
      let node = new ListNode(key, value);
      this.map.set(key, node);
      this._addNode(node);
      if (this.map.size > this.capacity) {
        let tailPrev = this.tail.prev;
        this._removeNode(tailPrev);
        this.map.delete(tailPrev.key);
      }
    }
  }

  _addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addNode(node);
  }
}
```

---

## **3️⃣ Sliding Window / Two Pointers**

**Longest substring without repeating characters**

```js
function lengthOfLongestSubstring(s) {
  let set = new Set(),
    left = 0,
    maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
```

---

## **4️⃣ Binary Search Template**

```js
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left; // insert position or first >= target
}
```

---

## **5️⃣ Stack / Queue**

**Valid Parentheses**

```js
function isValid(s) {
  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };
  for (let c of s) {
    if (c in map) {
      if (stack.pop() !== map[c]) return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
```

---

## **6️⃣ HashMap / Frequency Counter**

**Two Sum**

```js
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) return [map.get(target - nums[i]), i];
    map.set(nums[i], i);
  }
  return [];
}
```

---

## **7️⃣ Median Container**

**Keep array sorted, binary search insert/delete**

```js
class Container {
  constructor() {
    this.arr = [];
  }
  _findIndex(val) {
    let left = 0,
      right = this.arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (this.arr[mid] < val) left = mid + 1;
      else right = mid;
    }
    return left;
  }
  add(val) {
    let idx = this._findIndex(val);
    this.arr.splice(idx, 0, val);
  }
  delete(val) {
    let idx = this._findIndex(val);
    if (idx < this.arr.length && this.arr[idx] === val) {
      this.arr.splice(idx, 1);
      return true;
    }
    return false;
  }
  getMedian() {
    if (this.arr.length === 0) throw new Error("Empty");
    let mid = Math.floor(this.arr.length / 2);
    return this.arr.length % 2 === 0 ? this.arr[mid - 1] : this.arr[mid];
  }
}
```

---

### ✅ **Quick Tips**

1. Memorize **matrix spiral boundaries** (`top,bottom,left,right`).
2. Memorize **LRU cache linked list template** (`addNode`, `removeNode`, `moveToHead`).
3. Sliding window → **expand right, shrink left**.
4. Binary search → **`while(left<right)`**, `mid = Math.floor((left+right)/2)`.
5. Stack → use map for matching pairs.
6. HashMap → for counting, index mapping.
7. Median → sorted array + binary search insert/delete.

---

If you want, I can **make a super condensed “1-page memory sheet” with all templates side by side** that you can literally **read in 15 minutes before the test**.

Do you want me to make that?
