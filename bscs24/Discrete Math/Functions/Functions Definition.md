## Function

> A **function** is a rule that assigns *each input* exactly *one output*.

- Let $A$ and $B$ be *nonempty* [[Set Definitions#Set|sets]]. A **function** $f$ from $A$ to $B$, denoted by $f: A \to b$, is an assignment of exactly one [[Set Definitions#Element|element]] of $B$ to each [[Set Definitions#Element|element]] of $A$.
- We write $f(a) = b$ if $b$ is the unique [[Set Definitions#Element|element]] of $B$ assigned by the **function** $f$ to the [[Set Definitions#Element|element]] $a$ of $A$.
- **Functions** are sometimes also called *mappings* or *transformations*.

## Terminologies

### Image

> The **image** is the input of a *function*.

If $f(a) = b$, we say that $b$ is the **image** of $a$ and $a$ is the **preimage** of $b$.

### Domain

> The **domain** is the [[Set Definition#Set|set]] of all *inputs*. The **codomain** is the [[Set Definition#Set|set]] of all *allowable outputs*. 

If $f$ is a [[#Function|function]] from $A$ to $B$, we say that $A$ is the **domain** of $f$ and $B$ is the **co-domain** of $f$.

### Range

> The **domain** is the [[Set Definition#Set|set]] of all *inputs* that have *outputs*.

The **range** of $f$ is the [[Set Definitions#Set|set]] of all [[#Image|images]] of the [[Set Definitions#Element|elements]] of $A$.

## Uses

- They are used in the definition of [[Sequence Definition#Sequence|sequences]] and [[Sequence Strings|strings]].
- They are used to represent how long it takes a computer to solve problems of a given size.
- Recursive functions are used throughout computer science.

## Properties

- Two *functions* are **equal** when they have the same *domain*, same *codomain*, and same *mapping* of [[Set Definition#Element|elements]]. 
- A **different function** is obtained when either the *domain* or the *codomain* of a function is changed. 
- A **different function** is also obtained if the *mapping of elements* is changed.

## Examples

> [!Example]
> $f: \mathbb{Z} \to \mathbb{Z}$ defined by $f(n) = 3n$. The *domain* and *codomain* are both the set of integers. However, the *range* is only the set of integer multiples of 3. 

> [!Example]
> $g: \{ 1, 2, 3 \} \to \{ a, b, c \}$ defined by $g(1) = c, g(2) = a$ and $g(3) = a$. The *domain* is the set $\{ 1, 2, 3 \}$, the *codomain* is the set $\{ a, b, c \}$ and the *range* is the set $\{ a, c \}$. Note that $g(2)$ and $g(3)$ are the same [[Set Definition#Element|element]] of the *codomain*. This is okay since each [[Set Definition#Element|element]] in the domain still has only **one output**.

> [!Example]
> $f: \mathbb{N} \to \mathbb{N}$ defined by $f(n) = \frac{n}{2}$. The reason this is **not** a *function* is because not every *input* has an *output*. Where does $f$ send $3$? The rule says that $f(3) = \frac{3}{2}$, but $\frac{3}{2}$ is not an [[Set Definition#Element|element]] of the *codomain*.