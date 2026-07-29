# Hagfish

A pure CSS/HTML hagfish being bitten, and instantly filling the attacker's mouth with slime.

## What it shows

A hagfish is a jawless, eyeless, boneless scavenger that has been doing this for 300 million years, and its defence is one of the fastest chemical events in biology.

Bitten, it fires a hundred pores along its flanks at once. What comes out is about a teaspoon of concentrated exudate: coiled protein thread and mucin vesicles. It hits seawater and **hydrates into litres of slime in well under a second**. The threads are ten microns wide and up to 15cm long, and they knit the mucus into a cohesive net rather than a puddle.

It goes straight into the attacker's gills. A shark that bites a hagfish lets go and leaves, gagging. Footage exists of exactly this happening to sharks mid-bite.

Then the hagfish has a problem, because it is now in its own slime. So it **ties itself in an overhand knot and pushes the knot down its own body** to scrape itself clean. It uses the same trick in reverse for leverage when tearing food off a carcass, since it has no jaw to pull against.

## How it is built

- **The release takes 4% of the cycle.** From nothing to a cloud in a handful of frames, because in life it is under a second. The rest of the animation is the wait and the aftermath. That ratio is the fact worth encoding.
- **Pores fire together, not in sequence.** The per-pore delay is `calc(var(--i) * 0.012s)`, deliberately tiny, so the flank goes off as one event. This is the opposite of the travelling-wave stagger, and it is the correct choice here.
- **Thread, not just cloud**: the slime is soft merged pore blooms *plus* radiating threads that snap taut with `scaleX(0 → 1)`, because hagfish slime is a fibre net and drawing only mucus would miss what makes it work.
- **The knot travels.** It is a partial `border` ring that slides along the body on its own keyframe: the actual behaviour, used both for cleaning and for leverage.
- **No eyes, no jaw**: the head has barbels that cast around on their own delays, and a rasping plate instead of a mandible.
- **The shark commits and regrets it**: it lunges, its jaw opens on the frame the pores fire, and it backs off with the jaw working.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the slime released and the threads drawn, so the defence still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
