/************************************************************
 * 1. LC 54 – Spiral Matrix (Matrix Traversal)
 ************************************************************/
function spiralOrder(matrix) {
  let res = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;

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

/************************************************************
 * 2. LC 3 – Longest Substring Without Repeating Characters
 *    (Sliding Window)
 ************************************************************/
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

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

/************************************************************
 * 3. LC 704 – Binary Search
 ************************************************************/
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

/************************************************************
 * 4. LC 1 – Two Sum (HashMap)
 ************************************************************/
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return [];
}

/************************************************************
 * 5. LC 20 – Valid Parentheses (Stack)
 ************************************************************/
function isValid(s) {
  let stack = [];
  let map = { ')': '(', ']': '[', '}': '{' };
  for (let ch of s) {
    if (!map[ch]) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}

/************************************************************
 * 6. LC 146 – LRU Cache (Map + Linked List Pattern)
 ************************************************************/
class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map(); // preserves insertion order
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    let val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.cap) {
      let firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }
}

/************************************************************
 * Quick usage examples (comment out in CodeSignal!)
 ************************************************************/
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(binarySearch([-1,0,3,5,9,12], 9));
// console.log(twoSum([2,7,11,15], 9));
// console.log(isValid("()[]{}"));
// let lru = new LRUCache(2); lru.put(1,1); lru.put(2,2); console.log(lru.get(1));
