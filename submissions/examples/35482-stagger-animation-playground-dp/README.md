# Stagger Animation Playground

An interactive example demonstrating how a single entrance animation,
combined with different per-item delay calculations, produces
distinctly different stagger effects.

## 1. What does this do?

Renders a responsive grid of 8–12 tiles that all share the same
keyframe animation. A control panel lets you choose how each tile's
delay is calculated — **Sequential** (left to right), **Reverse**
(right to left), **Center-Out** (middle tiles first), **Random**
(shuffled order), or **Wave** (a smooth sinusoidal ripple) — plus
adjust the base stagger delay, animation duration, direction (slide
up/down/left/right or scale in), easing, and item count. A Replay
button re-triggers the sequence without reloading the page, and Reset
restores all defaults.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **Stagger Preset** to change how per-item delay is ordered.
- Adjust **Stagger Delay** and **Animation Duration** to control pacing.
- Change **Animation Direction** and **Easing** to alter the motion style.
- Drag **Number of Items** to rebuild the grid with 8–12 tiles.
- Use **Replay** to re-run the current configuration, or **Reset** to
  return to the defaults.

Each tile only receives a computed `--delay`, `--duration`, and
`--ease` custom property from JavaScript — the animation itself is
pure CSS. To reuse the pattern, apply the same `--delay` calculation
to any repeating element and reference it in `animation-delay`.

## 3. Why is it useful?

Stagger timing is often written as a fixed `index * delay` formula
without considering that the *order* the delay is applied in is what
actually shapes the perceived motion — sequential, reverse, center-out,
wave, and random all use the same base delay value but read completely
differently. This playground makes that distinction concrete and
comparable, helping developers pick the right sequencing strategy for
lists, grids, and staggered reveals in their own projects. It also
respects `prefers-reduced-motion` by collapsing delays and durations to
near-zero, and keeps every control keyboard-accessible with visible
focus styles.