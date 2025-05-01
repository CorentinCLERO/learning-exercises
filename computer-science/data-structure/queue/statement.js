// ===== Queue Class for Exercises =====
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.length ? this.items.shift() : null;
  }
  front() {
    return this.items.length ? this.items[0] : null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

// ===== Test Helper =====
function test(fn, input, expected, description) {
  const result = fn(...input);
  const isEqual = Array.isArray(expected)
    ? Array.isArray(result) &&
      result.length === expected.length &&
      result.every((v, i) => v === expected[i])
    : result === expected;
  if (isEqual) {
    console.log(`✅ ${description}`, expected, "| Output:", result);
  } else {
    console.log(`❌ ${description}`, expected, "| Output:", result);
  }
}

// ===== EASY: Implement a Queue Enqueue and Dequeue =====
// Implement a function that enqueues all elements of an array into a queue, then dequeues them all and returns the dequeued elements in order.
function queueEnqueueDequeue(arr) {
  // Your code here
}

// Test cases for EASY
test(
  queueEnqueueDequeue,
  [[1, 2, 3]],
  [1, 2, 3],
  "queueEnqueueDequeue([1,2,3]) should return [1,2,3]"
);
test(
  queueEnqueueDequeue,
  [[42]],
  [42],
  "queueEnqueueDequeue([42]) should return [42]"
);
test(queueEnqueueDequeue, [[]], [], "queueEnqueueDequeue([]) should return []");

// ===== NORMAL: Implement a Hot Potato Game =====
// In the Hot Potato game, children form a circle and pass an item (the "potato") around as fast as they can.
// When the game stops, the child holding the potato is eliminated. This continues until only one child remains.
// Implement a function that simulates this game and returns the name of the winner.
function hotPotato(names, passes) {
  // Your code here
}

// Test cases for NORMAL
test(
  hotPotato,
  [["Alice", "Bob", "Charlie", "David", "Eve"], 7],
  "Alice",
  'hotPotato(["Alice", "Bob", "Charlie", "David", "Eve"], 7) should return "David"'
);
test(
  hotPotato,
  [["John", "Jack", "Camila"], 1],
  "Camila",
  'hotPotato(["John", "Jack", "Camila"], 1) should return "Jack"'
);
test(
  hotPotato,
  [["Kartik"], 5],
  "Kartik",
  'hotPotato(["Kartik"], 5) should return "Kartik"'
);

// ===== HARD: Implement a Sliding Window Maximum =====
// Given an array of integers and a window size k, find the maximum value in each sliding window of size k.
// Example: For array [1, 3, -1, -3, 5, 3, 6, 7] and k=3, the output should be [3, 3, 5, 5, 6, 7]
function maxSlidingWindow(nums, k) {
  // Your code here
}

// Test cases for HARD
test(
  maxSlidingWindow,
  [[1, 3, -1, -3, 5, 3, 6, 7], 3],
  [3, 3, 5, 5, 6, 7],
  "maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3) should return [3, 3, 5, 5, 6, 7]"
);
test(
  maxSlidingWindow,
  [[1, -1], 1],
  [1, -1],
  "maxSlidingWindow([1, -1], 1) should return [1, -1]"
);
test(
  maxSlidingWindow,
  [[9, 11], 2],
  [11],
  "maxSlidingWindow([9, 11], 2) should return [11]"
);
test(
  maxSlidingWindow,
  [[4, 3, 2, 1], 3],
  [4, 3],
  "maxSlidingWindow([4, 3, 2, 1], 3) should return [4, 3]"
);
