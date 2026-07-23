# Tapir

A pure CSS/HTML lowland tapir wading a forest pool with a striped calf alongside.

## What it shows

A tapir looks like a pig designed by someone who had only heard about elephants, but it is neither. Its closest relatives are horses and rhinos, and the lineage has barely changed in 20 million years.

**The nose is the interesting part.** It is not a lip and not a snout. The upper lip and nose are fused into a short, muscular, genuinely prehensile proboscis that moves independently of the head. The tapir uses it like a finger: to pull leaves down, to sort food, and as a snorkel when it walks along the bottom of a river, which it does routinely.

**The calf is the other part.** Tapir calves are patterned in cream stripes and spots, described as looking like a walking watermelon. It breaks up the outline on a dappled forest floor. The pattern fades out by about six months.

## How it is built

- **The proboscis has its own animation.** `.trunkT` is nested inside the head but runs `gropeT` while the head runs `sniffT`. It casts around, stretches with `scaleX`, and does not simply follow the skull. That independence is the anatomical point, so giving it a shared keyframe would have made it just a snout.
- **The calf's pattern is dashes, not a grid.** The first pass crossed two `repeating-linear-gradient`s and the calf came out looking like it was in a cage. It is now a single set of bands running head-to-tail, broken into dashes by a second mask layer, with `mask-composite: intersect` confining them to the body. That is what the real pattern looks like.
- **White ear rims**: an `inset` `box-shadow` on the lower edge of each ear, which is the field mark you actually pick out first at night.
- **The mane**: a `repeating-conic-gradient` under a `clip-path`, the short stiff crest along the neck.
- **Gait**: legs alternate on half-cycle offsets and the two animals plod at slightly different rates, so they do not move as one rigid unit.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds both animals standing, so the proboscis and the calf's pattern still read without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
