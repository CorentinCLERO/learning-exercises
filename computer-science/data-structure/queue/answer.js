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
  const queue = new Queue();
  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
  }
  const newArray = [];
  while (queue.size() > 0) {
    newArray.push(queue.dequeue());
  }
  return newArray;
}

// Test cases for EASY
test(
  queueEnqueueDequeue,
  [[1, 2, 3]],
  [1, 2, 3],
  "queueEnqueueDequeue([1,2,3]) should return"
);
test(
  queueEnqueueDequeue,
  [[42]],
  [42],
  "queueEnqueueDequeue([42]) should return"
);
test(queueEnqueueDequeue, [[]], [], "queueEnqueueDequeue([]) should return");

// ===== NORMAL: Implement a Hot Potato Game =====
// In the Hot Potato game, children form a circle and pass an item (the "potato") around as fast as they can.
// When the game stops, the child holding the potato is eliminated. This continues until only one child remains.
// Implement a function that simulates this game and returns the name of the winner.
function hotPotato(names, passes) {
  const queue = new Queue();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < passes; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}

// Test cases for NORMAL
test(
  hotPotato,
  [["Alice", "Bob", "Charlie", "David", "Eve"], 7],
  "Alice",
  'hotPotato(["Alice", "Bob", "Charlie", "David", "Eve"], 7) should return'
);
test(
  hotPotato,
  [["John", "Jack", "Camila"], 1],
  "Camila",
  'hotPotato(["John", "Jack", "Camila"], 1) should return'
);
test(
  hotPotato,
  [["Kartik"], 5],
  "Kartik",
  'hotPotato(["Kartik"], 5) should return'
);

// ===== HARD: Implement a Sliding Window Maximum =====
// Given an array of integers and a window size k, find the maximum value in each sliding window of size k.
// Example: For array [1, 3, -1, -3, 5, 3, 6, 7] and k=3, the output should be [3, 3, 5, 5, 6, 7]
function maxSlidingWindow(nums, k) {
  const deque = []; // stocke les indices des éléments potentiellement max
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 1. Retirer les indices hors de la fenêtre (trop vieux)
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Retirer de la deque les indices dont la valeur est < nums[i]
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Ajouter l'indice courant à la deque
    deque.push(i);

    // 4. Si la fenêtre est complète, ajouter le max (en tête de la deque) au résultat
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Test cases for HARD
test(
  maxSlidingWindow,
  [[1, 3, -1, -3, 5, 3, 6, 7], 3],
  [3, 3, 5, 5, 6, 7],
  "maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3) should return"
);
test(
  maxSlidingWindow,
  [[1, -1], 1],
  [1, -1],
  "maxSlidingWindow([1, -1], 1) should return"
);
test(
  maxSlidingWindow,
  [[9, 11], 2],
  [11],
  "maxSlidingWindow([9, 11], 2) should return"
);
test(
  maxSlidingWindow,
  [[4, 3, 2, 1], 3],
  [4, 3],
  "maxSlidingWindow([4, 3, 2, 1], 3) should return"
);
