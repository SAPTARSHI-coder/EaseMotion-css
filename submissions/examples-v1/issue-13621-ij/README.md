# Ease Focus Ring

Closes #13621

## Description
A custom focus ring using `:focus-visible` with a smooth appear animation. Uses the `--ease-focus-color` CSS variable (default #3b82f6) and respects input method (keyboard-only activation via `:focus-visible`).

## Acceptance Criteria
- Outline appears with smooth animation on keyboard focus
- `--ease-focus-color` variable controls ring color
- `outline-offset` provides spacing from element
- Works on buttons, links, inputs, and checkboxes
- Does not show on mouse click — respects input modality

## Files
- `style.css` — Dark theme with animated focus ring styles
- `demo.html` — Demo with button, link, input, and checkbox
