## Double Summation

Example of **double summations** arise in the analysis of nested loops in computed programs.

> [!Example]
> $$\sum_{i=1}^{4}\sum_{j=1}^{3}ij$$

To evaluate the **double sum**, first expand the *inner* [[Summation Definition#Summation|summation]] and then the *outer* [[Summation Definition#Summation|summation]].

> [!Example]
> $$
> \begin{aligned}
> & \sum_{i=1}^{4}\sum_{j=1}^{3}ij = \sum_{i=1}^{4}(i + 2i + 3i) \\
> & \phantom{\sum_{i=1}^{4}\sum_{j=1}^{3}ij} = \sum_{i=1}^{4}6i \\
> & \phantom{\sum_{i=1}^{4}\sum_{j=1}^{3}ij} = 6 + 12 + 18 + 24 = 60
> \end{aligned}
> $$
