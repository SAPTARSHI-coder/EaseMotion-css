# Kea

A pure CSS/HTML scene of a kea, the New Zealand alpine parrot, working a hiker's boot lace apart on a snowy scree slope.

## What it shows

The kea is the only true alpine parrot, and it is notorious for taking apart anything a human leaves outside: boot laces, window seals, rubber trim. Two features drive the scene.

The bill is not a generic parrot hook. It is a long, slender, strongly decurved upper mandible built for levering, and it is the reason the bird can get under a lace at all. The plumage is drab olive from above and brilliant scarlet-orange underneath, a colour the bird only reveals when the wing lifts.

## How it is built

- **Plumage texture** - a `repeating-conic-gradient` scale layer over the body's `radial-gradient` base, so the olive back reads as feathered rather than flat.
- **Decurved bill** - the upper mandible is one element with an asymmetric `border-radius` (`60% 10% 6% 40% / 90% 10% 10% 70%`), giving the long levering hook. The lower mandible is separate and hinges on its own `transform-origin`.
- **The reach** - the head is a nested box on its own keyframe, so the neck bends down and the bill tip lands on the lace instead of hovering above it.
- **The pull** - the lace stretches with `scaleX` and swings from a `0 50%` origin while the boot rocks back on a matching keyframe, so the tug reads as one linked action.
- **The flash** - the scarlet underwing sits behind the body at rest and rotates out mid-pull on a delayed keyframe, which is when the real bird shows it.
- **Setting** - snowy peaks are `clip-path` triangles with a snowline stop in the gradient, over a scree rock and snowfield.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the head in its pried-down pose, so the scene still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
