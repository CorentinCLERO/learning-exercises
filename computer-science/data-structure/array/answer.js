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
  // Implementation 1
  // let value = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     value += arr[i]
  // }
  // return value

  // Implementation 2
  // return arr.length === 1 ? arr[0] : arr.pop() + sumArray(arr)
  // Same as above
  // if (arr.length === 1 ) return arr[0]
  // return arr.pop() + sumArray(arr)

  // Implementation 3
  return arr.reduce((acc, val) => acc + val, 0);
}

test(sumArray, [[1, 2, 3, 4]], 10, "sumArray([1, 2, 3, 4]) should return");

// EASY 2: Find the Maximum Value
// Write a function that returns the largest number in a given array.
function maxInArray(arr) {
  let maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (maxValue < arr[i]) maxValue = arr[i];
  }
  return maxValue;

  // Other implementation
  // return Math.max(...arr);
}

test(maxInArray, [[5, 3, 9, 1]], 9, "maxInArray([5, 3, 9, 1]) should return");

// MEDIUM 1: Remove Duplicates
// Write a function that returns a new array with all duplicate elements removed (preserving the original order).
function removeDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }
  return newArr;

  // Other implementation
  // return Array.from(new Set(arr));
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
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let newIndex = i + k;
    if (newIndex >= arr.length) newIndex -= arr.length;
    newArr[newIndex] = arr[i];
  }
  return newArr;

  // Other implementation
  // const n = arr.length;
  // k = k % n;
  // return arr.slice(-k).concat(arr.slice(0, n - k));
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
  // Wrong, detect not contiguous subarray
  // for (let k = 0; k < arr.length; k++) {
  //   let value = arr[k];
  //   for (let i = k + 1; i < arr.length && value < target; i++) {
  //     for (let j = i; j < arr.length && value < target; j++) {
  //       value += arr[j];
  //       if (value === target) return true;
  //     }
  //   }
  // }
  // return false;

  // Other implementation
  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      if (sum === target) return true;
    }
  }
  return false;
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
  // Too complex
  // if (arr.length === 0) return 0;
  // let maxIncreasingValue = 1;
  // for (let k = 0; k < arr.length; k++) {
  //   let increasingValue = 1;
  //   let value = arr[k];
  //   for (let i = k + 1; i < arr.length; i++) {
  //     for (let j = i; j < arr.length; j++) {
  //       if (arr[j] > value) {
  //         value = arr[j];
  //         increasingValue++;
  //       }
  //     }
  //     if (increasingValue > maxIncreasingValue)
  //       maxIncreasingValue = increasingValue;
  //     increasingValue = 1;
  //     value = arr[k];
  //   }
  //   value = arr[k];
  //   increasingValue = 1;
  // }
  // return maxIncreasingValue;

  // Other implementation
  if (arr.length === 0) return 0;
  const dp = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
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
