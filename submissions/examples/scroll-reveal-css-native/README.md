# scroll-reveal-css-native

**Submission for Issue [#3478](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/3478)**

---

## 1. What does this do?

Triggers a fade + slide-up entrance animation on any element the moment it scrolls into the viewport — using **zero JavaScript**, powered entirely by the CSS `animation-timeline: view()` property.

---

## 2. How is it used?

```html
<!-- Basic scroll reveal (fade + slide up) -->
<div class="scroll-reveal">
  I animate in when I enter the viewport.
</div>

<!-- Composable with delay utilities for staggered sequences -->
<div class="scroll-reveal delay-100">First item</div>
<div class="scroll-reveal delay-200">Second item</div>
<div class="scroll-reveal delay-300">Third item</div>

<!-- Variants -->
<div class="scroll-reveal-fade">Fade only — no movement</div>
<div class="scroll-reveal-slow">Slower, more dramatic entrance</div>
<div class="scroll-reveal-left">Slides in from the left</div>
<div class="scroll-reveal-right">Slides in from the right</div>
```

---

## 3. Why is it useful?

Every existing EaseMotion CSS animation class (`ease-fade-in`, `ease-slide-up`, etc.) fires on **page load**. There is no current way to trigger motion **on scroll** without reaching for JavaScript — which breaks the framework's zero-dependency promise for one of the most commonly needed UI patterns.

> **How this differs from `submissions/examples/scroll-reveal/`:** The existing `scroll-reveal` submission uses `IntersectionObserver` (JavaScript) to toggle a `.is-visible` class. This submission uses **no JavaScript at all** — the scroll trigger is handled entirely in CSS via `animation-timeline: view()`. No observer, no class toggling, no script tag needed.

This submission fills that gap using `animation-timeline: view()` and `animation-range`, a modern CSS scroll-driven animation API now supported across all major browsers:

| Browser | Support |
|---------|---------|
| Chrome  | 115+    |
| Firefox | 110+    |
| Safari  | 18+     |

It fits EaseMotion CSS's four core principles:

- **Human-readable** — `.scroll-reveal` describes exactly what happens
- **Animation-first** — motion is driven entirely by CSS scroll position, no JS
- **Composable** — works alongside existing delay utilities like `ease-delay-200`
- **Accessible** — includes `@media (prefers-reduced-motion: reduce)` to immediately show content for users who prefer no motion

---

## Files

| File        | Purpose                          |
|-------------|----------------------------------|
| `style.css` | Raw CSS for all scroll-reveal variants |
| `demo.html` | Self-contained browser demo      |
| `README.md` | This file                        |