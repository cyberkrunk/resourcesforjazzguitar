---
layout: layouts/article.njk
title: "Generated Collections"
author: Chester Jankowski
date: 2024-10-15
categories:
    - "music theory"
tags:
    - post
    - pentatonic
    - hexatonic
    - diatonic
    - bebop scale
    - "pc set theory"
permalink: "/generated-collections/"
description: "A generated collection is formed by repeatedly adding a single interval, termed the generator. These collections include some of the most important collections used in jazz and tonal music generally."
---

## Generating the collections

In this article, we will borrow some concepts from abstract algebra and group theory to explore some aspects of the scales and chords we commonly use in jazz. Please do not be put off by the prospect of math, it will be kept at a very simple level. Looking at the collections in this way illuminates how they are constructed, how they are symmetrical, and it is especially helpful in understanding subset relations.

**Definition: a generated collection is formed by repeatedly adding a single interval, which we term the “generator.”**

Let’s begin with a really simple example, and use the generator of 1 semitone. For the rest of this article, generators will always be in semitones, and will be enclosed in angle brackets, like this: $\langle1\rangle\\.$ We will start with a single pitch class $(0)\\.$ In the first iteration, we add an interval of $\langle1\rangle\\,$ which gives us the set $(0,1)\\.$ In the second iteration, we add another interval of $\langle1\rangle\\,$ and now have the set $(0,1,2)\\.$ If we continue iterating, after eleven steps, we will have the set $(0,1,2,3,4,5,6,7,8,9,10,11)\\,$ which we can think of as the chromatic scale, or in pc set theory what is often termed the “aggregate.” Since we are doing math in mod $12\\,$ we can keep iterating, but we won’t add any new pitch classes, the set will just keep cycling through the same integers; this is sometimes termed a “cyclic set.”

Now let’s try using a generator of $\langle2\rangle$. After five iterations, we will have the set $(0,2,4,6,8,10)\\,$ which is the wholetone scale.

A generator of $\langle3\rangle$ gives us the set $(0,3,6,9)\\,$ which is a diminished 7th chord.

A generator of $\langle4\rangle$ gives us the set $(0,4,8)\\,$ which is an augmented triad.

The generator of $\langle5\rangle$ is another special case, so let’s look at all the iterations of this one:

$$\begin{align}
&(0)\\
&(0,5)\\
&(0,5,10)\\
&(0,5,10,3)\\
&(0,5,10,3,8)\\
&(0,5,10,3,8,1)\\
&(0,5,10,3,8,1,6)\\
&(0,5,10,3,8,1,6,11)\\
&(0,5,10,3,8,1,6,11,4)\\
&(0,5,10,3,8,1,6,11,4,9)\\
&(0,5,10,3,8,1,6,11,4,9,2)\\
&(0,5,10,3,8,1,6,11,4,9,2,7)\end{align}$$

Here are the same sets with the pitch classes arranged in ascending integer order:

$$\begin{align}
&(0)\\
&(0,5)\\
&(0,5,10)\\
&(0,3,5,10)\\
&(0,3,5,8,10)\\
&(0,1,3,5,8,10)\\
&(0,1,3,5,6,8,10)\\
&(0,1,3,5,6,8,10,11)\\
&(0,1,3,4,5,6,8,10,11)\\
&(0,1,3,4,5,6,8,9,10,11)\\
&(0,1,2,3,4,5,6,8,9,10,11)\\
&(0,1,2,3,4,5,6,7,8,9,10,11)\end{align}$$

Looking at these sets closely, we see that they are some of the most important sets used in jazz. The set with cardinality 5, $(0,3,5,8,10)\\,$ is the pentatonic scale. The set with cardinality 6, $(0,1,3,5,8,10)\\,$ is the hexatonic[^1] scale. The set with cardinality 7, $(0,1,3,5,6,8,10)\\,$ is the diatonic collection. It is also worth noting that this set is the first iteration which contains the interval of a tritone. The set with cardinality 9, $(0,1,3,4,5,6,8,10,11)\\,$ is the bebop scale. And finally, the set with cardinality 12, $(0,1,2,3,4,5,6,7,8,9,10,11)\\,$ is the chromatic scale, or aggregate.

