# Slide Rule

A pure CSS/HTML slide rule working 2 x 3, with scales that are genuinely logarithmic.

## What it shows

A slide rule multiplies by adding lengths. If you space the marks so that the distance from 1 to any number *n* is proportional to log(n), then sliding one scale along another physically adds two logarithms, and log(2) + log(3) = log(6) does the multiplication for you.

That is the whole machine. There are no gears and nothing to compute. The answer is a distance.

## How it is built

- **The scales are actually logarithmic.** Every tick's position is `left: var(--p)`, where `--p` is that number's real `log10` as a percentage: 2 sits at 30.103%, 3 at 47.712%, 6 at 77.815%. They are not evenly spaced, which is why the marks crowd toward 10 exactly the way a real rule does.
- **The arithmetic falls out of the geometry.** The slide's travel is `78.27px`, which is `log10(2) x 260px`, so C's 1 lands on D's 2. The cursor's travel is `202.32px`, which is `log10(6) x 260px`. Nothing rounds those to look right; they are the log values.
- **C and D touch.** C hangs off the bottom edge of the slide and D rises off the top edge of the stock, so the two scales meet at the seam and can be read against each other, which is the only reason the instrument works.
- **The groove**: the slide rides in a dark channel. Without it, sliding right just opened a hole to the background.
- **The cursor**: a bevelled glass window with a red hairline, so one vertical line reads both scales at once.

## Verified, not asserted

Measured in the browser with the slide and cursor at their set positions:

- C's **1** sits over D's **2**, offset **0.00px**
- the hairline sits over C's **3** (off by 0.01px) and over D's **6** (off by 0.02px) at the same time
- distance(1→2) + distance(1→3) = 78.27 + 124.05 = **202.31px** = distance(1→6)

The last line is the point. The rule adds two lengths and the sum is the answer.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables the keyframes and parks the slide and cursor at the solved position, so the finished calculation still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
