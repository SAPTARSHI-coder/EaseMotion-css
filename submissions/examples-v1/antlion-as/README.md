# Antlion

A pure CSS/HTML antlion pit: an ant losing its footing on the funnel wall while the buried larva flicks sand to bring it down.

## What it shows

The antlion larva digs a conical pit in dry sand and buries itself at the apex with nothing showing but its jaws. The trap is not the pit. The trap is the **angle of repose**: the larva excavates the walls to the steepest angle loose sand can hold, so an ant that steps over the rim cannot get purchase. Every step collapses the grain under it.

If the ant is still making progress, the larva flicks sand up the slope with its head to knock it back down. Then the jaws close.

## How it is built

- **The funnel**: a `clip-path` V cut through the sand block, with a `repeating-linear-gradient` running down the slope and an inset shadow to hollow it. Concentric ellipse arcs read as contour rings, which is what makes it a cone rather than a painted triangle.
- **Losing ground**: the ant's keyframe deliberately gains and then loses. It slides, recovers a little, slides further, recovers less, and ends at the jaws. That stutter is the entire physics of the trap, so a smooth slide would have been the wrong animation.
- **On the slope**: the ant carries a constant `rotate(-45deg)` matching the wall angle, and the pit is cut so its walls sit at that same 45 degrees.
- **The flick**: `repeating-conic-gradient` sand fans burst up both walls from the apex, masked with a `radial-gradient` so they read as thrown grain rather than filled wedges. Individual grains arc out on per-grain `--gx`/`--gy` vectors.
- **The jaws**: two `clip-path` sickles mirrored with `scaleX(-1)`. The mirrored one gets its own keyframe that rebuilds `scaleX(-1)` at every stop, because a shared `rotate` keyframe would have wiped the mirror and flipped the jaw.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the ant partway down the wall, so the trap still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
