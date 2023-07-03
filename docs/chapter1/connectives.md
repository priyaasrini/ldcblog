# Building blocks of linear logic

The last episode ended with a brief introduction to basic building blocks of linear logic, in particular, the ones that would allow creating compound statements from the smaller ones. In this episode, we shall have a closer look at them.

## Negation 

Negation allows considering the *not form* of a statement, hence in a sense, the dual of a statement.  However, the *not form* does not mean the exact opposite. The negation of a statement such as *to spend a dollar* will be *to receive a dollar*. (In general, it is not *not spending a dollar*). 

The symbol for negation is $\perp$ (pronounced *perp*).

To receive a dollar and to spend the received dollar, for all practical purposes, is the same as spending a dollar, hence, $(p^\perp)^\perp = p$. This is true for any resource in linear logic: double negation = no negation. This property, in technical terms, makes negation an **involution**. 

## Multiplicatives

The connectives $\otimes$, $1$, $\parr$, and $\bot$ are called the **multiplicatives**. Linearly distributive categories are basically about these multiplicatives. 

A statement, $A \otimes B$ (read as A *tensor* B) 
allows the resources $A$ and $B$ to be available at the same time.  For example, consider the statement $r:$ an orange. Then, $p \Rightarrow q \otimes r$ refers to the fact that 
spending a dollar buys an apple and an orange at the same time. The formula $1$ is the multiplicative truth, hence, $A \otimes 1 = 1 \otimes A = A$ (multiplying $1$ with a number gives back the number). 

The connective, $\parr$, read as {\em par}, is the multiplicative disjunction and is dual to tensor. This means that,
$(A^\perp \otimes B^\perp)^\perp = A \parr B$. Smililary, $1$ and $\top$ are duals to one another $(1^\perp = \top)$.

## Exponentials

Exponentials allow for non-linear operations within the logic. Instead of one resource becoming the other exponentials allow resources to reproduce (without any check) and to disappear!  

An **infinte storage** of apples is written as $!$:apple: (pronounced *bang* an apple, or *of course* an apple). From this storage, one can extract an apples any number of times. The storage of a resource itself can produce another copy of itself or can vanish in thin air! In category theory, these are modelled using coalgebra modalities (TODO: put link here) and have deep connection to differential categories (TODO: put link here).

There is another exponential modality, who is an **(ever) hungry pacman**. A $?$:apple: (pronounced *whimper* an apple, or *why not* an apple) is an ever-hungry hungry pacman for apple resource. Two such hungry pacmans can combine into one or can produce themselves out of thin air. 

Negation puts the infinite storage and the hungry pacman on the same pedestal: negating a hungry pacman for apples gives an infinite storage of negated apples (whatever that means!). 

$$ (?p)^\perp = !(p^\perp) $$

Fun fact: The term *whimper* was coined by [Richard (Rick) Blute](https://richardblute.ca/) from University of Ottawa, one of the pioneers of linearly distributive categories. 


## Additives

I am going to skip these for now since they would not be reappearing on the stage in the immediate future.

In the next episode, I shall show how linearly distributive to monoidal categories are simply multiplicative fragment of linear logic presented in the language of category theory :tada: