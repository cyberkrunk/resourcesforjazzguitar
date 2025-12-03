---
layout: layouts/article.njk
title: "Visualizing the Diatonic Ic Vector"
author: Chester Jankowski
date: "2024-05-26"
categories:
    - "music theory"
tags:
    - post
    - diatonic
    - pc set theory
    - "quartal"
    - "ic vector"
draft: "true"
permalink: "/visualizing-diatonic-ic-vector/"
description: "The diatonic collection has the deep scale property: each element in its ic vector is unique. By looking at the collection as a 'stack of fourths,' we can easily visualize how and why each ic is unique."
---

The interval class vector is a convenient way to represent the total intervallic content of a given pitch class set. One of the interesting properties of the diatonic collection is that each element in its interval class vector is unique. It is instructive to examine just how the various intervals are represented: perfect fourth (ic 5): 6, major second (ic 2): 5, minor third (ic 3): 4, major third (ic 4): 3, minor second (ic 2): 2, tritone (ic 6): 1. Making a few quick observations, the diatonic collection has more perfect fourths than anything else, more minor thirds than major thirds, and of course, (hopefully this is something we all learned very early on) only one tritone.

In order to visualize how this particular ic vector works, one approach might be to write out the diatonic collection as a scale or mode, and then label each interval. A much better way to visualize this ic vector is to write out the diatonic collection as a series of ic 5, or "stacked fourths." In this way, we can see exactly how and why each ic in the vector is unique.

## Review: Pitch Class, Interval Class

Let's begin with some review. A pitch class, which we can shorten to 'pc', represents a pitch without regard for octave or enharmonic spelling, so for example, we can write C1, B#2, and Dbb3 all as the single pitch class {0}. We could write out the complete diatonic collection "In C" as follows: {0, 2, 4, 5, 7, 9, 11}.

Similarly, an interval class, or 'ic', is the smallest distance, in semitones, between two pitch classes. Let's take the interval between C1 and G1. In pc terms, that would be {0, 7}. So clearly, the distance in semitones is 7-0=7, right? Yes, but there is an even smaller distance if instead of climbing down from 7 to 0, you climb up to 12, which is also equivalent to 0. So the smallest distance is 12-7=5. Remember, though, there is not really an 'up' or 'down' when comparing pitch classes. A better way to visualize this is with a circle diagram.

<figure><img class="img-small" src="images/circle-diagram-c-g-hd.png" alt="circle diagram" max-width="25%"><figcaption>Ex. 1</figcaption></figure>

In the circle diagram Ex. 1, we have C at 12 o'clock and G at 7 o'clock. Counting clockwise, it is 7 steps from C to G, but counting counter-clockwise, it is only 5 steps from C to G. Therefore, the interval class for C to G is {5}. Since there are a total of 12 steps on this circle, any interval of i steps in the clockwise direction will be an interval of 12-i steps in the counter-clockwise direction, and vice-versa. An interval of 6 is right in the middle, you can go in either direction with the same number of steps. Since an ic is always the smallest number of steps, there is no ic greater than 6.

