# Time Complexity
O(logN)

# Space Complexity
O(1) -> Same space for any number for the input n

# Points
1. Works only on sorted array.

# Steps:
1. Check the mid value
2. If mid value is small, search in the smaller part.
3. If mid value is big, search in the bigger part.
4. Repeat until a single value is obtained.