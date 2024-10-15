---
layout: article.njk
title: "Generated Collections"
author: Chester Jankowski
date: "2024-10-15"
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

**Definition: a generated collection is formed by repeatedly adding a single interval, which we term the "generator."**

Let's begin with a really simple example, and use the generator of 1 semitone. We will start with a single pitch class {0}. In the first iteration, we add an interval of 1, which gives us the set {0,1}. In the second iteration, we add another interval of 1, and now have the set {0,1,2}. If we continue iterating, after eleven steps, we will have the set {0,1,2,3,4,5,6,7,8,9,10,11}, which we can think of as the chromatic scale, or in pc set theory what is often termed the "aggregate". Since we are doing math in mod 12, we can keep iterating, but we won't add any new pitch classes, the set will just keep cycling through the same integers; this is sometimes termed a "cyclic set".

Now let's try using a generator of 2 semitones. After five iterations, we will have the set {0,2,4,6,8,10}, which is the wholetone scale.

A generator of 3 semitones gives us the set {0,3,6,9}, which is a diminished 7th chord.

A generator of 4 semitones gives us the set {0,4,8}, which is an augmented triad.

The generator of 5 semitones is another special case, so let's look at all the iterations of this one:

{0}<br>
{0,5}<br>
{0,5,10}<br>
{0,5,10,3}<br>
{0,5,10,3,8}<br>
{0,5,10,3,8,1}<br>
{0,5,10,3,8,1,6}<br>
{0,5,10,3,8,1,6,11}<br>
{0,5,10,3,8,1,6,11,4}<br>
{0,5,10,3,8,1,6,11,4,9}<br>
{0,5,10,3,8,1,6,11,4,9,2}<br>
{0,5,10,3,8,1,6,11,4,9,2,7}<br>

Here are the same sets with the pitch classes arranged in ascending integer order:

{0}<br>
{0,5}<br>
{0,5,10}<br>
{0,3,5,10}<br>
{0,3,5,8,10}<br>
{0,1,3,5,8,10}<br>
{0,1,3,5,6,8,10}<br>
{0,1,3,5,6,8,10,11}<br>
{0,1,3,4,5,6,8,10,11}<br>
{0,1,3,4,5,6,8,9,10,11}<br>
{0,1,2,3,4,5,6,8,9,10,11}<br>
{0,1,2,3,4,5,6,7,8,9,10,11}<br>

Looking at these sets closely, we see that they are some of the most important sets used in jazz. The set with cardinality 5, {0,3,5,8,10}, is the pentatonic scale. The set with cardinality 6, {0,1,3,5,8,10}, is the hexatonic scale. The set with cardinality 7, {0,1,3,5,6,8,10}, is the diatonic collection. It is also worth noting that this set is the first iteration which contains the interval of a tritone. The set with cardinality 9, {0,1,3,4,5,6,8,10,11}, is the bebop scale. And finally, the set with cardinality 12, {0,1,2,3,4,5,6,7,8,9,10,11}, is the chromatic scale, or aggregate.

Now let's go on the next generator, an interval of 6 semitones. {0,6}. Well, that does seem a bit anticlimactic, after the fecundity of generator 5, does it not?

For the generator of 7 semitones, I will once again list all iterations:

{0}<br>
{0,7}<br>
{0,7,2}<br>
{0,7,2,9}<br>
{0,7,2,9,4}<br>
{0,7,2,9,4,11}<br>
{0,7,2,9,4,11,6}<br>
{0,7,2,9,4,11,6,1}<br>
{0,7,2,9,4,11,6,1,8}<br>
{0,7,2,9,4,11,6,1,8,3}<br>
{0,7,2,9,4,11,6,1,8,3,10}<br>
{0,7,2,9,4,11,6,1,8,3,10,5}<br>

And once again, in ascending pitch class integer order:

{0}<br>
{0,7}<br>
{0,2,7}<br>
{0,2,7,9}<br>
{0,2,4,7,9}<br>
{0,2,4,7,9,11}<br>
{0,2,4,6,7,9,11}<br>
{0,1,2,4,6,7,9,11}<br>
{0,1,2,4,6,7,8,9,11}<br>
{0,1,2,3,4,6,7,8,9,11}<br>
{0,1,2,3,4,6,7,8,9,10,11}<br>
{0,1,2,3,4,5,6,7,8,9,10,11}<br>

Let's compare the cardinality 7 sets from the 5 and 7 semitone generators:

{0,5,10,3,8,1,6}<br>
{0,7,2,9,4,11,6}<br>

