# @starting-style: CSS-Only Enter/Exit Animations Demo (ksn)

## What does this do?

Demonstrates the `@starting-style` at-rule — a 2024 CSS feature that allows defining an element's initial state before the browser renders it. Paired with `transition-behavior: allow-discrete`, this enables CSS-only entrance and exit animations for toast notifications without any JavaScript animation logic.

## How is it used?

```css
.toast {
  /* Final visible state + exit transition */
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms, display 300ms;
  transition-behavior: allow-discrete;
}

/* Initial state before the browser renders the element */
@starting-style {
  .toast {
    opacity: 0;
    transform: translateY(16px);
  }
}

/* Dismissed state triggers fade-out */
.toast-dismissed {
  opacity: 0;
  transform: translateY(-8px);
  display: none;
}
```

## What the demo shows

1. **Toast notifications** — 4 variants (success, error, info, warning)
2. **Entrance animation** — slide up + fade in + subtle scale
3. **Exit animation** — slide down + fade out, driven by a CSS class toggle
4. **Live stack** — multiple toasts stack and animate independently
5. **Explanation panel** — educational content about the three CSS features used

## Why is it useful?

Historically, animating elements from `display: none` was impossible in CSS — browser rendering would skip them entirely. Developers worked around this with JavaScript (setTimeout, requestAnimationFrame, animation libraries). `@starting-style` plus `transition-behavior: allow-discrete` now enables CSS-only entrance animations by letting the browser know what the element's style would have been before it was rendered. This submission educates EaseMotion CSS contributors on this modern pattern.

## Browser support

As of 2026, `@starting-style` is supported in Chrome 117+, Edge 117+, Safari 17.5+, and Opera 103+. Firefox support is tracked in [Bug 1834876](https://bugzilla.mozilla.org/show_bug.cgi?id=1834876).
