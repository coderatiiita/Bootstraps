Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array of size n, i.e., both stacks should use the same array for storing elements. Following functions must be supported by twoStacks.
push1(int x) –> pushes x to first stack
push2(int x) –> pushes x to second stack

pop1() –> pops an element from first stack and return the popped element
pop2() –> pops an element from second stack and return the popped element

Implementation of twoStack should be space efficient.

# Method 1 (Divide the space in two halves)

A simple way to implement two stacks is to divide the array in two halves and assign the half half space to two stacks, i.e., use arr[0] to arr[n/2] for stack1, and arr[(n/2) + 1] to arr[n-1] for stack2 where arr[] is the array to be used to implement two stacks and size of array be n.

Complexity Analysis:

Time Complexity:
Push operation : O(1)
Pop operation : O(1)
Auxiliary Space: O(N).
Use of array to implement stack so. It is not the space-optimised method as explained above.

# Method 2 (A space efficient implementation)

This method efficiently utilizes the available space. It doesn’t cause an overflow if there is space available in arr[]. The idea is to start two stacks from two extreme corners of arr[]. stack1 starts from the leftmost element, the first element in stack1 is pushed at index 0. The stack2 starts from the rightmost corner, the first element in stack2 is pushed at index (n-1). Both stacks grow (or shrink) in opposite direction. To check for overflow, all we need to check is for space between top elements of both stacks. This check is highlighted in the below code.

Complexity Analysis:

Time Complexity:
Push operation : O(1)
Pop operation : O(1)
Auxiliary Space :O(N).