We can see that the two sets are inversionally related. So, for example, instead of using a generator of 7 semitones for the second set, we could use a generator of -5 semitones and get the same result. Starting with {0}, we add an interval of -5, which gives us, mod 12, {0,7}. Adding another interval of -5, we get {0,7,2}, and so forth.

Since the generator 5 and 7 sets are inversionally related, sets of the same cardinality are equivalent, so the set with cardinality 5 is the pentatonic scale, cardinality 6 is the hexatonic scale, cardinality 7 is the diatonic collection, cardinality 8 is the bebop scale, and cardinality 12 is the chromatic scale, or aggregate.

Let's now look at the generator of 8 semitones, which gives us the set {0,8,4}. We can see that this is the inversion of the generator of 4 semitones. We can make a generalization that two generators which sum to twelve will generate equivalent, but inversionally-related collections, i.e.: generators 1 and 11, generators 2 and 10, 3 and 9, 4 and 8, 5 and 7. Generator 6 sums to 12 with itself, so it has no inversion partner.

What other generalizations can we make? Well, perhaps the most important one is that only generators which are coprime with 12 will generate the entire chromatic scale or aggregate. There are only four such generators: 1 and its inversion partner 11, 5 and its inversion partner 7.

Let's extend that a bit further by looking at the Greatest Common Divisor of each generator and 12. For any generator a, a collection of 12/gcd(a,12) members will be created, and the number of unique collections within the aggregate will be gcd(a,12).

Generator 1: gcd(1,12)=1 unique collection of 12/1=12 members<br>
Generator 2: gcd(2,12)=2 unique collection of 12/2=6 members<br>
Generator 3: gcd(3,12)=3 unique collection of 12/3=4 members<br>
Generator 4: gcd(4,12)=4 unique collection of 12/3=3 members<br>
Generator 5: gcd(5,12)=1 unique collection of 12/1=12 members<br>
Generator 6: gcd(6,12)=6 unique collection of 12/6=2 members<br>
Generator 7: gcd(7,12)=1 unique collection of 12/1=12 members<br>
Generator 8: gcd(8,12)=4 unique collection of 12/4=3 members<br>
Generator 9: gcd(9,12)=3 unique collection of 12/3=4 members<br>
Generator 10: gcd(10,12)=2 unique collection of 12/2=6 members<br>
Generator 11: gcd(11,12)=1 unique collection of 12/1=12 members<br>

## The symmetry of these collections

In addition to looking at the pitch class sets that result from these generators, it is also helpful to think of them as interval sets. For example, let's look at generator 5, cardinality 5 though 8:

Cardinality 5, pentatonic: {5-5-5-5-5}<br>
Cardinality 6, hexatonic: {5-5-5-5-5-5}<br>
Cardinality 7, diatonic: {5-5-5-5-5-5-5}<br>
Cardinality 8, bebop: {5-5-5-5-5-5-5-5}<br>

One thing that becomes instantly clear is that each of these sets is symmetrical. The pentatonic collection has an axis of symmetry on its 3rd member, the hexatonic collection has an axis of symmetry between its 3rd and 4th members, the diatonic collection has an axis of symmetry on its 4th member (which corresponds to the dorian mode in scale form), and the bebop scale has an axis of symmetry between its 4th and 5th members.

## Subset relations

The other aspects which become instantly obvious when looking at these generated collections through their interval sets are their mutual subset and superset relations. Let's look at the interval sets again, this time without labels:

{5-5-5-5-5}<br>
{5-5-5-5-5-5}<br>
{5-5-5-5-5-5-5}<br>
{5-5-5-5-5-5-5-5}<br>

You can now see very clearly that the pentatonic is a subset of the hexatonic, which is a subset of the diatonic, which is a subset of the bebop scale. It also makes is easy to see that the hexatonic contains two pentatonic sets. To see this, align the first member of the pentatonic with the first member of the hexatonic; that is the first subset. Now align the first member of the pentatonic with the second member of the hexatonic; that is the second subset. Likewise, the diatonic contains three pentatonic sets, and the bebop scale contains four pentatonic sets.

## Key takeaways

The following sets commonly used in jazz are each generated by repeating a single interval: the chromatic scale, the wholetone scale, the diminished 7th chord, the augmented triad, the pentatonic scale, the hexatonic scale, the diatonic collection, including all modes, the bebop scale.

Each of the above listed sets is symmetrical.

The pentatonic is a subset of the hexatonic, which is a subset of the diatonic, which is a subset of the bebop scale.