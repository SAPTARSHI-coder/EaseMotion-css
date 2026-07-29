# CSS Variable Animation Playground

An interactive example demonstrating how CSS custom properties can
fully drive animation behavior, with no hardcoded values inside the
keyframes themselves.

## 1. What does this do?

Renders a single animated preview object whose motion is entirely
controlled by CSS custom properties: `--duration`, `--delay`, `--ease`,
`--scale`, `--rotation`, `--opacity`, `--direction`, and `--iteration`.
A control panel lets you switch between six animation presets (Float,
Pulse, Rotate, Scale, Fade, Bounce) and adjust every variable with
sliders and dropdowns. Play/Pause, Reset, and Copy CSS Variables
actions are also provided. All six `@keyframes` definitions reference
the same variables, so changing a value updates every preset
consistently.

## 2. How is it used?

Open `demo.html` directly in any browser — no build step required.

- Choose a **preset** to change which `@keyframes` animation runs.
- Adjust **Duration**, **Delay**, **Easing**, **Scale**, **Rotation**,
  **Opacity**, **Direction**, and **Iteration Count** — each control
  updates the corresponding CSS variable on the preview element
  immediately.
- Use **Play/Pause** to toggle `animation-play-state` without losing
  your current settings.
- Use **Reset** to restore all controls to their default values.
- Use **Copy CSS Variables** to copy a ready-to-paste CSS block with
  your current variable values, announced via an `aria-live` status
  message.

To reuse this pattern, apply the same custom properties to any element
and reference them inside your own `@keyframes`, for example:
`transform: scale(var(--scale)) rotate(var(--rotation));`.

## 3. Why is it useful?

CSS custom properties turn static keyframes into reusable, themeable
animation building blocks — one set of `@keyframes` can produce
dramatically different motion depending on the variables applied to
it. This playground makes that relationship visible and tangible,
helping developers understand variable-driven animation architecture
before adopting it in their own design systems. It also models
accessible defaults: keyboard-operable controls, visible focus states,
live-region feedback for the copy action, and a `prefers-reduced-motion`
fallback that collapses animations to a single frame instead of
silently continuing to move.