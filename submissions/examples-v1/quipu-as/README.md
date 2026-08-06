# Quipu

A pure CSS/HTML Inca quipu: six pendant cords carrying real numbers, encoded in knots and read by height.

## What it shows

The Inca ran an empire of twelve million people across 4,000 km with no writing system. They had this instead.

A quipu is **base ten, positional, with a real zero**, and the position is *physical*. A knot's value comes from **how far down the cord it sits**, not from its shape:

- **Units** at the bottom, **tens** above it, **hundreds** above that, in fixed bands.
- A digit in the tens or hundreds band is **however many single knots you tie there**. Four knots in the tens band is 40.
- **Zero is an empty band.** Nothing is tied, and the gap is the zero. Reading a quipu means noticing an absence, which is exactly what positional notation requires and what Roman numerals never managed.
- **Units are different.** You cannot count single knots there without ambiguity, so the units digit is a **long knot** whose *number of turns* is the digit. Seven turns means seven.
- **One is a special case.** You cannot tie a long knot with a single turn, so 1 gets a **figure-of-eight knot**.

Roughly 1,400 quipus survive. The numerical ones we can read. Whether the others encode language is still open.

## How it is built

- **The numbers are really there.** The cords carry 307, 42, 90, 5, 128 and 60, laid out by the rules above rather than drawn to look knotty.
- **Verified by reading it back.** The browser check ignores how the component was generated and **decodes the quipu off the DOM using only the Inca rules**: bucket each knot by its height into hundreds/tens/units, count singles, read the long knot's turns, treat an empty band as zero. It reconstructs **307, 42, 90, 5, 128, 60** and compares against each cord's label. All six match.
- **That check found a real bug.** The first pass spaced knots 7px apart, so cord 3's nine tens-knots spilled 56px down into the units band and the ninth one became unreadable as a ten. It decoded as **80, not 90**. This is not a cosmetic problem: on a real quipu a knot in the wrong band is a wrong number. Tightening the spacing to 5px keeps nine knots inside a 54px band, and the readback now agrees.
- **The three knot types are drawn as three different things**: a single knot, a long knot whose `repeating-linear-gradient` turns you can actually count, and a figure-of-eight with its two visible loops.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the cords swaying. The numbers are static, so nothing is lost.

## Files

- `demo.html` - markup
- `style.css` - the whole component
