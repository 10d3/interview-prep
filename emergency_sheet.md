Alright — let’s make your **TikTok Codesignal Emergency Cheat Sheet** 📜
This will be **pattern → recognition → algorithm steps** so when you see a problem, you know exactly which tool to grab and how to apply it.

---

## **TikTok Codesignal Emergency Cheat Sheet** 🚀

### **1. Two Pointers / Sliding Window**

**When to use:**

- Sorted array (two-sum, remove duplicates, merge intervals).
- Find subarray/window with a property (max sum, no repeating chars).

**Recognize it:**

- “Find pair/triplet with sum X”
- “Find smallest/largest subarray meeting condition”
- “String/array scanning with continuous segment”

**Algorithm:**

```js
let left = 0;
let sum = 0;
for (let right = 0; right < arr.length; right++) {
  sum += arr[right];
  while (sum > target) {
    // shrink window if condition breaks
    sum -= arr[left];
    left++;
  }
  // check if window meets condition
}
```

---

### **2. Hashing / Frequency Map**

**When to use:**

- Count occurrences, group items, detect duplicates, anagrams.

**Recognize it:**

- “How many times…”, “group by…”, “check if exists in set”

**Algorithm:**

```js
let freq = {};
for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}
```

---

### **3. Sorting + Binary Search**

**When to use:**

- Find kth element, minimize/maximize distances, custom ordering.

**Recognize it:**

- “Find closest…”, “search in sorted array”, “minimize/maximize something monotonic”

**Algorithm:**

```js
arr.sort((a, b) => a - b); // custom comparator for objects if needed
let left = 0,
  right = arr.length - 1;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```

---

### **4. Prefix Sum / Cumulative Sum**

**When to use:**

- Many range sum queries
- Find subarray sum quickly

**Recognize it:**

- “Sum between i and j” asked repeatedly
- “Count subarrays with sum X”

**Algorithm:**

```js
let prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}
// sum from i to j = prefix[j+1] - prefix[i]
```

---

### **5. DFS / BFS**

**When to use:**

- Tree traversal, graph traversal, connected components.

**Recognize it:**

- “Find all reachable nodes”
- “Number of islands”
- “Shortest path in unweighted graph”

**DFS (recursive):**

```js
function dfs(node) {
  if (!node || visited.has(node)) return;
  visited.add(node);
  for (let nei of graph[node]) dfs(nei);
}
```

**BFS (queue):**

```js
let queue = [start];
while (queue.length) {
  let node = queue.shift();
  for (let nei of graph[node]) {
    if (!visited.has(nei)) queue.push(nei);
  }
}
```

---

### **6. Greedy**

**When to use:**

- Interval scheduling, coin change (when denominations are nice), minimize/maximize with local choice.

**Recognize it:**

- “Always take the smallest/largest next step”

**Algorithm:**

```js
arr.sort((a, b) => a[1] - b[1]); // end time
let lastEnd = -Infinity,
  count = 0;
for (let [start, end] of arr) {
  if (start >= lastEnd) {
    count++;
    lastEnd = end;
  }
}
```

---

### **7. Stack**

**When to use:**

- Valid parentheses, next greater element, evaluate expressions.

**Recognize it:**

- “Match open/close pairs”
- “Find next element larger/smaller”

**Algorithm:**

```js
let stack = [];
for (let ch of s) {
  if (map[ch]) {
    if (stack.pop() !== map[ch]) return false;
  } else {
    stack.push(ch);
  }
}
```

---

## **How to Apply in a New Problem**

When you read the question:

1. **Identify keywords** (sorted, consecutive, sum, nearest, graph, tree, range, interval).
2. **Match to pattern** above.
3. **Pick algorithm template** from above.
4. Adjust **data structures** (array, set, map, heap) to fit the input.
5. Implement and test with:

   - **Small example**
   - **Edge case**
   - **Constraint boundary**

---
