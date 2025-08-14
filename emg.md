Got it—**TikTok Codesignal Rapid-Fire Training Mode: Step-by-Step Algos**.
Below are the **10 core problems** you drilled, each broken into: **When to use**, **Invariants**, **Exact steps you execute**, **Edge cases**, **Complexity**. Read straight down and you’ll know exactly what to do under the clock.

---

## 1) Two Pointers — Pair Sum in Sorted Array

**When:** “Find two numbers that add to target” + array is **sorted**.
**Invariant:** Window is `[left, right]`; every iteration shrinks it; no index is revisited.

**Steps**

1. Set `left = 0`, `right = n - 1`.
2. Compute `sum = arr[left] + arr[right]`.
3. If `sum === target` → done.
4. If `sum < target` → need bigger sum → `left++`.
5. Else `sum > target` → need smaller sum → `right--`.
6. Repeat while `left < right`.

**Edge cases:** duplicates don’t matter; if no solution, loop exits.
**Complexity:** O(n) time, O(1) space.

---

## 2) Sliding Window — Longest Substring Without Repeating Characters

**When:** “longest substring with X constraint”, here X = **no repeats**.
**Invariant:** Window `[left..right]` always contains **unique** characters.

**Steps**

1. `left = 0`, `set = ∅`, `best = 0`.
2. For `right` from 0..n-1:

   - While `s[right]` is in `set`:

     - Remove `s[left]` from `set`; `left++`.

   - Add `s[right]` to `set`.
   - Update `best = max(best, right - left + 1)`.

3. Return `best`.

**Edge cases:** empty string → 0; all same char → 1.
**Complexity:** O(n) time (each char enters/leaves once), O(min(n, Σ)) space.

---

## 3) Hashing — Group Anagrams

**When:** “group words that are anagrams”.
**Invariant:** Words with the same **signature** map to the same bucket.

**Steps (sorted-key version)**

1. For each word:

   - Compute `key = sorted(word)`.
   - Push word into `map[key]`.

2. Return all `map` values.

**Alt signature:** 26-count frequency as key to avoid O(L log L) sort per word.
**Edge cases:** single-letter words; mixed cases (normalize if needed).
**Complexity:** O(m \* L log L) with sort; O(m \* (L + 26)) with counts. Space O(mL).

---

## 4) Sorting — Merge Intervals

**When:** “merge overlapping intervals”.
**Invariant:** `merged` stays non-overlapping and sorted.

**Steps**

1. Sort intervals by start.
2. Initialize `merged = [firstInterval]`.
3. For each `curr`:

   - `last = merged.back()`.
   - If `curr.start <= last.end` → overlap → `last.end = max(last.end, curr.end)`.
   - Else push `curr`.

4. Return `merged`.

**Edge cases:** empty input; fully nested intervals.
**Complexity:** O(n log n) for sort, O(n) merge; space O(1) extra (if in place) or O(n).

---

## 5) Prefix Sum — Subarray Sum Equals K

**When:** “count subarrays with sum == K”.
**Invariant:** Map holds counts of **previous prefix sums**.

**Steps**

1. `sum = 0`, `count = 0`, `map = {0:1}` (empty prefix).
2. For each `num`:

   - `sum += num`.
   - Target previous sum is `need = sum - k`.
   - If `map[need]` exists → add that count to `count`.
   - Increment `map[sum]`.

3. Return `count`.

**Edge cases:** negative numbers allowed; zero `k`; many zeros handled by map counts.
**Complexity:** O(n) time, O(n) space.

---

## 6) DFS — Number of Islands

**When:** Grid of ‘1’/‘0’, count connected components (4-dir).
**Invariant:** Visited land cells are **mutated** to ‘0’ (or marked) so we don’t re-visit.

**Steps**

1. `islands = 0`.
2. For each cell `(r,c)`:

   - If grid\[r]\[c] === '1':

     - `islands++`
     - DFS(r,c):

       - Bounds/‘0’ → return.
       - Mark as ‘0’.
       - Recurse to 4 neighbors.

3. Return `islands`.

**Edge cases:** all water; single big island; large grid (use iterative stack if recursion depth risky).
**Complexity:** O(R*C) time, O(R*C) worst-case stack/visited.

---

## 7) BFS — Shortest Path in Binary Matrix (unweighted)

**When:** “shortest path” in unweighted grid/graph.
**Invariant:** BFS explores layers by **distance**; first time you reach target is shortest.

**Steps**

1. If source or target blocked → return -1.
2. Init queue with `[src, dist=1]`; mark visited.
3. While queue not empty:

   - Pop `(r,c,d)`.
   - If `(r,c)` is target → return `d`.
   - For each neighbor:

     - If in bounds and not visited and open → mark visited, push `(nr,nc,d+1)`.

4. If exit loop → unreachable → -1.

**Edge cases:** 1×1 grid; 8-dir vs 4-dir (know which the problem wants).
**Complexity:** O(N) nodes, O(N) space.

---

## 8) Greedy — Activity Selection (Max non-overlapping)

**When:** “choose maximum number of non-overlapping intervals/meetings”.
**Invariant:** Choosing the earliest finishing meeting leaves most room for others.

**Steps**

1. Sort by end time ascending.
2. `lastEnd = -∞`, `count = 0`.
3. For each `[start,end]`:

   - If `start >= lastEnd`: take it → `count++`, `lastEnd = end`.

4. Return `count`.

**Edge cases:** equal end times; zero-length intervals.
**Complexity:** O(n log n) time, O(1) space.

---

## 9) Stack — Valid Parentheses

**When:** “is the bracket sequence valid?”
**Invariant:** Stack top is **the last unmatched opening** bracket.

**Steps**

1. `map = {')':'(', ']':'[', '}':'{'}`, `stack = []`.
2. For each `ch`:

   - If `ch` is a **closing** bracket:

     - If stack empty or `stack.pop() !== map[ch]` → invalid.

   - Else (opening) → `stack.push(ch)`.

3. Valid iff `stack.length === 0`.

**Edge cases:** starts with closing; odd length; non-bracket chars (filter if required).
**Complexity:** O(n) time, O(n) space worst case.

---

## 10) Matrix — Rotate Image (90° Clockwise)

**When:** In-place rotation of N×N matrix.
**Invariant:** Rotation equals **transpose** then **reverse each row**.

**Steps**

1. **Transpose**: for `i in [0..n-1]`, for `j in [i..n-1]`, swap `A[i][j]` ↔ `A[j][i]`.
2. **Reverse rows**: for each row `A[i]`, reverse it in place.
3. Done.

**Why it works:** Transpose flips across diagonal; reversing rows then rotates columns into place.
**Edge cases:** n=1; negative/zero values irrelevant.
**Complexity:** O(n²) time, O(1) extra space.

---

### Pattern-to-Problem Recognition Cheats

- “pair sum” + sorted → **Two pointers**
- “longest substring/at most K” → **Sliding window**
- “group by content” → **Hashing signature**
- “overlap intervals” → **Sort + merge**
- “count subarrays sum == K” → **Prefix sum + map**
- “count connected components” → **DFS/BFS**
- “shortest path (unweighted)” → **BFS**
- “maximize # non-overlap” → **Greedy end-time**
- “balanced brackets” → **Stack**
- “rotate/spiral matrix” → **Matrix transforms**

If you want, I can turn this into a **single-page cheat sheet** you can print or keep open during practice (clean headings + mini diagrams).
