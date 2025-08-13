Alright — here’s your **Pattern Recognition Quick Guide**
for TikTok/CodeSignal so you can spot the type of problem in **under 10 seconds**
and jump straight to the right approach.

---

## **Frontend Coding Patterns – Quick ID Table**

| **Clues in Question**                         | **Likely Pattern**            | **Key Approach / Template**                                                        |
| --------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| “Matrix”, “spiral”, “walk around edges”       | **Spiral Matrix (LC 54)**     | `top, bottom, left, right` boundaries; loop while `top <= bottom && left <= right` |
| “Longest substring”, “no repeats”, “window”   | **Sliding Window (LC 3)**     | Use `Set` (or `Map`) + `left/right` pointers; shrink window if duplicate           |
| “Sorted array” + “find target”                | **Binary Search (LC 704)**    | `while (l <= r)`, `mid = Math.floor((l+r)/2)`, adjust left/right                   |
| “Sum to target” + “array”                     | **Two Sum (LC 1)**            | HashMap: store value → index; check `target - num`                                 |
| “Parentheses/brackets valid?”                 | **Valid Parentheses (LC 20)** | Stack; push openers, pop on closers, check match                                   |
| “Cache”, “most recently used”, “evict oldest” | **LRU Cache (LC 146)**        | `Map` + reorder on access; remove first inserted when full                         |

---

### **Decision Flow**

When you read a CodeSignal problem:

1. **Check for sorted**

   - If array sorted and search → Binary Search
   - If sorted and need insertion point → Binary Search variant (`_findIndex`)

2. **Check for sliding**

   - Mentions "subarray", "substring", "no repeats", "longest/shortest" → Sliding Window

3. **Check for structure validation**

   - Parentheses/brackets/tags matching → Stack

4. **Check for graph/grid walk**

   - Matrix, spiral, perimeter → Matrix boundaries
   - BFS/DFS if flood-fill / island problems (less likely in 4-question FE test)

5. **Check for caching / frequency**

   - LRU / LFU cache → Map + order preservation

---

### **Speed Memorization Tip**

- **Day before test** (like now) → Memorize the **6 code templates** exactly as in the cheat sheet.
- When you read a problem, **pattern match immediately** → No thinking about algorithm choice.
- Jump straight to **typing your memorized template**, then adapt.

---

I can also make you a **10-minute drill**:
I’ll throw at you short problem descriptions in TikTok style,
you instantly tell me which of the 6 patterns and start coding.
It’s the fastest way to lock it in for tomorrow.

Do you want me to set that up now?
That would make sure you can **identify and start coding within seconds**.