Now let's go on the next generator, an interval of $\langle6\rangle\\,$ which gives us the set $(0,6)\\.$ Well, that does seem a bit anticlimactic, after the fecundity of generator $\langle5\rangle\\,$ does it not?

For the generator of $\langle7\rangle\\,$ I will once again list all iterations:

$$\begin{align}
&(0)\\
&(0,7)\\
&(0,7,2)\\
&(0,7,2,9)\\
&(0,7,2,9,4)\\
&(0,7,2,9,4,11)\\
&(0,7,2,9,4,11,6)\\
&(0,7,2,9,4,11,6,1)\\
&(0,7,2,9,4,11,6,1,8)\\
&(0,7,2,9,4,11,6,1,8,3)\\
&(0,7,2,9,4,11,6,1,8,3,10)\\
&(0,7,2,9,4,11,6,1,8,3,10,5)\end{align}$$

And once again, in ascending pitch class integer order:

$$\begin{align}
&(0)\\
&(0,7)\\
&(0,2,7)\\
&(0,2,7,9)\\
&(0,2,4,7,9)\\
&(0,2,4,7,9,11)\\
&(0,2,4,6,7,9,11)\\
&(0,1,2,4,6,7,9,11)\\
&(0,1,2,4,6,7,8,9,11)\\
&(0,1,2,3,4,6,7,8,9,11)\\
&(0,1,2,3,4,6,7,8,9,10,11)\\
&(0,1,2,3,4,5,6,7,8,9,10,11)\end{align}$$

Let’s compare the cardinality 7 sets from the $\langle5\rangle$ and $\langle7\rangle$ generators:

$$\begin{align}
&(0,5,10,3,8,1,6)\\
&(0,7,2,9,4,11,6)\end{align}$$

We can see that the two sets are inversionally related. So, for example, instead of using a generator of $\langle7\rangle$ for the second set, we could use a generator of $\langle-5\rangle$ and get the same result. Starting with $(0)\\,$ we add an interval of $\langle-5\rangle\\,$ which gives us, mod 12, $(0,7)\\.$ Adding another interval of $\langle-5\rangle\\,$ we get $(0,7,2)\\,$ and so forth.

Since the generator $\langle5\rangle$ and $\langle7\rangle$ sets are inversionally related, sets of the same cardinality are equivalent, so the set with cardinality 5 is the pentatonic scale, cardinality 6 is the hexatonic scale, cardinality 7 is the diatonic collection, cardinality 8 is the bebop scale, and cardinality 12 is the chromatic scale, or aggregate.

Let’s now look at the generator of $\langle8\rangle$, which gives us the set $(0,8,4)$. We can see that this is the inversion of the generator of $\langle4\rangle$. We can make a generalization that two generators which sum to twelve will generate equivalent, but inversionally-related collections, i.e.: generators $\langle1\rangle$ and $\langle11\rangle\\,$ generators $\langle2\rangle$ and $\langle10\rangle\\,$ $\langle3\rangle$ and $\langle9\rangle\\,$ $\langle4\rangle$ and $\langle8\rangle\\,$ $\langle5\rangle$ and $\langle7\rangle$. Generator $\langle6\rangle$ sums to 12 with itself, so it has no inversion partner.

What other generalizations can we make? Well, perhaps the most important one is that only generators which are co-prime with 12 will generate the entire chromatic scale or aggregate. There are only four such generators: $\langle1\rangle$ and its inversion partner $\langle11\rangle\\,$ $\langle5\rangle$ and its inversion partner $\langle7\rangle$.

