# CSS Animate to Auto — `interpolate-size`, `calc-size()`, `@starting-style`

A production-ready demonstration of **four brand-new CSS features** that make animating to/from `auto` sizes and transitioning `display: none` possible — natively, without JavaScript.

## The Four Features

| Feature | What It Does | MDN |
|---------|-------------|-----|
| `interpolate-size: allow-keywords` | Enables transitions to `auto`, `min-content`, `fit-content` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size) |
| `calc-size()` | Performs math on keyword sizes — `calc-size(auto, size + 2rem)` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/calc-size) |
| `@starting-style` | Defines the initial state of an element when it transitions from `display:none` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style) |
| `transition-behavior: allow-discrete` | Allows transitioning discrete properties like `display` | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior) |

## Demo Features

### Core Demonstrations
- **Accordion to `auto`** — Smooth height animation from `0` to `auto` using `interpolate-size: allow-keywords` + `<details>`
- **`calc-size()` Function** — Three cards demonstrating `calc-size(fit-content, size * 1.5)`, `calc-size(auto, size - 2ch)`, and `calc-size(min-content, size + 6rem)`
- **Transition `display: none`** — Toggle that fades+sweeps a notification in and out, including display:none, using `transition-behavior: allow-discrete` + `@starting-style`

### Real-World Patterns
- **FAQ Section** — Classic FAQ accordion with animated expand/collapse to auto height. No JS measurement needed.
- **Notification Stack** — Staggered notifications that animate in on page load using `@starting-style` with staggered `transition-delay`
- **Modal with Animated Exit** — Modal that fades+scales in AND animates out before `display:none` kicks in. Previously impossible without JS.
- **Slide-Out Panel** — Side panel with entry animation, backdrop fade, and exit animation. Pure CSS.

### `@starting-style` Deep Dive
- **Pop-in Cards** — Three cards that stagger in on page render
- **Page Load Banner** — Banner slides in from top on first paint
- **Staggered List** — Five list items that cascade in with progressive delays

## Accessibility

- All interactive elements keyboard accessible with `:focus-visible`
- `<details>` + `<summary>` for native accessible accordions
- ARIA roles: `status`, `alert`, `banner`, `dialog`, `complementary`
- Toggle switches use semantic checkbox + label
- Skip-to-content link
- Screen reader-friendly content structure

## CSS Features Used

| Feature | Usage |
|---------|-------|
| `interpolate-size: allow-keywords` | Applied on `<html>` — enables all size-to-auto transitions |
| `calc-size()` | Three demo cards with different calc-size expressions |
| `transition-behavior: allow-discrete` | Modal, panel, notification — transitions display:none |
| `@starting-style` | Entry animations for modal, panel, cards, banner, list items |
| `:has()` | Toggle-based show/hide for modal, panel, notification |
| `oklch()` | Design tokens and all colors |
| `color-scheme` | Browser-native dark mode |
| `@supports` | Fallback for calc-size() |

## Browser Support

| Feature | Chrome | Edge | Safari | Firefox |
|---------|--------|------|--------|---------|
| `interpolate-size` | 129+ | 129+ | — | — |
| `calc-size()` | 129+ | 129+ | — | — |
| `@starting-style` | 117+ | 117+ | 17.4+ | In dev |
| `transition-behavior` | 117+ | 117+ | 17.4+ | In dev |

All demos degrade gracefully — browsers without support render static content without animation.

## Zero JavaScript

**Zero JavaScript.** Every animation, transition, stagger, and toggle is pure CSS. The `:has()` pseudo-class replaces JavaScript state management for show/hide toggles.

## Files

- `demo.html` — Semantic HTML with comprehensive animation demonstrations
- `style.css` — Production-ready stylesheet with design tokens, dark mode, and accessibility
- `README.md` — This documentation

## Related Resources

- [Chrome Developers: interpolate-size](https://developer.chrome.com/docs/css-ui/interpolate-size)
- [Chrome Developers: @starting-style](https://developer.chrome.com/docs/css-ui/starting-style)
- [web.dev: Four new CSS features for entry/exit animations](https://web.dev/blog/entry-exit-animations)
