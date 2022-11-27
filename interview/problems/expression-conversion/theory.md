# Infix expression:

The expression of the form a op b. When an operator is in-between every pair of operands.

ex.,
2+3
a+b*c (Use Bodmas rule to evaluate)

- Difficult for compilers to evaluate (needs multiple compiler scans)


# Prefix expression: (a.k.a polish notation)
The expression of the form a b op. When an operator is before for every pair of operands.

examples.,
2+3 => +23
p-q => -pq
a+b*c => +a(*bc) => +a*bc
a+b*c+d => a+(*bc)+d => (+a*bc)+d => ++a*bcd


# Postfix expression: (a.k.a reverse polish notation)
The expression of the form a b op. When an operator is after for every pair of operands.

examples.,
2+3 => 23+
p-q => pq-
a+b*c => a+(bc*) => abc*+
a+b*c+d => a+(bc*)+d => (abc*+)+d => abc*+d+


# NOTE
- Algorithm to evaluate postfix is easy & preferred.
- The postfix expressions can be evaluated easily using a stack.
