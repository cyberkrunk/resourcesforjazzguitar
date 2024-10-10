---
layout: article.njk
title: "Understanding Key Signatures"
author: Chester Jankowski
date: "2024-10-10"
categories:
    - "music theory"
tags:
    - post
    - diatonic
permalink: "/understanding-key-signatures/"
description: "Key signatures are a fundamental part of tonal music, and are typically taught in early stages of learning music theory. However, the manner in which they are normally taught obscures some important aspects of diatonic collections, which this article will seek to illuminate."
---

I suspect that when most people first learn about key signatures, they learn them by rote memorization. When first learning to read music on an instrument, a student will commonly begin with pieces in C major, with no sharps or flats in the key signature. Next, the student might begin playing pieces in G major, or F major, with one sharp and one flat, respectively. Gradually, the student will play pieces with more and more sharps or flats, memorizing which key signatures go with which keys.

At some point, the student will be introduced to a system usually called “the order of sharps and flats,” or something similar. Probably at this time, the student will also be shown the famous “circle of fifths” diagram. When I was first taught the order of sharps and flats, it was taught to me as something that just needed to be memorized, along with a handy mnemonic:

Order of sharps: F-C-G-D-A-E-B. “Father Charles Goes Down And Ends Battle.”<br>
Order of flats: B-E-A-D-G-C-F. “Battle Ends And Down Goes Charles’ Father.”

One very good thing about that particular mnemonic is that it can be read, and makes sense forward and backward. That illustrates a very important aspect of the order of sharps and flats: each is the retrograde of the other. On the other hand, there is one very bad thing about the mnemonic: it is not necessary, and it obscures the structure behind the two orders. Instead of a mnemonic, I will offer the following definition:

**Definition: The order of sharps is a series of six perfect fifths, starting on F; the order of flats is a series of six perfect fourths, starting on B.**

I would assert that a student should learn intervals well enough to be able to spell a series of prefect fifths or perfect fourths without the need of a mnemonic, much the same as a student should be able to spell any triad or seventh chord. If, instead of simply memorizing a mnemonic, we take a close look at the structure of the order of sharps and the order of flats, we can make some observations that lead to a deeper understanding.

**Observation 1: The order of sharps and the order of flats each include all seven notes of the diatonic collection[^1], in C.** While this may seem obvious, or a trivial observation, the surprising fact is that you can spell a diatonic collection simply by adding six successive perfect fifths, or perfect fourths, from any starting note. The term for this is a generated collection, where a single repeated interval acts as a generator to create a collection.

**Observation 2: The order of sharps and flats are both symmetrical, therefore the diatonic collection is symmetrical.** Since the same interval separates each two successive pitches, the intervallic structure is the same in both directions. It is also apparent that for the diatonic collection in C, the axis of symmetry is on the note D, which appears in the center of both the order of sharps and the order of flats. As a corollary to this, one can see that the Dorian mode is in fact symmetrical. 

**Observation 3: The order of sharps and flats are both bounded by a tritone. By definition, each diatonic collection contains only one tritone.** The order of sharps begins on the 4th scale degree and ends on the leading tone. The order of flats begins on the leading tone and ends on the 4th scale degree.

Now that we have some insight into the structure of the order of sharps and flats, we can explore exactly why the sharps and flats come in exactly the order that they do. In order to do that, let’s create a new definition for the diatonic collection:

**Definition: A diatonic collection consists of exactly six perfect fifths, or exactly six perfect fourths, and exactly one tritone.**

With our definition in place, we can begin experimenting with accidentals needed to transform one diatonic collection into another. Let’s start with the diatonic collection in C:

F-C-G-D-A-E-B

Let’s say that we want to add a single accidental, a sharp, to transform this into a different diatonic collection. We try C#, but now we have two tritones, thus failing our definition. Try G#, same result. Try D#, same result, and so forth. There is, in fact, only one note we can make sharp and still match our definition: F#. Now we have the following:

F#-C-G-D-A-E-B

That meets our definition perfectly, but the order of intervals is different, so let’s move the F# to the end of the chain. Now, once again, we have our tritone at the boundaries:

C-G-D-A-E-B-F#

If we again try adding a single sharp to the various notes, we again find that only one note can be made sharp, and still match our definition: C#. Once again, we move the C# to the end of the chain to keep the tritone at the boundaries. Now we have the following:

G-D-A-E-B-F#-C#

If we keep experimenting, it becomes clear that in order to match our definition, the only note we can alter is one of the boundary notes. Recall that the boundary notes are always a tritone. So the only procedure that works is to “fix” the tritone at the boundary into a perfect fifth, shift that note to the end of the chain, and thereby create a new tritone at the boundary. Continuing this process, these are the results:

D-A-E-B-F#-C#-G#<br>
A-E-B-F#-C#-G#-D#<br>
E-B-F#-C#-G#-D#-A#<br>
B-F#-C#-G#-D#-A#-E#<br>
F#-C#-G#-D#-A#-E#-B#<br>

As we can see, there is nothing arbitrary about this order. It is, in fact, the only order in which we can add one sharp at a time and create a new correct diatonic collection with each step. If instead, we transform each collection by adding a single flat each time, to process is similar. Each time, we add a flat to “fix” the boundary tritone into a perfect fourth, thus creating a single new boundary tritone:

B-E-A-D-G-C-F<br>
E-A-D-G-C-F-Bb<br>
A-D-G-C-F-Bb-Eb<br>
D-G-C-F-Bb-Eb-Ab<br>
G-C-F-Bb-Eb-Ab-Db<br>
C-F-Bb-Eb-Ab-Db-Gb<br>
F-Bb-Eb-Ab-Db-Gb-Cb<br>
Bb-Eb-Ab-Db-Gb-Cb-Fb<br>

Once again, this order of adding a single flat at a time to create a new diatonic collection is the only one that works. It is also important to reiterate that in each step, we are “fixing” the previous tritone and creating a new tritone at the boundary. Therefore, the last accidental in each order represents a member of the single tritone that belongs to that collection. In Observation 3 above, we noted that the order of sharps always ends on the leading tone, and the order of flats always ends on the 4th scale degree. Now we have an understanding of exactly why this is the case. We can also utilize the common advice to “go up a semitone from the last sharp, go down a perfect fourth from the last flat,” to find the name of the major key from its signature—but, once again, now we understand *why*.

*Notes*

[^1]:I'm using the term "collection" here rather than "scale" because we are thinking about all the possible relations between pitches, and not any one particular ordering.
