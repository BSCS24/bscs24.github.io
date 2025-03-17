## General

> [!Note] Sets can have unrelated elements
> $S = \{ r, 17, \text{Raphael}, \text{Shenzhen} \}$

> [!Info] Repeated elements in the set are ignored
> $A = \{ 1, 3, 2, 3, 1 \}$
>
> is this same as
>
> $A = \{ 1, 2, 3 \}$

> [!Warning] The order of the elements is unaccounted for
> $A = \{ 1, 3, 2 \}$, $A = \{ 3, 2, 1 \}$,
>
> $A = \{ 3, 1, 2 \}$, $A = \{ 2, 1, 3 \}$
>
> all have the same representations

> [!Note] Sets may have other sets as members
> $A = \{ \varnothing, \{a\}, \{b\}, \{a, b\}\}$

## Membership

If $x$ is an [[Set Definitions#Element|element]] of the [[Set Definitions#Set|set]] $A$, we use the symbol $\in$ to denote **membership**.

> [!Example]
> $A = \{ 1, 3, 5, 7 \}$
> 
> $1 \in A \text{ and } 3 \in A \text{, but } 2 \notin A$

> [!Question]
> What are the members of set $B$?
> 
> $B = \{ x \mid x \in R \text{ and } x^2 = -1 \}$
> 
> > [!Todo]- Answer
> >
> > $\varnothing$, as there is no real number squared that would equal $-1$. They would have to be a complex number.

## Equality

Two [[Set Definitions#Set|sets]] $A$ and $B$ are ==equal== if they have the same [[Set Definitions#Element|elements]], that is *if and only if* for all $x \:(\: x \in A \text{ if and only if x } \in B \:)$. Thus, we write $A = B$.

> [!Example]
> $A = \{ 1, 2, 3 \}$
> 
> $B = \{ x \mid x \in Ζ^+ \text{ and } x^2 < 12 \}$
> 
> $\therefore A = B$

## Cardinality

A [[Set Definitions#Set|set]] is called *finite* if it has $n$ distinct [[Set Definitions#Element|elements]], where $n \in N$. $n$ is called the **cardinality** of $A$, denoted by $|A|$. An *infinite* set would have a cardinality of $n(A) = \infty$.

> [!Example]
> 
> $A = \{ 1, 2, 3, 4, 5 \} \quad \therefore |A| = 5$
> 
> $S = \{ x \mid x \text{ is a letter in the English alphabet } \} \quad \therefore |S| = 26$
> 
> $|\varnothing| = 0$

## Cartesian Product

The **cartesian product** of the [[Set Definitions#Set|sets]] $A_1, A_2, \ldots, A_n$ is the set of [[Set Definitions#Tuple|n-tuples]] $(a_1, a_2, \ldots, a_n)$ where $a_i$ belongs to ${A_i}$ for $i = 2, 2, \ldots, n$. It is denoted by the form: $A_1 \times A_2 \times \ldots A_n$.

> [!Example]
> $A = \{ 1, 2 \} \qquad B = \{ a, b, c \}$
> 
> $A \times B = \{ (1,a), (1,b), (1,c), (2,a), (2,b), (2,c) \}$ 
> 
> $B \times A = \{ (a,1), (a,2), (b,1), (b,2), (c,1), (c,2) \}$ 
> 
> $A \times A = \{ (1,1), (1,2), (2,1), (2,2) \}$ 
> 
> $B \times B = \{ (a,a), (a,b), (a,c), (b,a), (b,b), (b,c), (c,a), (c,b), (c,c) \}$

> [!Question]
> $A = \{ 0, 1 \} \quad B = \{ 1, 2 \} \quad C = \{ 0, 1, 2 \}$
> 
> Find $C \times B \times A$.
> 
> > [!Todo]- Answer
> > 
> > $$C \times B \times A = \{ \\ (0, 1, 0), (0, 1, 1), (0, 1, 2), \\ (0, 2, 0), (0, 2, 1), (0, 2, 2), \\ (1, 1, 0), (1, 1, 1), (1, 1, 2), \\ (1, 2, 0), (1, 2, 1), (1, 2, 2) \} $$

