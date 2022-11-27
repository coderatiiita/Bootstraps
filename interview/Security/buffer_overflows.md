Buffer overflows (overruns) occur when an application does not properly manage access and inappropriately writes to memory.

- A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold or when a program attempts to put data in a memory area past a buffer. In this case, a buffer is a sequential section of memory allocated to contain anything from a character string to an array of integers. Writing outside the bounds of a block of allocated memory can corrupt data, crash the program, or cause the execution of malicious code.


Impact
A buffer overflow flaw arises when a program does not check the length of data assigned to a variable before storing it on this buffer.

- If we defined an array of char[500], the compiler will allocate 500 bytes on the stack.
- If the user input exceeds the length of the buffer, say 550 bytes, it may have some unintended impacts on the program. For example:
 - Corruption of other program data (data integrity compromised)
 - Corruption of program control structures (program may end up following unintended paths)
 - Termination of the program (application / system crash)
In the worst case, an attacker can also craft an input that can execute any arbitrary command on the host outside of the application. This can lead an attacker to take over the computer or worse - the entire network.