# Velvet Worm

A pure CSS/HTML velvet worm firing two oscillating slime jets over a cricket.

## What it shows

Velvet worms (Onychophora) have barely changed in 500 million years and hunt with something no other animal has: **two squirt guns on their face**.

The remarkable part is not that they spray glue. It is *how*. Each papilla fires a jet of slime under pressure, and the nozzle itself is soft and unanchored, so the outgoing jet makes it **whip from side to side at around 40 times a second**. The worm does not aim the oscillation. It is a passive instability, driven by the jet's own momentum, the same way a loose garden hose thrashes. The result is that the slime lands as a **zigzag ribbon** rather than a line, and the two ribbons cross into a net that pins the prey down. The slime sets in seconds.

The worm is also unwettable. Its skin is covered in the microscopic papillae that give it its name, and its own slime does not stick to it.

## How it is built

- **The jets are ribbons, not sprays.** Each is 26 slime segments placed along `y = A·sin(3.2πt)·t`, an oscillation whose amplitude grows with distance, which is what a whipping nozzle actually lays down. The taper toward the nozzle is not stylistic; the jet has barely started deviating there.
- **Mirrored, and checked.** The upper and lower ribbons are exact mirrors: the browser check compares every pair of `--y` values and confirms `up[i] + lo[i] = 0` for all 26. That is why they cross into a net rather than overlapping into a blob.
- **40 Hz is the real number.** The nozzle keyframe is `0.025s`, measured at exactly **40.0 Hz**. The caption says forty times a second, and the CSS runs at forty times a second.
- **The net reaches the prey.** Measured in the browser: the net's right edge at 510px against the cricket's left at 476px. A net that stops short of the animal would be describing a miss.
- **Hydrostatic legs**: 15 stubby unjointed lobopods on a staggered `calc(var(--i) * -0.09s)` delay, so the walk runs as a wave down the body rather than in lockstep.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and leaves the net laid down over the prey.

## Files

- `demo.html` - markup
- `style.css` - the whole component