Let’s extend that a bit further by looking at the Greatest Common Divisor of each generator and 12. For any generator $a$, a collection of $12/gcd(a,12)$ members will be created, and the number of unique collections within the aggregate will be $gcd(a,12)$.

| Generator | Unique collections | \# Members | Name |
| --- | ---| --- | --- |
| $\langle1\rangle$ | $gcd(1,12)=1$ | $12/1=12$ | Chromatic |
| $\langle2\rangle$ | $gcd(2,12)=2$ | $12/2=6$ | Wholetone |
| $\langle3\rangle$ | $gcd(3,12)=3$ | $12/3=4$ | Diminished 7th |
| $\langle4\rangle$ | $gcd(4,12)=4$ | $12/3=3$ | Augmented triad |
| $\langle5\rangle$ | $gcd(5,12)=1$ | $12/1=12$ | Chromatic |
| $\langle6\rangle$ | $gcd(6,12)=6$ | $12/6=2$ | Tritone |
| $\langle7\rangle$ | $gcd(7,12)=1$ | $12/1=12$ | Chromatic |
| $\langle8\rangle$ | $gcd(8,12)=4$ | $12/4=3$ | Augmented triad |
| $\langle9\rangle$ | $gcd(9,12)=3$ | $12/3=4$ | Diminished 7th |
| $\langle10\rangle$ | $gcd(10,12)=2$ | $12/2=6$ | Wholetone |
| $\langle11\rangle$ | $gcd(11,12)=1$ | $12/1=12$ | Chromatic |

## The symmetry of these collections

In addition to looking at the pitch class sets that result from these generators, it is also helpful to think of them as interval sets. For example, let’s look at generator 5, cardinality 5 though 8:

| Cardinality | Intervals | Name |
| --- | --- | --- |
| 5 | $\langle5-5-5-5\rangle$ | Pentatonic |
| 6 | $\langle5-5-5-5-5\rangle$ | Hexatonic |
| 7 | $\langle5-5-5-5-5-5\rangle$ | Diatonic |
| 8 | $\langle5-5-5-5-5-5-5\rangle$ | Bebop |

One thing that becomes instantly clear is that each of these sets is symmetrical. The pentatonic collection has an axis of symmetry on its 3rd member, the hexatonic collection has an axis of symmetry between its 3rd and 4th members, the diatonic collection has an axis of symmetry on its 4th member (which corresponds to the dorian mode in scale form), and the bebop scale has an axis of symmetry between its 4th and 5th members.

## Subset relations

The other aspects which become instantly obvious when looking at these generated collections through their interval sets are their mutual subset and superset relations. Let's look at the interval sets again, this time without labels:

$$\begin{align}
\langle5-5-&5-5\rangle\\
\langle5-5-5&-5-5\rangle\\
\langle5-5-5-&5-5-5\rangle\\
\langle5-5-5-5&-5-5-5\rangle\end{align}$$

You can now see very clearly that the pentatonic is a subset of the hexatonic, which is a subset of the diatonic, which is a subset of the bebop scale. It also makes is easy to see that the hexatonic contains two pentatonic sets. To see this, align the first member of the pentatonic with the first member of the hexatonic; that is the first subset. Now align the first member of the pentatonic with the second member of the hexatonic; that is the second subset. Likewise, the diatonic contains three pentatonic sets, and the bebop scale contains four pentatonic sets.

## Key takeaways

The following sets commonly used in jazz are each generated by repeating a single interval: the chromatic scale, the wholetone scale, the diminished 7th chord, the augmented triad, the pentatonic scale, the hexatonic scale, the diatonic collection, including all modes, the bebop scale.

Each of the above listed sets is symmetrical.

The pentatonic is a subset of the hexatonic, which is a subset of the diatonic, which is a subset of the bebop scale.

*Notes*

[^1]:I’m using the name hexatonic in the way it is most often used in a jazz context, that is, as a major scale without the seventh degree. Note that in academic music theory, the hexatonic collection more often refers to what is called in jazz the augmented scale.
