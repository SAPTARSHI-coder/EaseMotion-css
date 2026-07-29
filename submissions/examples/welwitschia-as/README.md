# Welwitschia

A pure CSS/HTML scene of *Welwitschia mirabilis* on the Namib gravel plains, its two leaves sprawling in the coastal fog.

## What it shows

Welwitschia is a plant that grows exactly two leaves in its entire life and never sheds them. They emerge from a woody crown and keep extending from the base for a thousand years or more, so the far ends are ancient, sun-bleached, and torn. What looks like a dozen straps is those same two leaves, split lengthwise by wind into ribbons.

It lives in a desert that gets almost no rain, and drinks the fog that rolls in off the Atlantic instead.

## How it is built

- **The straps** - each ribbon carries a `repeating-linear-gradient` running *along* its length, because welwitschia veins are lengthwise. Vein lines running across the strap would read as a caterpillar, not a leaf.
- **Torn tips** - a `clip-path` polygon notches the far end of every strap, mirrored for the left and right fans, so the ends look wind-shredded rather than cut.
- **The fan** - straps anchor at the crown via `transform-origin` on the inner edge and splay by a per-strap `--a` angle. The ripple keyframe rebuilds that angle with `rotate(calc(var(--a) + 2.4deg))`, so the shared animation cannot wipe each strap's own rotation.
- **The crown** - a `repeating-conic-gradient` bark texture over a `radial-gradient` base, with the central growth groove the two leaves emerge from.
- **Cones** - the ribbed salmon strobili nod on the crown on offset delays.
- **The fog** - translucent ellipses drift across on a long linear keyframe, fading in and out at the scene edges. This is the plant's actual water source.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and parks the fog mid-scene, so the plant still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
