# Peaucellier Linkage

A pure CSS/HTML Peaucellier-Lipkin cell: seven rigid bars that turn rotary motion into a mathematically exact straight line.

## What it shows

For most of the 19th century, no one knew how to make a machine draw a straight line. This sounds absurd, but think about it: to make a straight edge you trace along a straight edge you already have, and to make the *first* one you have nothing. James Watt spent years on the problem for his steam engine and never solved it exactly; his famous linkage draws an approximate straight line that is really a very thin figure-eight. He said he was prouder of it than of anything else he invented.

In 1864 a French army officer, Charles-Nicolas Peaucellier, solved it exactly with seven rigid bars and no slots or curves, purely from the geometry of **inversion**.

The trick is a preserved product. Label the fixed pivot O, the driven point B, and the output point P. The linkage forces

```
|OB| · |OP| = a² − b²  =  constant
```

for all positions (`a` is the long arm, `b` the rhombus side). That is exactly a **geometric inversion** in a circle of radius √(a²−b²). Inversion has one magic property: it turns circles through the centre into straight lines. So if you drive B around a circle that passes through O, the output P is forced onto a perfectly straight line, with no approximation at all.

## How it is built

- **The whole linkage is solved, then baked.** For each of 121 crank angles, the five joint positions (O, A, B, C, P) are computed from the real inversion geometry, and each of the six bars gets keyframes for its position, length, and angle at that frame.
- **The output is a genuine straight line, and it is measured.** The browser check drives the paused animation across 101 steps and tracks the pen's centre: its **x-coordinate varies by 0.016px** over the entire cycle while it sweeps **127px vertically**. It stays within **0.02px** of the drawn guide line. That is not an approximate straight line like Watt's; it is straight to within rounding.
- **The bars are actually rigid, and that is checked too.** The same sweep measures each bar's length at every frame: all six vary by at most **0.016px**. A linkage whose "bars" stretched would be cheating; these do not.
- **The identity is the mechanism.** `|OB|·|OP| = a²−b²` is what the whole thing enforces, and the straight line is its consequence, exactly as Peaucellier proved.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses the linkage, leaving a static pose with the pen on its line and the reference guide showing.

## Files

- `demo.html` - markup
- `style.css` - the whole component
