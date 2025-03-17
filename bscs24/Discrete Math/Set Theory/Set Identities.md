## Identity Laws

| Name                       | Identity                                                                                                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity / Domination Laws | $$\begin{aligned} A \cup \varnothing = A \qquad A \cap \varnothing = \varnothing \\ A \cup U = U \qquad A \cap U = A \end{aligned}$$                                                    |
| Commutative Laws           | $$ A \cap B = B \cap A \qquad A \cup B = B \cup A $$                                                                                                                                    |
| Associative Laws           | $$\begin{aligned} (A \cap B) \cap C = A \cap (B \cap C) \\ (A \cup B) \cup C = A \cup (B \cup C) \end{aligned}$$                                                                        |
| Distributive Laws          | $$\begin{aligned} A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \\ A \cap (B \cup C) = (A \cap B) \cup (A \cap C) \end{aligned}$$                                                      |
| Idempotent Laws            | $$ A \cap A = A \qquad A \cup A = A $$                                                                                                                                                  |
| Complementation Laws       | $$\begin{aligned} A \cap \bar{A} = \varnothing \qquad A \cup \bar{A} = U \\ \bar{U} = \varnothing \qquad\qquad\! \varnothing = \bar{U} \\ \overline{(\overline{A})} = A \end{aligned}$$ |
| De Morgan's Laws           | $$\begin{aligned} \overline{(A \cap B)} = \bar{A} \cup \bar{B} \\ \overline{(A \cup B)} = \bar{A} \cap \bar{B} \end{aligned}$$                                                          |
| Absorption Laws            | $$\begin{aligned} A \cup (A \cap B) = A \\ A \cap (A \cup B) = A \end{aligned}$$                                                                                                        |
| Set Difference Laws        | $$\begin{aligned} & A - B = A \cap (B \oplus A) \\ & A - B = A \cap \bar{B} \end{aligned}$$                                                                                             |
| Subset Union Laws          | $$ A \subseteq (A \cup B) \qquad B \subseteq (A \cup B) $$                                                                                                                              |
| Subset Intersection Laws   | $$ (A \cap B) \subseteq A \qquad (A \cap B) \subseteq B $$                                                                                                                              |
| Subset Transitive Law      | $$ (A \subseteq B) \land (B \subseteq C) \implies (A \subseteq C) $$                                                                                                                    |

## Proving Set Identities

We can use the [[#Identity Laws|identity laws table]] above to prove set identities.

> [!Example]
> Show $\overline{A \cup (B \cap C)} = (\bar{C} \cup \bar{B}) \cap \bar{A}$
> 
> $$\begin{aligned} \overline{A \cup (B \cap C)} = \bar{A} \cap \overline{(B \cap C)} \qquad\text{De Morgan's Law} \\ = \bar{A} \cap (\bar{B} \cup \bar{C}) \qquad\text{De Morgan's Law} \\ = (\bar{B} \cup \bar{C}) \cap \bar{A} \enspace\quad\text{Commutative Law} \\ = (\bar{C} \cup \bar{B}) \cap \bar{A} \enspace\quad\text{Commutative Law} \end{aligned}$$


## Proving With Membership Tables

Set identity can also be proved using membership tables, which is similar to propositional logic, but instead we use 1 to denote that an element is in a set and 0 if not.

> [!Example]
> Prove $(A \cup B) - B = A - B$
> 
> | $A$ | $B$ | $(A \cup B)$ | $(A \cup B) - B$ | $A - B$ |
> | --- | --- | ------------ | ---------------- | ------- |
> | 1   | 1   | 1            | 0                | 0       |
> | 1   | 0   | 1            | 1                | 1       |
> | 0   | 1   | 1            | 0                | 0       |
> | 0   | 0   | 0            | 0                | 0       |
> 
> Since the last two columns have equal values, the equation is true.
