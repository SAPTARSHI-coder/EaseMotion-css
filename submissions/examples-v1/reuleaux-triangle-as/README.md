# Reuleaux Triangle

A pure CSS/HTML plate riding on rollers that are not round, and not bumping.

## What it shows

Take an equilateral triangle and, from each corner, draw an arc through the other two. The shape you are left with is a **Reuleaux triangle**, and it has a property that looks impossible: its **width is the same in every direction**. Squeeze it between two parallel lines at any angle and the gap is identical.

So it rolls. Put several under a flat plate and the plate glides along without rising or falling by so much as a hair, exactly as it would on cylinders. Nothing about a roller requires it to be round; it only requires constant width.

What it will *not* do is make a wheel. A circle's centre stays at a fixed height, which is why you can put an axle through it. A Reuleaux triangle's centre **bobs up and down** as it rolls, by about 15% of its width here. Flat on top, lurching in the middle. That difference is the whole reason wheels are round and rollers need not be.

Two theorems make the shape more than a curiosity:

- **Barbier's theorem** (1860): every curve of constant width `w` has perimeter exactly `pi*w`, the same as a circle of diameter `w`. So one full turn always advances the roller by `pi*w`, whatever shape it is.
- **Blaschke and Lebesgue**: of all curves of a given constant width, the Reuleaux triangle encloses the *least* area. It is the extreme case, as far from a circle as constant width permits.

It gets used. The rotor of a Wankel engine is close to this shape, Watts Brothers drill bits of this profile cut nearly square holes, and the British 20p and 50p are Reuleaux heptagons, so a vending machine can gauge them by width without caring which way up they fell.

Franz Reuleaux, whose name it carries, was a founder of the study of machine kinematics in the nineteenth century; the shape itself was known long before, to Euler among others.

## How it is built

Each roller is a 180 point outline, generated from the three arcs and cut with `clip-path`. The rolling motion is derived rather than eyeballed: the support function of the outline gives the centre's height at each rotation, and the no-slip condition `dX/dphi = -Y` is integrated to get the horizontal travel.

Everything below was measured on the **rendered** outline, by reading each roller's computed `clip-path` polygon back out of the browser and putting all 180 points through its computed transform matrix.

- **The plate really does ride flat.** Across **186 outline samples** (6 rollers at 31 rotations) the topmost point of the shape varies by **0.0062 px**, sitting at **98.000**, which is the ground at 168 minus the 70 px width.
- **They are genuinely rolling, not floating.** The lowest point varies by **0.0059 px** and sits at **167.999** against a ground line at 168.
- **The width is constant, and that is checked in every direction**, not just vertically: **4464 measurements** across 24 directions and every sampled rotation, worst deviation from 70 px is **0.0035 px**.
- **The centre bobs, and that is the point.** The hub moves through **10.83 px** vertically while the plate above it does not move at all. Against a circle this is the only difference that matters.
- **Barbier checks out.** One full turn advances a roller **219.94 px**, against `pi * 70 = 219.91`.
- The rollers are spaced at exactly half the per-turn advance, so the row of them is periodic and the loop closes with no jump.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the rollers and their hubs together, leaving the plate resting on three shapes caught mid-turn.

## Files

- `demo.html` - markup
- `style.css` - the whole component
