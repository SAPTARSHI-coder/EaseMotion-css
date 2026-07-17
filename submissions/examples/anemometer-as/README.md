# Anemometer

A pure CSS/HTML cup anemometer: three cups at 120°, spinning one direction regardless of where the wind comes from.

## What it shows

Thomas Robinson worked this out in 1846, and the clever part is not obvious until you look at a single cup.

**Every cup is backwards to the one opposite it.** At any moment, one cup is presenting its **open bowl** to the wind and another is presenting its **smooth back**. A hollow hemisphere facing into the flow has roughly **four times** the drag coefficient of the same hemisphere facing away (about 1.4 against 0.4). So the push never balances, and the rotor always turns the same way.

The consequence is the useful bit: it does not matter which direction the wind blows from. Rotate the whole instrument and nothing changes. It spins the same way at the same speed, so you can measure wind *speed* without knowing anything about wind *direction*. There is no vane, no bearing to align, nothing to point.

Robinson originally claimed the cups travel at exactly one third of the wind speed regardless of cup size. That turned out to be wrong, and real anemometers are calibrated per design, but the one-directional trick was right and is still in use.

## How it is built

- **The chirality is the physics, and it is checked.** Each cup's mouth faces its arm's local `-y`, so all three present the same face going round the circle. The browser check computes the cross product of each cup's radius vector with its mouth direction and gets **−1, −1, −1**: same-handed, all three. If one were flipped the rotor would have no preferred direction and would stall, so this is the one property that had to be verified rather than eyeballed.
- **The mouths are tangential, not radial.** Measured: the dot product of each cup's mouth direction with its own arm axis is **exactly 0** for all three. A first pass had the cups opening back along the arms, pointing at the hub, which is a real error and would not work.
- **120° apart, verified**: arm angles resolve to **0, 120, 240**, with all three gaps at exactly 120°.
- **The asymmetry is drawn**: each cup has a dark concave mouth on one side and a smooth lit shell on the other, so you can see which face the wind can get purchase on.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` stops the rotor and parks the wind streaks, leaving the cup geometry legible.

## Files

- `demo.html` - markup
- `style.css` - the whole component
