/*
Given an integer array nums sorted in non-decreasing order, remove the
duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages,
you must instead have the result be placed in the first part of the array nums.
More formally, if there are k elements after removing the duplicates,
then the first k elements of nums should hold the final result. It does
not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this
by modifying the input array in-place with O(1) extra memory.
*/


// Create a variable k that starts at the first index (to use as a pointer for comparison)
// Loop through the array and stop 1 before the end of the array (since the pointer always checks the next number)
// If the current value of the element is not equal to the next value, set the current element equal to the next one and increment k
// Return k

// k is acting like the pointer that tracks where you left off if the numbers were duplicates
// nums[k] gets replaced with only unique values, therefore when numbers at i and i+1 are the same,
//you move on through the loop and do nothing until they are not, then you replace k with the unique value (i+1) and
// increment k to the next spot until you reach the full length of the array (minus 1 since you are comparing i & i+1)

var removeDuplicates = function (nums) {
  let k = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i+1]) {
      nums[k] = nums[i+1];
      k++
    }
  }
  return k;
};

//Input: nums = [1,1,2]
//Output: 2, nums = [1, 2, _]
console.log(removeDuplicates([1, 1, 2]))

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
