# ease-checkbox-check-animate-ij

Checkbox where the checkmark draws itself in with a smooth animation on toggle.

Resolves: #34716

## Overview

A custom-styled checkbox built on a real native `<input type="checkbox">`
for full accessibility. When checked, the box fills with a spring-eased
scale pop and the checkmark SVG path animates in via `stroke-dashoffset`,
giving a "drawn in" effect rather than an abrupt appearance. Pure
CSS — no JavaScript is required since it's driven entirely by the `:checked`
pseudo-class.

## Markup

```html
<label class="ease-checkbox-check-animate-ij">
  <input type="checkbox" class="ecca-input" />
  <span class="ecca-box">
    <svg class="ecca-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  <span class="ecca-label">Label text</span>
</label>
```

The real `<input>` is visually hidden (clipped, not `display: none`) so it
remains in the accessibility tree and keyboard-focusable. All visual states
are driven by CSS sibling selectors off `.ecca-input:checked`.

## CSS Variables

| Variable        | Default   | Description                                |
|-------------------|-----------|------------------------------------------------|
| `--ecca-size`    | `22px`    | Width and height of the checkbox box              |
| `--ecca-color`   | `#7c5cff` | Fill/border color when checked                     |
| `--ecca-speed`   | `0.35s`   | Duration of the checkmark draw + box fill transition |
| `--ecca-radius`  | `6px`     | Corner radius of the box (`50%` for fully circular) |

Example override:

```html
<label class="ease-checkbox-check-animate-ij"
       style="--ecca-size: 32px; --ecca-color: #f472b6; --ecca-speed: 0.6s; --ecca-radius: 8px;">
  ...
</label>
```

## How the Draw-In Animation Works

The checkmark `<path>` has `stroke-dasharray: 24` and starts at
`stroke-dashoffset: 24` (fully hidden — dash equals total path length). When
`.ecca-input:checked`, the sibling `.ecca-check path` transitions to
`stroke-dashoffset: 0`, revealing the stroke progressively along its length,
which reads as the checkmark being "drawn." Simultaneously, `.ecca-box`
scales up slightly (`scale(1.06)`) with a spring easing, then settles back
to `scale(1)` via a short `@keyframes` animation.

## Interactive Triggers (Acceptance Criteria)

- **Click** — clicking anywhere on the `<label>` (box or text) toggles the
  native checkbox, which drives the checked state via `:checked` and
  triggers the draw-in animation. This is the natural trigger for a
  checkbox and requires no JavaScript.
- Demonstrated in three contexts in `demo.html`: standalone checkboxes,
  a to-do/checklist list, and CSS-variable customized examples.

## Responsive Design

- Label gap and text size scale down slightly below 480px to keep rows
  compact on narrow screens.
- The checkbox box itself uses `em`-independent fixed sizing via
  `--ecca-size`, so it stays crisp and consistent regardless of viewport.

## Accessibility

- Built on a real `<input type="checkbox">` — fully keyboard operable
  (`Tab` to focus, `Space` to toggle) and correctly announced by screen
  readers as a checkbox with its checked state.
- The input is visually hidden via clip/absolute positioning (not
  `display: none` or `visibility: hidden`), preserving its place in the
  accessibility tree and focus order.
- A visible focus ring appears on `.ecca-box` via `:focus-visible` on the
  underlying input.
- The checkmark SVG is `aria-hidden="true"` since it's purely decorative;
  the checked/unchecked state is conveyed by the native input itself.
- Respects `prefers-reduced-motion: reduce` by disabling all transitions
  and the settle animation.

## Files

- `demo.html` — standalone checkboxes, a checklist-style example, and a
  CSS-variable customization example.
- `style.css` — component styles, the `stroke-dashoffset` draw-in
  animation, box fill/pop transition, responsive rules, and
  reduced-motion handling.
- `README.md` — this file.