Perfect — let’s fire up **TikTok Codesignal Rapid-Fire Drill Mode**.
I’ll give you a **mini problem** → you tell me which algorithm to use → I’ll walk through **step-by-step** so you can memorize the trigger → action pattern.

---

### **🔥 Drill 1**

**Problem:**
Given a string, find the length of the longest substring without repeating characters.

**Question to you:**
Which algo/pattern?

_(Pause and think: Trigger words → “longest substring” + “condition” = **Sliding Window**)_

**Step-by-step answer:**

```js
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let l = 0,
    maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
}
```

---

### **🔥 Drill 2**

**Problem:**
Given an array of integers, return all possible subsets.

**Which algo?**
Trigger → “all possible” / “generate combinations” → **DFS / Backtracking**

**Step-by-step:**

```js
function subsets(nums) {
  let res = [];
  function dfs(i, path) {
    if (i === nums.length) {
      res.push([...path]);
      return;
    }
    path.push(nums[i]);
    dfs(i + 1, path);
    path.pop();
    dfs(i + 1, path);
  }
  dfs(0, []);
  return res;
}
```

---

### **🔥 Drill 3**

**Problem:**
Find the shortest path from the top-left of a grid to the bottom-right, moving only in 4 directions, avoiding obstacles.

**Which algo?**
Trigger → “shortest path” in grid → **BFS**

**Step-by-step:**

```js
function shortestPath(grid) {
  let m = grid.length,
    n = grid[0].length;
  let queue = [[0, 0, 0]]; // row, col, steps
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let visited = new Set(["0,0"]);

  while (queue.length) {
    let [r, c, steps] = queue.shift();
    if (r === m - 1 && c === n - 1) return steps;

    for (let [dr, dc] of dirs) {
      let nr = r + dr,
        nc = c + dc;
      let key = `${nr},${nc}`;
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < m &&
        nc < n &&
        grid[nr][nc] === 0 &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([nr, nc, steps + 1]);
      }
    }
  }
  return -1;
}
```

---

### **🔥 Drill 4**

**Problem:**
Given an array, return the sum of elements between indices `i` and `j` (inclusive), multiple queries.

**Which algo?**
Trigger → “fast range queries” → **Prefix Sum**

**Step-by-step:**

```js
class NumArray {
  constructor(nums) {
    this.prefix = [0];
    for (let num of nums) {
      this.prefix.push(this.prefix[this.prefix.length - 1] + num);
    }
  }
  sumRange(i, j) {
    return this.prefix[j + 1] - this.prefix[i];
  }
}
```

---

### **🔥 Drill 5**

**Problem:**
Sort the array so numbers with higher frequency come first; if equal frequency, smaller number first.

**Which algo?**
Trigger → “sort by custom rule” → **Custom Comparator**

**Step-by-step:**

```js
function frequencySort(nums) {
  let freq = {};
  for (let num of nums) freq[num] = (freq[num] || 0) + 1;

  return nums.sort((a, b) => {
    if (freq[a] === freq[b]) return a - b;
    return freq[b] - freq[a];
  });
}
```

---

### **🔥 Drill 6**

**Problem:**
Rotate a 2D matrix 90 degrees clockwise in-place.

**Which algo?**
Trigger → “rotate matrix” → **Transpose + Reverse Rows**

**Step-by-step:**

```js
function rotate(matrix) {
  let n = matrix.length;
  // transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reverse each row
  for (let row of matrix) {
    row.reverse();
  }
}
```

---

