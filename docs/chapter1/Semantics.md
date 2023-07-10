<!-- title -->

# Categorical presentations of linear logic

Linear logic, being a logic of resources, emphasizes the structure of proofs rather than provability, that is, one is more 
interested to know how a statement can be proved, rather than, merely if the statement is provable. In linear logic we are interested in knowing how we can obtain a resource than merely knowing that such a resource exists.

Proofs in the sequent calculus of linear logic
often contain extraneous details due the sequential nature of the calculus. For example, in a sequent proof, in order to apply a set of rules 
to a sequent, one must choose an order for the application of the rules, even if the rules are independent (that is, the order in which 
the rules are applied does not affect the final result). 

In order to remove such unuseful information,  Girard [[1]](https://www.sciencedirect.com/science/article/pii/0304397587900454) introduced proof-nets to 
represent proofs of linear logic, specifically for the multiplicative fragment without units 
i.e., only the $\otimes$ and  $\oplus$. Proof-nets are basically formal diagrams built from s small number of basic components and comes with certain rules for manipulating the diagrams. Such diagrams are also known as circuit digrams. The study of algorithms to decide if a given circuit corresponds to a valid 
proof-net paved way to the study of the categorical presentations for multiplicative linear logic (MLL). 

An overview of the categorical proof theories for the multiplicative linear logic is provided in the table below: 

| Fragment                                              | Connectives |Categorical proof theory      |
| -----------------------------| ------------------------ | -------------- |
 Multiplicative linear logic (MLL) | $\otimes$, $\oplus$, $\top$, $\bot$ |Linearly distributive categories |
 MLL with negation |$\otimes$, $\oplus$, $\top$, $\bot$ and $*$ |*-autonomous categories |
compact MLL |   $\otimes = \oplus$, $\top = \bot$    | Monoidal categories      |
 compact MLL with negation  |   $\otimes = \oplus$, $\top = \bot$ and $*$   | Compact closed categories        |

The above listed semantics are sound and complete in the sense that there exists a one-to-one correspondence between the proof-nets of a fragment and the morphisms 
of its corresponding categorical setting.  The proof-nets provide a graphical calculus to these categorical settings, 
thereby, enabling a string diagrammatic presentation of the morphisms in these categories. 

The proof theory of compact MLL based on the graphical calculus 
of monoidal categories [[2]](https://arxiv.org/abs/0908.3347)   is used to derive an elegant description 
of quantum mechanics [[3]](https://www.cambridge.org/core/books/picturing-quantum-processes/1119568B3101F3A685BE832FEEC53E52), [[4]](https://academic.oup.com/book/43710).

In the [next episode](/chapter1/LinearlogicToQuantum.md), we shall have a quick look into the connection of linear logic to quantum mechanics! :tada:

**References**

[1]. Jean-Yves Girard. “Linear logic”. In: Theoretical computer science 50.1 (1987), pp. 1–
101.

[2]. Peter Selinger. “A survey of graphical languages for monoidal categories”. In: New Structures for Physics. Springer, 2010, pp. 289–355.

[3]. Bob Coecke and Aleks Kissinger. Picturing Quantum Processes: A First Course in Quantum Theory and Diagrammatic Reasoning. Cambridge University Press, 2017.

[4]. Chris Heunen and Vicary Jamie. Categories for Quantum Theory: An Introduction. Oxford University Press, Nov. 2019.
