# Dark Mode Guide — EaseMotion CSS Variable System

## What This Adds

EaseMotion CSS has a complete `--ease-*` variable system but dark mode was never documented. This submission closes that gap with two ready-to-use strategies, a working demo, and a full variable reference.

---

## What's Included

### `style.css`
Contains two dark mode override blocks targeting the same set of `--ease-*` visual tokens:

- `@media (prefers-color-scheme: dark)` — auto dark mode, zero JS, follows OS preference
- `[data-theme="dark"]` — manual override, controlled via a toggle button
- A scoped transition block for smooth theme switching using `--ease-speed-medium`

Only visual tokens are overridden — colors, surfaces, shadows, and glows. Spacing, radii, typography, motion, and z-index are theme-neutral and left untouched.

### `demo.html`
A fully interactive single-page demo showing:

- A toggle button that switches themes and persists the choice via `localStorage`
- Both strategies documented with syntax-highlighted code blocks (Prism.js via CDN)
- A live variable reference table with colour swatches for every overridden token
- All core EaseMotion components (buttons, cards, animations) reacting to the theme switch in real time

---

## Variables Overridden

| Token | Reason |
|---|---|
| `--ease-color-bg` / `--ease-color-surface` | Page and card backgrounds |
| `--ease-color-text` / `--ease-color-muted` | Body and secondary text |
| `--ease-color-primary` (+ light/dark) | Accent — brightened for dark bg |
| `--ease-color-success/danger/warning` (+ variants) | Status colours — lightened for contrast |
| `--ease-shadow-sm/md/lg/xl` | Deeper opacity on dark surfaces |
| `--ease-glow-primary/success/danger` | Intensified glow opacity |

---

## Accessibility

- All text/surface combinations meet WCAG AA (4.5:1 minimum contrast).
- Transitions are scoped to `color`, `background-color`, `border-color`, and `box-shadow` only — no layout properties — to avoid motion sensitivity issues.
- A `prefers-reduced-motion` reset is included in `style.css` to disable transitions for users who opt out.

---