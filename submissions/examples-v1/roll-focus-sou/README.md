# Roll Loader

A looping "roll" animation for loading indicators — a circular element travels back and forth across a track while rotating continuously, giving the illusion of a ball rolling naturally.

---

## Files

- demo.html
- style.css
- README.md

---

## What Does This Do?

Provides a self-contained roll-style loading indicator built with pure CSS keyframes — no JavaScript, no external dependencies. Includes 4 ready-to-use variants: default, multi-ball, large accent, and inline (for use inside buttons).

---

## How Is It Used?

Drop the classes into any HTML element. The loader is fully self-contained:

    <!-- Default single-ball roll loader -->
    <div class="roll-loader">
      <span class="roll-ball"></span>
    </div>

    <!-- Multi-ball roll (staggered animation) -->
    <div class="roll-loader roll-loader--multi">
      <span class="roll-ball roll-ball--sm"></span>
      <span class="roll-ball roll-ball--sm roll-ball--delay-1"></span>
      <span class="roll-ball roll-ball--sm roll-ball--delay-2"></span>
    </div>

    <!-- Large accent-colored variant -->
    <div class="roll-loader roll-loader--lg">
      <span class="roll-ball roll-ball--accent"></span>
    </div>

    <!-- Inline (inside a button) -->
    <button type="button" disabled>
      <span class="roll-loader roll-loader--inline">
        <span class="roll-ball roll-ball--xs"></span>
      </span>
      Loading data...
    </button>

---

## Class Reference

| Class                    | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `.roll-loader`           | The horizontal "track" the ball rolls across.                 |
| `.roll-loader--lg`       | Larger track (320x56px).                                      |
| `.roll-loader--inline`   | Compact inline track for use inside buttons or text.          |
| `.roll-loader--multi`    | Container variant for multiple balls with gap spacing.        |
| `.roll-ball`             | The circular element that rolls across the track.             |
| `.roll-ball--xs`         | Extra-small ball (14px).                                      |
| `.roll-ball--sm`         | Small ball (18px).                                            |
| `.roll-ball--accent`     | Accent color variant with pink/purple gradient.               |
| `.roll-ball--delay-1`    | 0.15s animation delay (for staggered multi-ball effect).      |
| `.roll-ball--delay-2`    | 0.30s animation delay (for staggered multi-ball effect).      |

---

## Animation Details

The core `@keyframes roll-focus` animates two properties in perfect sync:

- `translateX` — horizontal travel across the track (0 → 160px → 0)
- `rotate` — continuous rotation matching the direction of travel (0 → 720deg → 0)

The combined motion produces a natural rolling illusion. The animation uses a smooth `cubic-bezier(0.65, 0, 0.35, 1)` easing curve for a satisfying back-and-forth feel.

The large and inline variants use dedicated keyframe rules (`roll-focus-lg`, `roll-focus-inline`) with adjusted travel distances so the ball always rolls the full length of its track.

---

## Accessibility

Respects the user's motion preferences via `@media (prefers-reduced-motion: reduce)`. When reduced motion is preferred, the ball switches to a gentle opacity pulse instead of the rolling animation — preserving loading feedback without vestibular discomfort.

---

## Why Does This Fit EaseMotion CSS?

- **Self-contained:** No JavaScript, no external assets, no CDN — opens directly in a browser.
- **Composable:** Track and ball are independent primitives; mix and match sizes, colors, and delays.
- **Human-readable class names:** `.roll-loader`, `.roll-ball`, `.roll-ball--accent` describe intent, not implementation.
- **Animation-first:** Pure CSS keyframes drive the effect — no runtime overhead.
- **Accessible by default:** Ships with reduced-motion fallback out of the box.
- **Framework-friendly:** Class names are easy for the maintainer to standardize to `ease-*` naming (e.g. `ease-roll-loader`, `ease-roll-ball`).

---

## Browser Support

Uses only standard CSS properties (`transform`, `@keyframes`, `linear-gradient`, `flex`) supported by all modern browsers — Chrome, Firefox, Edge, Safari.

---

## Author

**soumyasekharshee265-ux**
