// ListNode class for singly linked list
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Test helper
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

// Helper: Convert linked list to array for easy comparison
function linkedListToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Helper: Build linked list from array
function buildList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    head = new ListNode(arr[i], head);
  }
  return head;
}

// Helper: Build cyclic linked list from array and cycle position
function buildCyclicList(arr, pos) {
  let head = null,
    tail = null,
    cycleNode = null;
  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    if (!head) head = node;
    else tail.next = node;
    tail = node;
    if (i === pos) cycleNode = node;
  }
  if (tail && cycleNode) tail.next = cycleNode;
  return head;
}

/* ========== EASY: Array to Linked List ========== */
// Write a function arrayToLinkedList(arr) that takes an array and returns the head of a singly linked list representing the same sequence.
function arrayToLinkedList(arr) {
  // Your code here
}

test(
  (arr) => linkedListToArray(arrayToLinkedList(arr)),
  [[1, 2, 3]],
  [1, 2, 3],
  "arrayToLinkedList([1,2,3]) should return a linked list with values [1,2,3]"
);

test(
  (arr) => linkedListToArray(arrayToLinkedList(arr)),
  [[42]],
  [42],
  "arrayToLinkedList([42]) should return a linked list with values [42]"
);

test(
  (arr) => linkedListToArray(arrayToLinkedList(arr)),
  [[]],
  [],
  "arrayToLinkedList([]) should return null (empty list)"
);

/* ========== NORMAL: Reverse a Linked List ========== */
// Write a function reverseLinkedList(head) that takes the head of a singly linked list and returns the head of the reversed list.
function reverseLinkedList(head) {
  // Your code here
}

test(
  (head) => linkedListToArray(reverseLinkedList(head)),
  [buildList([1, 2, 3, 4])],
  [4, 3, 2, 1],
  "reverseLinkedList([1,2,3,4]) should return [4,3,2,1]"
);

test(
  (head) => linkedListToArray(reverseLinkedList(head)),
  [buildList([7, 8])],
  [8, 7],
  "reverseLinkedList([7,8]) should return [8,7]"
);

test(
  (head) => linkedListToArray(reverseLinkedList(head)),
  [buildList([5])],
  [5],
  "reverseLinkedList([5]) should return [5]"
);

test(
  (head) => linkedListToArray(reverseLinkedList(head)),
  [buildList([])],
  [],
  "reverseLinkedList([]) should return []"
);

/* ========== HARD: Detect a Cycle in a Linked List ========== */
// Write a function hasCycle(head) that returns true if the linked list contains a cycle, and false otherwise.
function hasCycle(head) {
  // Your code here
}

test(
  hasCycle,
  [buildCyclicList([1, 2, 3, 4, 5], 2)],
  true,
  "hasCycle([1,2,3,4,5] with cycle at index 2) should return true"
);

test(
  hasCycle,
  [buildCyclicList([1, 2, 3, 4, 5], -1)],
  false,
  "hasCycle([1,2,3,4,5] with no cycle) should return false"
);

test(
  hasCycle,
  [buildCyclicList([1], 0)],
  true,
  "hasCycle([1] with cycle to itself) should return true"
);

test(
  hasCycle,
  [buildCyclicList([], -1)],
  false,
  "hasCycle([]) should return false"
);
