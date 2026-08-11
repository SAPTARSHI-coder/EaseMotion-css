# Animation: add-ease-bubbles-rise

Playful underwater bubble rising animation.

## Description

`add-ease-bubbles-rise` animates bubble-shaped elements that rise from the bottom of the screen. The movement includes a slight horizontal wobble (like drifting in water), gentle scale variation, and a fade-out as the bubbles reach the top.

## Usage

Apply the `.bubble` element class (and optionally override CSS variables) and let the keyframes run automatically.

Key CSS variables (optional):
- `--x`: horizontal position (e.g. `18%`)
- `--size`: bubble diameter (e.g. `18px`)
- `--wobble`: wobble amplitude (e.g. `12px`)
- `--dur`: animation duration
- `--delay`: animation delay (negative values desynchronize bubbles)

## Acceptance Criteria

- Upward translation + slight horizontal wobble
  - Uses `translateY(...)` to move bubbles upward
  - Uses `translateX(...)` oscillation across keyframes to create wobble
- Scale variation + fade near top
  - Scale changes during the rise (`scale(0.7) -> scale(1.05) -> ...`)
  - `opacity` decreases significantly near the top (approaches `0` by the end)
- Good for aquatic/playful themes
  - Bubble visuals use glossy radial gradients, light border, and soft glow
- Reduced motion override included
  - `@media (prefers-reduced-motion: reduce)` disables the animation

