Alright — if you only have **today** to prepare, I’ll get you ready for **each of the six priority areas** I mentioned, with examples and a mini-drill for each so you actually _do_ them rather than just read.

---

## **1. JavaScript Language Fluency (ES6+)**

### **Key Concepts**

```js
// Array methods
const nums = [1, 2, 3, 4, 5];
nums.map((x) => x * 2); // [2, 4, 6, 8, 10]
nums.filter((x) => x % 2 === 0); // [2, 4]
nums.reduce((sum, x) => sum + x, 0); // 15

// Destructuring
const [first, second] = nums; // first=1, second=2
const { length } = nums; // length=5

// Spread
const copy = [...nums]; // clone array
const merged = [...nums, 6]; // append

// Default params
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

// Optional chaining & nullish coalescing
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.age ?? 18); // 18
```

**Mini-drill:**
Rewrite a binary search so it uses `.slice()` to narrow arrays instead of index pointers.

---

## **2. DOM & Browser Basics**

If they drop a “mini frontend task,” you need these at muscle-memory speed.

```js
// Select elements
const btn = document.querySelector("#submit");
const items = document.querySelectorAll(".item");

// Event listener
btn.addEventListener("click", (e) => {
  console.log("Clicked!", e.target);
});

// Manipulate DOM
const div = document.createElement("div");
div.textContent = "Hello TikTok";
document.body.appendChild(div);

// Storage
localStorage.setItem("score", "100");
console.log(localStorage.getItem("score"));

// Fetch API
async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

**Mini-drill:**
Create a button in HTML and make it log `"TikTok FE Ready!"` when clicked.

---

## **3. Big-O Thinking**

Memorize the complexity for the **6 core patterns**:

| Pattern          | Time Complexity | Example              |
| ---------------- | --------------- | -------------------- |
| Two pointers     | O(n)            | Sorted array two-sum |
| Sliding window   | O(n)            | Longest substring    |
| Binary search    | O(log n)        | Search sorted list   |
| Spiral traversal | O(n·m)          | Matrix spiral        |
| Stack/monotonic  | O(n)            | Daily temperatures   |
| BFS/DFS          | O(V+E)          | Graph traversal      |

**Mini-drill:**
Pick one of your recent solutions and explain why its time complexity is what it is.

---

## **4. Edge-Case Testing**

Always mentally run these cases before submitting:

- Empty input: `[]` or `""`
- Single item
- All identical items
- Already sorted
- Reverse sorted
- Large size

Example:

```js
function getFirst(arr) {
  if (!arr.length) return null;
  return arr[0];
}

console.log(getFirst([])); // null
console.log(getFirst([10])); // 10
console.log(getFirst([1, 2, 3])); // 1
```

**Mini-drill:**
Write a function to find the median, then run it on `[5]`, `[]`, `[1,2,3,4]`, `[2,2,2]`.

---

## **5. Debugging & Reading Errors**

Errors you’ll see on CodeSignal:

- `expected X to equal Y` → logic error (likely off-by-one or wrong comparison)
- `undefined is not a function` → calling something wrong or wrong type
- `Cannot read property 'length' of undefined` → wrong variable name

**Mini-drill:**
Run:

```js
console.log(x);
```

See the `ReferenceError`, then fix it by defining `let x = 5;`.

---

## **6. Time Management**

TikTok FE CodeSignal \~70–90 mins:

- Q1 & Q2: \~10–15 mins each
- Q3 & Q4: \~20–25 mins each
- Skip early if stuck — solve easiest first

**Mini-drill:**
Set a **15-min timer** and solve “Two Sum” from scratch without looking up anything.

---

If you want, I can now **give you the 15 LeetCode problems** (2–3 per pattern) that will let you practice _all six skill areas_ in one sprint today — so by tonight, you’ll be as ready as possible for any CodeSignal question they throw.

Do you want me to give you that full 15-question drill plan?
