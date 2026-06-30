# prefers-reduced-motion Support

Adds comprehensive `prefers-reduced-motion` support to all EaseMotion animations.
When users enable "Reduce motion" in their OS/browser settings, all animations,
transitions, and hover effects are disabled to prevent discomfort for those with
vestibular motion disorders. Meets WCAG Success Criterion 2.3.3.

## Features

- **Universal suppression** — `*` selector targets all elements (not just ease-\*)
- **Transitions disabled** — `transition-duration: 0.01ms` stops all CSS transitions
- **Scroll-behavior forced to `auto`** — no smooth scrolling
- **Hover effects disabled** — all `ease-hover-*` transformations suppressed
- **Looping animations stop** — `--ease-animation-iterations` defaults to `1` instead of `infinite`
- **Scroll reveal resolves immediately** — `.ease-reveal` elements appear without animation
- **`.ease-motion-safe` opt-in class** — elements can still animate when essential
- **Live toggle demo** — simulate reduced-motion in the browser

## Affected Core Files

| File                  | Change                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| `core/variables.css`  | Add `--ease-animation-iterations: 1` in `@media (prefers-reduced-motion: reduce)`                     |
| `core/animations.css` | Enhanced reduced-motion block with `*`, `transition-duration`, `scroll-behavior`, `.ease-motion-safe` |
| `core/reveal.js`      | Already handles reduced motion (no change needed)                                                     |

## Usage

```css
/* Import after EaseMotion core */
@import "path/to/reduced-motion.css";

/* Essential animation — always plays */
<div class="ease-motion-safe ease-bounce">Essential</div>
```

## CSS Variables

| Variable                        | Default    | Reduced Motion          |
| ------------------------------- | ---------- | ----------------------- |
| `--ease-animation-iterations`   | `infinite` | `1`                     |
| `--ease-motion-safe-duration`   | `300ms`    | `300ms` (unaffected)    |
| `--ease-motion-safe-iterations` | `infinite` | `infinite` (unaffected) |

Fixes #12702
