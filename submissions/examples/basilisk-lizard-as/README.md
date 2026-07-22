# Basilisk Lizard

A pure CSS/HTML common basilisk sprinting across open water, throwing a fan of spray at every footfall.

## What it shows

The basilisk is the animal behind the "Jesus Christ lizard" nickname. Startled, it rears onto its hind legs and runs straight across the surface of a stream.

It works in three strokes, and none of them is surface tension. The foot **slaps** down hard enough to push water aside, the leg **strokes** down into the air cavity that slap opened, and then the foot **pulls out** before the cavity collapses. Do it fast enough, and each stride buys enough lift to keep going. The lizard has to run about 1.5 m/s to stay up; adults are heavy enough that they mostly sink partway and swim.

## How it is built

- **Three-segment legs**: hip, knee, and ankle are separately nested and each carries its own keyframe, so the stride actually folds and extends rather than swinging as a rigid stick. The foot is nested *inside* the shin so it inherits the knee rotation.
- **Stride timing**: the cycle runs at 0.44s, and the two legs share it with a half-cycle offset, so the gait alternates instead of hopping.
- **The slap**: a `repeating-conic-gradient` fan bursts at the waterline on the same 0.44s cycle as the footfall, masked with a `radial-gradient` so it reads as spray rather than a filled box. Beads fling outward on per-drop `--bx`/`--by` vectors.
- **Wake**: trailing streaks stretch and fade behind the lizard on a `scaleX` keyframe.
- **The crest**: a `repeating-conic-gradient` under a `clip-path` gives the spiky dorsal sail. Drawn tall it read as a turtle shell, so it is deliberately thin.
- **Water**: horizontal ripple lines only. Crossing them with vertical stripes turned the whole river into bathroom tile, so the sheen is a soft drifting gradient instead.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the lizard mid-stride, so the pose still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
