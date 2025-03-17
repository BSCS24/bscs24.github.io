
## Union

The [[Set Definitions#Set|set]] consisting of all [[Set Definitions#Element|elements]] that belongs to $A$ or $B$ or *both*.

> [!Info] Notation
> $A \cup B = \{ x \mid x \in A$ **or**  $x \in B \}$
> 
> ![[UnionVD.excalidraw.png]]
> 

> [!Example]
> $A = \{ a, b, c, d, e, f \} \quad B = \{ b, d, r, s\}$
>
> $\therefore A \cup B = \{ a, b, c, d, e, f, r, s \}$
> 
> ![[UnionVD2.excalidraw.png]]

## Intersection

Consists of all [[Set Definitions#Element|elements]] that belong to both $A$ and $B$, denoted by $A \cap B$.

> [!Info] Notation
> $A \cap B = \{ x \mid x \in A$ **and** $x \in B \}$
> 
> ![[IntesectionVD.excalidraw.png]]

> [!Example]
> $A = \{ a, b, c, d, e, f \} \quad B = \{ b, e, f, r, s \} \quad C = \{ a, t ,u , v \}$
> 
> $\therefore A \cap B = \{ b, e, f \} \quad A \cap C = \{ a \} \quad B \cap C = \varnothing$
> 
> ![[IntersectionVD2.excalidraw.png]]
> 
> $B$ and $C$ are called *disjoint sets*, which are [[Set Definitions#Set|sets]] that have no [[Set Definitions#Element|elements]] in common.

## Complement

[[Set Definitions#Set|Set]] of all [[Set Definitions#Element|elements]] that belong to $A$ but not to $B$, denoted by $A - B$ (or $A \setminus B$).

> [!Info] Notation
> $A - B = \{ x \:|\: x \in A$ **and** $x \notin B \}$
> 
> ![[__Media/__Excalidraw/Discrete Math Draw/Set Operations/ComplementVD.excalidraw.png]] 

> [!Example]
> $A = \{ a, b, c \} \qquad B = \{ b, c, d, e \}$
> 
> $\therefore A - B = \{ a \} \quad B - A = \{ d, e \}$
> 
> ![[ComplementVD2.excalidraw.png]]

If $U$ is a *universal set* containing $A$, then $U \setminus A$ (or $\bar{A}$) is called the **complement** of $A$.

> [!Info] Notation
> $\bar{A} = \{ x \:|\: x \notin A \}$
> 
> ![[ComplementVD3.excalidraw.png]]

> [!Example]
> $U = \mathbb{Z}$
> 
> $A = \{ x \mid x \text{ is an integer and } x \leq 4 \}$
> 
> $\therefore \bar{A} = \{ x \mid x \text{ is an integer and } x > 4 \}$

## Symmetric Difference

 [[Set Definitions#Set|Set]] of all [[Set Definitions#Element|elements]] that belong to $A$ or to $B$, but not to both $A$ and $B$, denoted by $A \oplus B$.

> [!Info] Notation
> $A \oplus B  \{ x \mid x (x \in A$ **and** $x \notin B)$ **or** $(x \in B$ **and** $x \notin A) \}$
> 
> ![[__Media/__Excalidraw/Discrete Math Draw/Set Operations/SymDiffVD.excalidraw.png]]

> [!Example]
> $A = \{ a, b, c, d \} \qquad B = \{ a, c, e, f, g \}$
> 
> $\therefore A \oplus B = \{ b, d, e, f, g \}$
> 
> ![[SymDiffVD2.excalidraw.png]]

