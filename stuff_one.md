Alright — let’s go one-by-one, I’ll explain each concept, when to use it, give you a _clear example_, and then walk through the solution so you can reproduce it yourself on CodeSignal or LeetCode.

---

## **7. Recursion / DFS / BFS**

**Type:** Tree / Graph problems
**Key idea:** Explore all connected nodes, either _deep_ (DFS) or _level-by-level_ (BFS).

---

### **DFS Example:** Binary Tree Inorder Traversal (LeetCode 94)

**Problem:**
Given the root of a binary tree, return its inorder traversal.

**Idea:**

- DFS (recursion) naturally follows:

  1. Visit left subtree
  2. Visit root
  3. Visit right subtree

```js
function inorderTraversal(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return result;
}
```

**Why it works:**

- Recursion handles the stack for you.
- For BFS you’d instead use a `queue` and process nodes level-by-level.

---

### **BFS Example:** Number of Islands (LeetCode 200)

**Problem:**
Given a 2D grid of `'1'` (land) and `'0'` (water), count the number of islands.

**Idea:**

- Scan grid, when you find `'1'`, BFS/DFS flood-fill it to mark it visited.

```js
function numIslands(grid) {
  if (!grid.length) return 0;
  let count = 0;
  const rows = grid.length,
    cols = grid[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;
    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}
```

---

## **8. Sorting & Custom Order**

**Type:** Array / List
**Key idea:** Use `.sort()` with a comparator `(a, b) => ...` for custom sorting.

---

### **Example:** Sort by Frequency (LeetCode 451)

**Problem:**
Given a string, sort it by frequency of characters (highest first).

**Idea:**

- Count characters in a map.
- Convert to array, sort by count, rebuild string.

```js
function frequencySort(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1]) // sort by frequency desc
    .map(([char, count]) => char.repeat(count))
    .join("");
}
```

---

### **Example:** K Closest Points to Origin (LeetCode 973)

```js
function kClosest(points, k) {
  return points
    .sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
    .slice(0, k);
}
```

---

## **9. Prefix Sum / Cumulative Sum**

**Type:** Array
**Key idea:** Precompute partial sums so you can get `sum[i..j]` in O(1).

---

### **Example:** Subarray Sum Equals K (LeetCode 560)

**Problem:**
Count subarrays whose sum equals `k`.

**Idea:**

- Keep running sum, store how many times each sum has occurred.
- If `runningSum - k` seen before, that’s a valid subarray end.

```js
function subarraySum(nums, k) {
  const map = { 0: 1 };
  let sum = 0,
    count = 0;
  for (let num of nums) {
    sum += num;
    if (map[sum - k]) count += map[sum - k];
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
}
```

---

### **Example:** 1D Prefix Sum

```js
const arr = [2, 4, 6, 8];
const prefix = [0];
for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] + arr[i]);
}
// Sum of arr[1..3] = prefix[4] - prefix[1]
```

---

If you want, I can now make you a **CodeSignal-style practice sheet** where each of these 3 categories has **2 warm-ups and 1 hard** so you hit DFS/BFS, sorting, and prefix sums in a timed drill — that will mimic exactly how TikTok’s test might combine them.

Do you want me to prepare that?
