# Reduced Motion Global Audit

A self-contained accessibility demonstration for verifying global support for the `prefers-reduced-motion` media query in EaseMotion CSS.

## Overview

Motion can improve usability, but some users experience discomfort from movement-heavy interfaces.

Operating systems and browsers expose the `prefers-reduced-motion` media feature so websites can reduce non-essential motion when requested by the user.

This example demonstrates how a global reduced-motion rule can reduce animation and transition intensity while preserving the underlying UI states.

## Expected Behavior

When reduced motion is not enabled:

- Continuous animations run normally.
- Transitions use their normal durations.
- Hover/focus interactions animate smoothly.

When reduced motion is enabled:

- Animation duration is reduced to `0.01ms`.
- Infinite animations are limited to one iteration.
- Transition duration is reduced to `0.01ms`.
- Scroll behavior falls back to automatic behavior.

The UI itself remains functional.

## Global CSS Pattern

The intended global override is:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Why `0.01ms` Instead of `0s`?

A non-zero duration is intentionally used instead of completely disabling the animation.

Some integrations may depend on animation lifecycle events such as `animationend`. Setting the duration to `0s` or replacing the animation with `none` can change that behavior.

Using a near-zero duration reduces the visual motion while preserving the animation lifecycle.

## Demo

The demo contains several deliberately motion-heavy examples:

### Bounce

```css
.ease-bounce {
  animation:
    easeBounce
    1.5s
    ease-in-out
    infinite;
}
```

### Slide

```css
.ease-slide {
  animation:
    easeSlide
    2s
    ease-in-out
    infinite;
}
```

### Spin

```css
.ease-spin {
  animation:
    easeSpin
    2.2s
    linear
    infinite;
}
```

### Transition

A hover/focus interaction demonstrates reduced transition duration.

## Detecting the User Preference

The demo uses:

```js
const mediaQuery =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );
```

This is only used to display the detected system preference.

The reduced-motion behavior itself is controlled by CSS.

## Testing

### Chrome / Edge

Open DevTools and use:

```text
Rendering
→ Emulate CSS media feature
→ prefers-reduced-motion
→ reduce
```

### Firefox

Use the browser or operating-system accessibility settings to enable reduced motion, then reload the demo.

### Operating System

The most realistic test is enabling reduced motion at the operating-system level and opening the demo normally.

## Accessibility

The example is designed to validate that:

* Motion is reduced when requested.
* UI remains functional.
* Transitions are not completely removed through `transition: none`.
* Animations are not replaced with `animation: none`.
* Scroll behavior returns to automatic behavior.
* Users without the preference retain the normal experience.

## Design Goals

This example follows the EaseMotion CSS philosophy:

* **Accessible** — respects a user-controlled accessibility preference.
* **Human-readable** — uses a straightforward global media-query pattern.
* **Lightweight** — no external dependencies.
* **Composable** — applies to existing animations and transitions.
* **Non-destructive** — reduces motion without removing UI functionality.

## Files

```text
reduced-motion-global-audit/
├── demo.html
├── style.css
└── README.md
```

## Contribution

This example is intended to accompany the global reduced-motion support work tracked by issue #83891.

The final global selector strategy and integration location can be standardized by the EaseMotion CSS maintainer.
