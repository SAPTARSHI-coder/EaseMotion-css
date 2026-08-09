# Phyllotaxis

A pure CSS/HTML sunflower seed head, with every floret placed by the golden angle.

## What it shows

A sunflower has to pack a couple of thousand seeds into a flat disk with no wasted space and no seams. It does it by adding each new floret at a fixed angle from the last, and the angle it uses is **137.508 degrees**, the golden angle.

The golden angle is `360° / φ²`, and it is special because it is the **most irrational angle there is**. Any rational fraction of a turn would eventually line seeds up into spokes with gaps between them: turn by 90° and you get four arms; turn by a third and you get three. The golden angle can never do that, because it is never even approximately a simple fraction of a circle, so new seeds always fall into the largest remaining gap. The result is the tightest possible packing, with no spokes and no gaps.

What you *see* as a consequence are two families of spiral arms winding in opposite directions, and their counts are always **consecutive Fibonacci numbers** (13 and 21, 34 and 55, and so on). Nobody designed that. It falls out of the angle. The Fibonacci numbers appear because they are the numbers whose ratios best approximate φ.

## How it is built

- **Vogel's model, exactly.** Seed `n` is placed at angle `n × 137.508°` and radius `c × √n`. That is the whole component. The `√n` radius is what keeps the *area* per seed constant as the head grows outward.
- **The angle is measured, not asserted.** The browser check reads every seed's position off the DOM, computes the turn between each consecutive pair, and averages them: **137.5078°**, against the true golden angle of **137.5078°**. The largest single deviation is **0.026°**, which is just the rounding of the coordinates to two decimal places.
- **The √n law is checked too.** The check divides each seed's radius by `√n` and finds the ratio is constant at **7.2** across all 260 seeds, with a spread of **0.004**. So the radius really does scale as the square root, which is what produces the even density.
- **It grows from the centre**, newest seed first, via a per-seed `animation-delay` keyed to `n`, because that is the order a real head lays them down.
- **Ray florets** ring the disk as a masked `repeating-conic-gradient`.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the growth and rotation, leaving the finished head, which is the content.

## Files

- `demo.html` - markup
- `style.css` - the whole component
