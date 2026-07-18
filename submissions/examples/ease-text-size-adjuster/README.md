# Ease Text Size Adjuster

## Description
An accessible text-size control (A−/A+/Reset) that smoothly scales a content area's text across 5 preset steps, with animated transitions and a visual dot indicator showing the current level. The selected size persists across page visits via `localStorage`.

## Features
- 5-step font scaling (0.85× to 1.45×) applied via a single `--text-scale` custom property
- Smooth animated font-size transitions (not an abrupt jump)
- Visual level indicator (dots) showing current step
- Buttons disable at min/max steps
- Persists user's chosen size in `localStorage`
- Fully keyboard accessible with `aria-label`s and `role="group"`
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-text-adjuster">
  <div class="adjuster-controls" role="group" aria-label="Adjust text size">
    <button type="button" class="adjuster-btn decrease" aria-label="Decrease text size">A−</button>
    <span class="adjuster-level" aria-hidden="true">
      <span class="level-dot"></span>
      <!-- 4 more .level-dot -->
    </span>
    <button type="button" class="adjuster-btn increase" aria-label="Increase text size">A+</button>
    <button type="button" class="adjuster-btn reset" aria-label="Reset text size">Reset</button>
  </div>

  <div class="adjuster-content">
    <h3>Your heading</h3>
    <p>Your body text.</p>
  </div>
</div>
<script src="text-size-adjuster.js"></script>
```
Any element inside `.adjuster-content` that should scale needs `font-size: calc(<base-size> * var(--text-scale))` with a `transition` on `font-size`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--adjuster-duration` | `0.35s` | Font-size transition speed |
| `--adjuster-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing function |
| `--adjuster-accent` | `#38bdf8` | Active state / accent color |
| `--adjuster-bg` | `#14141c` | Control and content background |

To change the scale steps themselves, edit the `SCALES` array in `text-size-adjuster.js`.

## Accessibility
Controls are grouped under `role="group"` with a descriptive `aria-label`, each button has its own `aria-label`, and disabled buttons at min/max are visually and functionally inert. Respects `prefers-reduced-motion` by disabling the font-size transition.

## Files
- `demo.html` — live working example
- `style.css` — component styles and transitions
- `text-size-adjuster.js` — step logic and persistence
- `README.md` — this file