# Daily Coding Problem

11th May, 2021

## Problem

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

## Solution 

The solution contains the following steps:
- remove non-positive integers from the list (Infinity, 0]
- for each item inside the given array:
  - use its absolute value i.e. -3 => 3
  - if it is less than the length of the array
    - if `arr[item - 1]` is positive, convert it to negative
- for each item inside the array 
  - if it is positive: 
    - return its `index+1` 
- return `lengthofarray + 1`



## Solution: Walkthrough

We remove non-positive values as they are not required for the application, then the array contains the positive values only. Now we can assume that the array can only miss the positive integers between `[1, n]` where `n` is the length of the modified array. We loop through the modified array, use the absolute value for each item in the lsit as the index if the absolute value is `[0,n)' (where `n` is the length of the array) we convert the value at index: `(absolute value + 1)` negative.

Now when we reach at the end of the array, we loop again through the array and if we find a value at index `i` to be a positive value, we return `i+1`.

If we don't have any positive value that means there is no gap inside the list and the required missing positive integer should be the `arr.length+1`

