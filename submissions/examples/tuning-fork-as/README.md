# Tuning Fork

A pure CSS/HTML tuning fork ringing on a bench block, drawn so the standing wave is visible.

## What it shows

A tuning fork is not two bars that wobble. It is a standing wave with a fixed shape:

- The tines move in **antiphase**, toward each other and then apart. That symmetry is why the fork is so pure: the two tines' sideways momentum cancels, so almost no energy leaks out through the handle and the note rings for a long time.
- Displacement is **zero at the yoke and largest at the tips**. The bend point near the base of each tine is the node; the tips are the antinode.
- Because both tines pull inward at the same instant and outward at the same instant, the **stem pumps up and down at twice the tine frequency**. That is the vibration you feel in the handle, and it is what drives a resonator box when you stand the fork on one.

## How it is built

- **Bending, not rotating**: each tine's `transform-origin` is `50% 100%`, its base at the yoke. Rotating about that point gives zero displacement at the base and maximum at the tip, which is exactly the mode shape. It is the cheapest honest way to draw a cantilever in CSS.
- **Antiphase**: two mirrored keyframes, so the tines always move toward or away from each other, never in parallel.
- **The 2:1 stem**: the stem's keyframe runs at `0.25s` against the tines' `0.5s`, so the frequency doubling is in the timing rather than asserted in a comment.
- **The envelope**: blurred ghost tines parked at a wider angle than the live swing, showing where the tips reach at full amplitude.
- **Node markers**: rings pinned at the yoke, the one part of the fork that barely moves.
- **Metal**: a multi-stop horizontal `linear-gradient` per part gives the cylindrical highlight, brightest off-centre rather than in the middle.

The swing is exaggerated and slowed. A real A440 fork moves a fraction of a millimetre, 440 times a second, which renders as a static grey bar.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the tines at full deflection, so the mode shape still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
