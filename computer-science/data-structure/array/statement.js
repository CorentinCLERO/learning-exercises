// Helper function for testing
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

// EASY 1: Sum of Array Elements
// Write a function that takes an array of numbers and returns the sum of all its elements.
function sumArray(arr) {
  // Your code here
}

test(sumArray, [[1, 2, 3, 4]], 10, "sumArray([1, 2, 3, 4]) should return");

// EASY 2: Find the Maximum Value
// Write a function that returns the largest number in a given array.
function maxInArray(arr) {
  // Your code here
}

test(maxInArray, [[5, 3, 9, 1]], 9, "maxInArray([5, 3, 9, 1]) should return");

// MEDIUM 1: Remove Duplicates
// Write a function that returns a new array with all duplicate elements removed (preserving the original order).
function removeDuplicates(arr) {
  // Your code here
}

test(
  removeDuplicates,
  [[1, 2, 2, 3, 4, 4, 5]],
  [1, 2, 3, 4, 5],
  "removeDuplicates([1,2,2,3,4,4,5]) should return"
);

// MEDIUM 2: Rotate Array
// Write a function that rotates the array to the right by k steps.
function rotateArray(arr, k) {
  // Your code here
}

test(
  rotateArray,
  [[1, 2, 3, 4, 5], 2],
  [4, 5, 1, 2, 3],
  "rotateArray([1,2,3,4,5],2) should return"
);

// HARD 1: Subarray with Given Sum
// Write a function that returns true if there exists a contiguous subarray whose sum is equal to target.
function subarraySum(arr, target) {
  // Your code here
}

test(
  subarraySum,
  [[1, 4, 20, 3, 10, 5], 33],
  true,
  "subarraySum([1,4,20,3,10,5],33) should return"
);
test(
  subarraySum,
  [[1, 4, 0, 0, 3, 10, 5], 7],
  true,
  "subarraySum([1,4,0,0,3,10,5],7) should return"
);
test(subarraySum, [[1, 4], 0], false, "subarraySum([1,4],0) should return");
test(subarraySum, [[1, 3, 2], 3], false, "subarraySum([1,4],0) should return");

// HARD 2: Longest Increasing Subsequence
// Write a function that returns the length of the longest strictly increasing subsequence in the array.
function longestIncreasingSubsequence(arr) {
  // Your code here
}

test(
  longestIncreasingSubsequence,
  [[10, 9, 2, 5, 3, 7, 101, 18]],
  4,
  "longestIncreasingSubsequence([10,9,2,5,3,7,101,18]) should return"
);
test(
  longestIncreasingSubsequence,
  [[1, 2, 3, 4, 5]],
  5,
  "longestIncreasingSubsequence([1,2,3,4,5]) should return"
);
test(
  longestIncreasingSubsequence,
  [[5, 4, 3, 2, 1]],
  1,
  "longestIncreasingSubsequence([5,4,3,2,1]) should return"
);
test(
  longestIncreasingSubsequence,
  [[2, 2, 2, 2, 2]],
  1,
  "longestIncreasingSubsequence([2,2,2,2,2]) should return"
);
test(
  longestIncreasingSubsequence,
  [[1, 3, 2, 4, 3, 5]],
  4,
  "longestIncreasingSubsequence([1,3,2,4,3,5]) should return"
);
test(
  longestIncreasingSubsequence,
  [[10]],
  1,
  "longestIncreasingSubsequence([10]) should return"
);
test(
  longestIncreasingSubsequence,
  [[]],
  0,
  "longestIncreasingSubsequence([]) should return"
);
test(
  longestIncreasingSubsequence,
  [[3, 10, 2, 1, 20]],
  3,
  "longestIncreasingSubsequence([3,10,2,1,20]) should return"
);
test(
  longestIncreasingSubsequence,
  [[50, 3, 10, 7, 40, 80]],
  4,
  "longestIncreasingSubsequence([50,3,10,7,40,80]) should return"
);
test(
  longestIncreasingSubsequence,
  [[3, 1, 2, 5, 4, 7]],
  4,
  "longestIncreasingSubsequence([3, 1, 2, 5, 4, 7]) should return"
);
test(
  longestIncreasingSubsequence,
  [[10, 22, 9, 33, 21, 50, 41, 60]],
  5,
  "longestIncreasingSubsequence([10,22,9,33,21,50,41,60]) should return"
);
