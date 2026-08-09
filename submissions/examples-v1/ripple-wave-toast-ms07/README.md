# Ripple-Wave Toast

A pure CSS toast/notification component with a rippling wave animation on entrance. Includes success, info, and error variants. Triggering and dismissing toasts uses the checkbox hack, so there is **zero JavaScript** anywhere in the demo.

## Preview

- Three toast variants: success, info, error
- Fixed-position toast that slides and fades up from the bottom of the viewport
- A concentric "ripple wave" animation expands outward from the toast icon on reveal
- Dismissible via a close button, or by clicking the trigger button again
- Fully responsive, full-width on small screens
- Full keyboard support and `prefers-reduced-motion` support

## Files

| File         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `demo.html`  | Markup for three toast triggers, wired to EaseMotion CDN   |
| `style.css`  | All component styling and animations                      |
| `README.md`  | This file                                                  |

## How the "no JavaScript" toggle works

Each toast is paired with a visually-hidden `<input type="checkbox">`. The trigger button and the toast's own close ("×") button are both `<label for="...">` elements pointing at that same checkbox id. Clicking either one toggles the checkbox, and a CSS sibling combinator (`.ease-rw-toggle:checked ~ .ease-rw-toast`) reveals or hides the toast. This is a pure-CSS pattern — no `<script>` tag involved.

## CSS custom properties

Defined on `:root` in `style.css`:

| Property                  | Purpose                                   |
|----------------------------|---------------------------------------------|
| `--ease-rw-bg`             | Page background color                       |
| `--ease-rw-surface`        | Toast/button background color               |
| `--ease-rw-border`         | Default border color                        |
| `--ease-rw-text`           | Primary text color                          |
| `--ease-rw-muted`          | Secondary/muted text color                  |
| `--ease-rw-success`        | Success variant accent color                |
| `--ease-rw-info`           | Info variant accent color                   |
| `--ease-rw-error`          | Error variant accent color                  |
| `--ease-rw-radius`         | Toast corner radius                         |
| `--ease-rw-duration`       | Show/hide transition duration               |
| `--ease-rw-easing`         | Shared easing curve for transitions         |

## CSS techniques used

### 1. Checkbox-driven visibility (no JS)
`.ease-rw-toggle:checked ~ .ease-rw-toast` switches the toast between a hidden state (`opacity: 0`, `visibility: hidden`, translated down, `pointer-events: none`) and a visible one. `visibility` is transitioned with a `0s` delay in each direction so the toast is removed from the accessibility tree and tab order only once it's fully faded out.

### 2. Ripple-wave entrance
`.ease-rw-toast__ripple` is an empty anchor element positioned over the icon. Its `::before` and `::after` pseudo-elements are circular outlines (`border: 2px solid currentColor`) that animate `transform: scale()` from `1` to `5.5` while fading `opacity` to `0`, on a shared `ease-rw-ripple` keyframe. The two pseudo-elements are given different `animation-delay` values so the rings expand one after another, creating a wave effect. The animation only runs while `.ease-rw-toggle:checked`, so it replays fresh each time a toast is opened.

### 3. State color via `currentColor`
Each toast variant (`--success`, `--info`, `--error`) sets `color` on the ripple wrapper to its accent variable, and the ring pseudo-elements simply use `border-color: currentColor`. This keeps one shared ripple implementation working across all three variants without duplicating keyframes.

### 4. Left accent bar
A thin colored bar on `.ease-rw-toast::before` reinforces the toast's status at a glance, independent of the icon and ripple color.

## Accessibility

- Toast containers use `role="status"` with `aria-live="polite"` for success/info, and `role="alert"` for the error variant, so screen readers announce them appropriately.
- The trigger and close controls are real `<label>` elements bound to a real, focusable `<input type="checkbox">`, so they work with keyboard (Space/Enter) and receive a visible focus outline via `:focus-visible`.
- All animations are wrapped in a `@media (prefers-reduced-motion: reduce)` query, which removes the ripple keyframes and replaces slide/fade transitions with a fast opacity-only crossfade.

## Usage

1. Include the EaseMotion CDN stylesheet, then this component's `style.css`.
2. Copy a trigger + toast block from `demo.html` per notification you need, giving each checkbox/label pair a unique `id`.
3. Swap the `ease-rw-toast--success` / `--info` / `--error` modifier class to match the notification type.

No build step, no JavaScript, no external dependencies beyond the EaseMotion base stylesheet.

## Naming convention

Follows the project's `ease-*` prefix convention for all classes and keyframes (`ease-rw-*`, `ease-rw-ripple`).