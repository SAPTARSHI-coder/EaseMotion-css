# Praxinoscope

A pure CSS/HTML praxinoscope: twelve drawings on a turning drum, a twelve-sided mirror prism at the centre, and one steady walking figure.

## What it shows

Émile Reynaud patented this in 1877 to fix what was wrong with the zoetrope.

A zoetrope works by hiding the motion: you view the drawings through narrow slits, so you only see each one for the instant it is lined up. It works, but you are looking through a picket fence, and most of the light is thrown away. The image is dim and it flickers.

Reynaud got rid of the slits. He put a ring of mirrors at the centre of the drum, **at exactly half the drum's radius**, turning with it. Do the geometry and the mirror's motion cancels the drawing's motion: as the drum sweeps a drawing sideways, its mirror sweeps the reflection back by the same amount. The reflection sits still. Each drawing simply replaces the last one in the same spot, and you get a bright, continuous image with nothing blocking it.

## How it is built

- **The half-radius is real, not decorative.** Measured in the browser: the drawings sit at **98px** from the centre and the mirrors at **49px**. Ratio **0.5000**. That number is the whole invention, so it is the one thing in this component that had to be exact.
- **Locked together**: the drum and the prism carry the *same* keyframe at the *same* `2.4s` duration. They are separate elements but they cannot drift apart, which is the mechanical constraint a real praxinoscope enforces with a shared spindle.
- **Twelve real drawings**: each cell holds the same walker with a different `--sw` leg angle, `--ar` arm angle, and `--hp` bounce, generated around a full stride cycle. They are the frames, not decoration.
- **The reflection steps, it does not tween.** The viewed figure uses `steps(1, end)`, so it *holds* each pose until the next cell arrives and then jumps. A smooth interpolation would be a lie: a praxinoscope shows you twelve discrete pictures, and the continuity is in your eye, not on the drum.

## Accessibility

`prefers-reduced-motion: reduce` stops the drum, the prism, and the stepping figure.

No images, no JavaScript, no external assets.

## Files

- `demo.html` - markup
- `style.css` - the whole component
