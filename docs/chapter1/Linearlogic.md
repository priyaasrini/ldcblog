<!-- title -->

# An introduction to linear logic

Linearly distributive categories are inspired by linear logic. 

Girard introduced linear logic in 1987 as a logic for resources manipulation [[1]](https://www.sciencedirect.com/science/article/pii/0304397587900454). Classical logic treats logical statements are truth values. Linear logic treats logical
statements as resources which cannot be duplicated or destroyed. What does that mean? 

For example, consider the following statements, $p$ and $q$:

$$
\begin{align*}
p &: \text{ a dollar } \\
q &: \text{ an apple } 
\end{align*}
$$

In linear logic, the compound statement 
"$p \Rightarrow q$" has the meaning that if a *dollar* :dollar: can be spent to buy an *apple* :apple:. This means that a person can either have *a dollar* or *an apple* at a given time but not both. 
The word "linear" refers to this resource sensitivity of the 
logic 

::: tip
*linear (adj.)*: progressing from one stage to another in a single series of steps; sequential
:::

In this sense, in linear logic, every statement is a resource. A statement is true in this logic if such a resource can be proven to exist. A proof consists of simply a series of resource transformations to produce the desired resource.

Now, every logical framework has a few basic building blocks from which complex 'truths' can be built. Imagine building a LEGO house using a few basic shapes. The first basic building block are simple statements (like $p:$a dollar and $q:$an apple). Then, we have four groups of building blocks called *connectives*. Having basic understanding of these connectives is important to see what linearly distributive categories are about! 

 I would explain the intiution behind these connectives in this episode, but we shall look at them in bit more detail in the [next episode](/chapter1/connectives.md).


- **Negation:** Allows one to *negate* a statement. The word negation does not mean the exact opposite but its used in a more subtle way in linear logic. For example, in linear logic, negation of "spending a dollar" is "receiving a dollar".

- **Multiplicatives:** Allows for considering two or more resources simultaneously. Saying something like, an apple **and** an orange.

- **Additives:** Allows for non-determinism. Using additives, one can represent a situation where a dollar would buy either an orange **or** an apple. 

- **Exponentials:** Allows for non-linearity in the logic. Using exponentials one can create  a storage of a resource which can be **duplicated** or **destroyed**, and from which the resource can be extracted any number of times. An infinte such storage of apples is written as $!$:apple:.

In the [next epsiode](/chapter1/connectives.md), I shall show what exactly these connectives are and how they relate to linearly distributive categories, the star of this series! :star: :tada:

**References**

[1]. Jean-Yves Girard. “Linear logic”. In: Theoretical computer science 50.1 (1987), pp. 1–
101.
