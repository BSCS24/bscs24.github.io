There are two kinds of formulas commonly used to describe [[Sequence Definition#Sequence|sequences]].

## Recursive

Refers to the previous terms to define the next term. The starting term(s) must be defined.

> [!Example]
> Find the recursive sequence formula for $3, 8, 13, 18, 23\ldots$
> 
> $$\begin{aligned} & \text{Let } {\large a}_1 = 3 \text{ (staring place)} \\ & \quad\enspace\: {\large a}_n = {\large a}_{n - 1} + 5 \text{ where } 2 \le n < \infty \end{aligned}$$

In programming, we can implement a **recursive sequence** using recursion.

> [!Todo] Code
> The *Fibonacci Sequence* is defined as $F(n) = F(n - 1) + F(n - 2)$ where $F(0) = 1$ and $F(1) = 1$. In Java, this implementation would look like:
> 
> ```java
> public static int fibonacci(int n) {
> 	if (n == 0)
> 		return 0;
> 	else if (n == 1)
> 		return 1;
> 	return fibonacci(n - 1) + fibonacci(n - 2);
> }
> ```

## Explicit

Describes a term using only its position number. This allows us to know exactly what value any particular term has.

> [!Example]
> Find the explicit sequence formula for $3, 8, 13, 18, 23\ldots$
> 
> $${\large a}_n = n^2 \text{ where } 1 \le n < \infty$$

