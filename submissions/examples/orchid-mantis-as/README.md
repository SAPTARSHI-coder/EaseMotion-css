# Orchid Mantis

A pure CSS/HTML *Hymenopus coronatus* sitting on a bare stem, being a flower, and taking a bee.

## What it shows

The usual description is wrong. The orchid mantis is not hiding on an orchid. There is no orchid. **The mantis is the flower.**

Its four walking legs have femurs flattened and lobed into petals, and the whole animal is arranged into a bloom. It sits on a bare stem, and pollinators come to it.

This was tested rather than assumed. O'Hanlon and colleagues found in 2014 that the mantis attracts *more* pollinators than real flowers growing nearby do. It is not camouflage, which hides you from something. It is **aggressive mimicry**: a lure that works better than the thing it imitates. The insects are not fooled into missing it; they are fooled into coming to it.

## How it is built

- **The petals are legs.** They are drawn as four lobed femurs radiating from the thorax, not as a flower with a mantis on it. There is nothing behind them but a bare stem, because that is the honest picture.
- **Symmetric splay, verified.** The left and right pairs hinge on opposite edges, which means their rotation signs must be opposite too. The first pass used the same sign for both and the left pair collapsed into each other. Measured after the fix: petal centres at x = 371/371/429/429 and y = 199/252/199/252, so both pairs open by the same 53px and the bloom is genuinely symmetric.
- **A still flower is a suspicious flower**: the whole animal nods on a slow breeze keyframe, and each petal drifts on its own delay while keeping its own `--p` angle via `rotate(calc(var(--p) + 4deg))`.
- **The strike is 2% of the cycle.** A real mantis strike is around 60 milliseconds. Everything else in this component is the wait. The forelegs cock, the femur reaches, and the tibia snaps shut against the femur's tooth row in a single frame; the bee is gone on the next one.
- **Mirrored foreleg**: the right raptorial arm carries `scaleX(-1)` and gets its own keyframe rebuilding it at every stop, so the strike cannot flip it.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` disables every keyframe and holds the bloom open with the bee hidden, so the mimicry still reads without motion.

## Files

- `demo.html` - markup
- `style.css` - the whole component
