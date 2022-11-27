# Time Complexity
O(N*2) => worst case
O(NlogN) => Avg case ( almost all the time this is the case )

# Space Complexity
O(logN)

# Points
- Most efficient algorithm (.sort() function of most languages)
- Recursive
- Divide and conquer (But original array is altered)

# Steps
1. Pick a pivot => Element placed in the correct spot of the final sorted array.
2. Pivot [P] = median(first + mid + last);
3. Move Pivot to the end of the array.
4. Find the below items compared to the pivot.
  - largerItemFromLeft -> A[l] //first item
  - smallerItemFromRight -> A[s] //first item
5. swap (l, s) IFF (l < s) // Remember this trick {indices}
6. Repeat steps 4, 5 until l > s
7. swap (p, l)
7. Recrusively do this for larger and smaller partitions
8. Exit recursion when partition has only 1 element.

Quick Explaination Video - https://youtu.be/Hoixgm4-P4M
 Full explanation - https://www.youtube.com/watch?v=COk73cpQbFQ


