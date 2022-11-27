# Time Complexity
O (n + k)
where,
n -> Number of items in the given array
k -> Range array length

# Space Complexity
O (n + k)

# Points
- Works well when the range of values in small in the array.
- Its a Stable sorting algorithm ( the positions of multiple occurances of a same value will not be disrupted )

# Steps
1. Create Range array of occurances of all the numbers
2. In range array, add each number to the right of it accumulatively.
  - Number at index 0 stays the same though.
3. Shift range array to right (1 cell)
  - Range array now contains starting indices of each number.
4. Now we need to place the numbers in their right index.
  - Create a new empty aray.
  - Go through each number, and place at the index.
  - As you do, keep incrementing the indeces of range array.

Explaination Video - https://youtu.be/OKd534EWcdk



