
## Empty Set

A [[Set Definitions#Set|set]] with no [[Set Definitions#Element|elements]]. Denoted by $\varnothing$.

## Singleton Set

A [[Set Definitions#Set|set]] with one [[Set Definitions#Element|element]]. A common error is to confuse the [[#Empty Set|empty set]] $\varnothing$ with the set $\{ \varnothing \}$, which is a singleton set.  $\varnothing \not= \{ \varnothing \}$.
## Subset

We say that $A$ is a **subset** of $B$ or that $A$ is contained in $B$ if every [[Set Definitions#Element|element]] of $A$ is also an [[Set Definitions#Element|element]] of $B$, in short if $x \in A$ then $x \in B$.

> [!Info] Notation
> $A \subseteq B$, if not, $A \not\subseteq B$
> 
> If $A$ is a **subset** of $B$, and $A \not= B$, we call $A$ the **proper subset** of $B$ and write it as $A \subset B$.

## Power Set

If $S$ is a [[Set Definitions#Set|set]], then the set of all [[#Subset|subsets]] of $S$ is called the **power set** of $S$, denoted by $\mathscr{P}(S)$.

> [!Example]
> 
> $A = \{ 1, 2, 3 \}$
> 
> $\therefore \mathscr{P}(A) = \{ \varnothing, \{1\}, \{2\}, \{3\}, \{1, 2\},  \{1, 3\}, \{2, 3\}, \{1, 2, 3\} \}$
> 
> $S = \{ \varnothing \}$
> 
> $\therefore \mathscr{P}(S) = \{ \varnothing, \{ \varnothing \} \}$

The [[Set Properties#Cardinality|cardinality]] of a power set is represented by the formula $|\mathscr{P}(X)| = 2^n$.

> [!Example]
> 
> $X = \{ y, z \}$
> 
> $|\mathscr{P}(X)| = 2^n = 2^2 = 4$
>
> $\mathscr{P}(X) =  \{ \varnothing, \{y\}, \{z\}, \{y, z\} \}$

