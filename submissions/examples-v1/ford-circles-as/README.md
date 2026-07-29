# Ford Circles

A pure CSS/HTML packing of circles, one for every fraction, that touch but never overlap.

## What it shows

On each rational `p/q` in lowest terms, place a circle centred at `(p/q, 1/(2q^2))` with radius `1/(2q^2)`. Every one of them rests on the number line. The larger the denominator, the smaller the circle.

Now the surprise. Take any two of them and work out how far apart they are against the sum of their radii:

```
d^2 - (r1 + r2)^2 = ((ps - qr)^2 - 1) / (qs)^2
```

Since `ps - qr` is a whole number, that right hand side is **never negative**. It is exactly zero when `|ps - qr| = 1`, and strictly positive otherwise. So:

- two circles are **tangent** precisely when their fractions are Farey neighbours,
- and otherwise they stand strictly clear,
- and **no two of them ever overlap**, out of infinitely many circles crowded onto one line.

The near misses are the good part. 1/3 and 1/2 are not adjacent in the Farey sequence of order 7, yet `|1*2 - 3*1| = 1`, so their circles do touch. Tangency is a property of the fractions themselves, not of where they happen to sit in a list.

Watch the construction and the Farey structure appears on its own. Each new circle drops into a gap between two that already touch, and lands exactly on the **mediant** `(p+r)/(q+s)` of the two fractions either side. It touches both at once, and leaves two smaller gaps behind for the next round. That is the Stern-Brocot tree, drawn in circles.

Lester Ford described these in 1938 as a way of seeing rational approximation: a circle's size is how well its fraction approximates nearby reals, which is why the tiny high denominator circles crowd in where the big simple ones leave room.

## How it is built

Nineteen circles, every reduced `p/q` with `q` up to 7, revealed one denominator at a time.

Everything below is measured on the **rendered** circles, reading each one's position and radius back out of the browser and its `p` and `q` from its data attributes.

- **The tangency identity holds on the actual pixels.** All **171 pairs** were checked against `((ps - qr)^2 - 1)/(qs)^2`: worst disagreement **1.08e-4** in units of the plot width, which is the sub-pixel rounding floor.
- **35 pairs tangent, 136 strictly separated, and 0 overlapping.** The tangent pairs close to within **9.4e-5**, and the nearest non-tangent pair still stands **2.45e-3** clear, a gap twenty five times bigger than the measurement noise, so the separation is genuinely resolved and not an artefact.
- **Every circle rests on the line**, its lowest point within **0.016 px** of it.
- **The reveal really is by denominator.** Counting visible circles at each phase gives **2, 3, 5, 7, 11, 13, 19**, which are exactly the sizes of the Farey sequences `F1` through `F7`.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` freezes the construction at whichever denominator it had reached, leaving a complete and correct packing.

## Files

- `demo.html` - markup
- `style.css` - the whole component
