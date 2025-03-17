## Surjection

> When not all [[Set Definitions#Element|elements]] in the [[Function Definitions#Domain|codomain]] are mapped to by the [[Function Definitions#Domain|domain]], we say the function is *onto* or **surjective**.

Let $f: A \to B$, then $f$ is **surjective** if and only if $\forall b \in B, \: \exists a \in A$ such that $f(a) = b$.

## Injection

> When no two [[Set Definitions#Element|elements]] in the [[Function Definitions#Domain|domain]] map to the same [[Set Definitions#Element|element]] in the [[Function Definitions#Domain|codomain]], we say the function is *one-to-one* or **injective**.

Let $f: A \to B$, then $f$ is **injective** if and only if $\forall a_1, a_2 \in A, \: f(a_1) = f(a_2) \Rightarrow a_1 = a_2$. Conversely, if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$.

## Bijection

> A function that is both *injective* and *surjective* is called a **bijection**.

Let $f: A \to B$, then $f$ is a **bijection** if and only if $f$ is both **injective** and **surjective**.

## Examples

> [!Question]
> Determine if each *function* is **injective**, **surjective**, or **bijective**.
> 
> 1. $f: \mathbb{Z} \to \mathbb{Z}$ defined by $f(n) = 3n$.
> > [!Todo]- Answer
> > 
> > $f$ is not *surjective* because the [[Function Definitions#Range|range]] is only the [[Set Definitions#Set|set]] of integer multiples of 3, but it is **injective** because no two integers map to the same integer multiple of 3.
> 
> 2. $g: \{ 1, 2, 3 \} \to \{ a, b, c \}$ defined by $g(1) = c, \: g(2) = a$ and $g(3) = a$.
> > [!Todo]- Answer
> > 
> > $g$ is not *injective* because $g(2)$ and $g(3)$ are the same [[Set Definitions#Element|element]] of the [[Function Definitions#Codomain|codomain]]. This is okay since each [[Set Definitions#Element|element]] in the [[Function Definitions#Domain|domain]] still has only **one output**. It is also not *surjective* because not all [[Set Definitions#Element|elements]] in the [[Function Definitions#Codomain|codomain]] are mapped to by the [[Function Definitions#Domain|domain]].
> 
> 3. $h: \{ 1, 2, 3 \} \to \{ a, b, c \}$ defined by $h(1) = a, \: h(2) = b$ and $h(3) = c$.
> > [!Todo]- Answer
> > 
> > $h$ is a **bijection** because it is both *injective* and *surjective*. No two [[Set Definitions#Element|elements]] in the [[Function Definitions#Domain|domain]] map to the same [[Set Definitions#Element|element]] in the [[Function Definitions#Domain|codomain]] and every [[Set Definitions#Element|element]] in the [[Function Definitions#Codomain|codomain]] is mapped to by the [[Function Definitions#Domain|domain]].

