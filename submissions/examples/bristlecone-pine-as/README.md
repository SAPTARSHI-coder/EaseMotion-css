# Bristlecone Pine

A pure CSS/HTML Great Basin bristlecone on an exposed dolomite scarp: mostly dead wood, kept alive by a single strip of bark.

## What it shows

The oldest bristlecones are around 4,800 years old, which means they were already standing when the pyramids were built. They manage it by being terrible at growing.

They live where nothing else will: high, dry, windswept dolomite that other trees cannot tolerate, so nothing crowds them and fire has no fuel to spread through. The wood they lay down is dense and resinous enough that insects and rot cannot get into it. And they practise **sectoral dieback**: as conditions worsen, the tree lets most of itself die and keeps one narrow ribbon of living bark running from a surviving root to a surviving limb. A tree that is 95% dead is not dying. That is the strategy.

The dead wood does not rot at that altitude. It gets sandblasted by ice and grit into polished, twisted sculpture that can stand for millennia after the tree finally goes.

## How it is built

- **Mostly dead**: the bulk of the trunk is bare, polished heartwood. The single living strip is one narrow ribbon of bark drawn over it, faintly pulsing. That ratio is the tree's whole biography, so the drawing had to be dominated by dead wood.
- **A gnarled column, not a plank**: the trunk is carved with an irregular `clip-path` polygon. Drawn as a rounded rectangle it read as a fence post.
- **The spiral grain**: a `repeating-linear-gradient` at 74 degrees runs the grain diagonally, because these trees grow in a slow twist and the sandblasted wood shows it.
- **Snags**: dead limbs that stopped growing centuries ago and are still attached, drawn in the same bleached wood as the trunk.
- **Needles**: `repeating-conic-gradient` bottlebrush tufts, only at the tips of the limbs the live strip still feeds. Each keeps its own `--r` splay and `--s` size through the sway, because the shared keyframe rebuilds them with `rotate(calc(var(--r) + 5deg)) scale(var(--s))`.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe. The tree is nearly static anyway, which is the point.

## Files

- `demo.html` - markup
- `style.css` - the whole component
